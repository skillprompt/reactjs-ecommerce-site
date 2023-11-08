import { useEffect, useState } from "react";
import { TProduct, getProducts } from "../data/product";

export function ProductList({
  handleProductEdit,
  setProducts,
  products,
}: {
  handleProductEdit: (selectedProduct: TProduct) => void;
  setProducts: (arg: TProduct[]) => void;
  products: TProduct[];
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {/* list of products */}

      {loading ? (
        <p>Loading product data..</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {products.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  margin: "20px 10px",
                  border: "2px solid #ccc",
                  padding: "10px",
                }}
              >
                <div>
                  <img
                    src={product.image}
                    style={{
                      width: 400,
                      height: 200,
                    }}
                  />
                </div>
                Id: {product.id}
                Title: {product.title}
                Image: {product.image}
                <button
                  type="button"
                  onClick={() => handleProductEdit(product)}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
