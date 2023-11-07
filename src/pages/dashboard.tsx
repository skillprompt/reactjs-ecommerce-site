import { useState } from "react";
import { BaseLayout } from "../components/base-layout";
import { Modal } from "../components/modal";
import { EditProductForm } from "../components/product-form";
import { ProductList } from "../components/products-list";
import { useAuth } from "../store/authentication";
import { TProduct } from "../data/product";

export function DashboardPage() {
  const auth = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<TProduct | null>(null);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = (selectedProduct: TProduct) => {
    /**
     * send data to the modal
     */
    console.log("selectedProduct", selectedProduct);
    setProduct(selectedProduct);

    /**
     * then open the modal
     */
    setIsOpen(true);
  };

  if (auth.isLoggedIn) {
    return (
      <BaseLayout>
        <div>
          <Modal
            isOpen={isOpen}
            title="Edit Product"
            onCloseModal={handleCloseModal}
          >
            {product ? <EditProductForm selectedProduct={product} /> : null}
          </Modal>
          <ProductList handleProductEdit={handleOpenModal} />
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <p>You are not logged in. Please login to see the dashboard.</p>
    </BaseLayout>
  );
}
