import { useState } from "react";
import { Modal } from "../components/modal";
import { EditProductForm } from "../components/product-form";
import { ProductList } from "../components/products-list";
import { useAuth } from "../store/authentication";
import { TProduct } from "../data/product";
import { useProductCtx } from "../store/product";

export function DashboardPage() {
  const auth = useAuth();
  const productCtx = useProductCtx();

  const [isOpen, setIsOpen] = useState(false);

  /**
   * Try to move this product to the store
   */
  const [products, setProducts] = useState<TProduct[]>([]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = (selectedProduct: TProduct) => {
    /**
     * send data to the modal
     */
    console.log("selectedProduct", selectedProduct);
    if (typeof productCtx.updateTheSelectedProduct === "function") {
      productCtx.updateTheSelectedProduct(selectedProduct);
    }

    /**
     * then open the modal
     */
    setIsOpen(true);
  };

  const afterProductUpdate = (updatedData: TProduct) => {
    const updatedProducts = products.map((product) => {
      if (product.id === updatedData.id) {
        /**
         * we are updating that product
         */
        return updatedData;
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
    setIsOpen(false);
  };

  console.log("productCtx.product", productCtx.product);

  if (auth.isLoggedIn) {
    return (
      <div>
        <Modal
          isOpen={isOpen}
          title="Edit Product"
          onCloseModal={handleCloseModal}
        >
          {productCtx.product ? (
            <EditProductForm
              selectedProduct={productCtx.product}
              afterProductUpdate={afterProductUpdate}
            />
          ) : null}
        </Modal>
        <ProductList
          handleProductEdit={handleOpenModal}
          setProducts={setProducts}
          products={products}
        />
      </div>
    );
  }

  return (
    <div>
      <p>You are not logged in. Please login to see the dashboard.</p>
    </div>
  );
}
