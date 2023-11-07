import { useEffect, useState } from "react";
import { TProduct, getProducts } from "../data/product";

export function ProductList({
  handleProductEdit,
}: {
  handleProductEdit: (selectedProduct: TProduct) => void;
}) {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {/* list of products */}

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
              <button type="button" onClick={() => handleProductEdit(product)}>
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
