import { useEffect, useState } from "react";
import { TProduct, addToCart, getProducts } from "../data/product";
import { useCartStore } from "../store/cart";
import { useAuth } from "../store/authentication";

function getUserIdFromToken(token: string) {
  /**
   * do something with the token:
   * validate the token
   * and decode its data
   */
  token.trim();
  return 2;
}

export function ProductList({
  handleProductEdit,
  setProducts,
  products,
}: {
  handleProductEdit: (selectedProduct: TProduct) => void;
  setProducts: (arg: TProduct[]) => void;
  products: TProduct[];
}) {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  useEffect(() => {
    setLoading(true);
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  // const handleCartIncrease = () => {
  //   increaseQuantity();
  // };

  const handleCartIncrease = async (product: TProduct) => {
    increaseQuantity(product);
    /**
     * Send fetch request to the backend to update the cart
     */
    console.log("auth", auth.token);
    addToCart({
      userId: getUserIdFromToken(auth.token),
      date: new Date(),
      products: [
        {
          productId: product.id,
          quantity: 1,
        },
      ],
    });
  };

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
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleProductEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCartIncrease(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
