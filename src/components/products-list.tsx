import { TProduct, addToCart, getProducts } from "../data/product";
import { useCartStore } from "../store/cart";
import { useAuth } from "../store/authentication";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
}: {
  handleProductEdit: (selectedProduct: TProduct) => void;
}) {
  const auth = useAuth();
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  /**
   * We need to use react query
   */
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log("data", data);

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
      {error ? <p>{error.message}</p> : null}

      {isLoading ? (
        <p>Loading product data..</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {data?.map((product) => {
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
