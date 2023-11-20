export type TProduct = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

/**
 * it fetches all the products from the server
 */
export async function getProducts(): Promise<TProduct[]> {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error.message));
  });
}

/**
 * api to `add to cart`
 */
export async function addToCart(payload: {
  userId: number;
  date: Date;
  products: { productId: number; quantity: number }[];
}) {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}
