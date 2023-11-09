import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/login-page.module.css";
import { useAuth } from "../store/authentication";
import { ProductProvider, useProductCtx } from "../store/product";
import { useCartStore } from "../store/cart";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const navigate = useNavigate();

  const cartQuantity = useCartStore((state) => state.quantity);
  const decreaseCartQuantity = useCartStore((state) => state.decreaseQuantity);
  const productsInCart = useCartStore((state) => state.products);

  const handleLogout = () => {
    /**
     * localstorage clear
     * - token
     * - isLoggedIn
     */
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "false");

    /**
     * update the auth store
     */
    auth.updateStore({
      token: "",
      isLoggedIn: false,
    });

    /**
     * redirect user to the login page
     */
    navigate(`/login`);
  };

  return (
    <ProductProvider>
      <div>
        <nav className={styles.nav}>
          <h1>
            <Link to="/">E-commmerce</Link>
          </h1>

          <ul>
            {auth.isLoggedIn ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
          <ShowSelectedProduct />

          {/* Show Cart here */}
          {/* TODO: make dropdown for cart */}
          <p>
            Cart <sup>{cartQuantity}</sup>
            <div>
              <ul>
                {productsInCart.map((product) => {
                  return (
                    <li key={product.id}>
                      {product.title}
                      <button
                        type="button"
                        onClick={() => decreaseCartQuantity(product)}
                      >
                        Remove
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </p>
        </nav>
        <section className={styles.formSection}>{children}</section>
      </div>
    </ProductProvider>
  );
}

function ShowSelectedProduct() {
  const productCtx = useProductCtx();

  return productCtx.product?.id ? (
    <p>Selected Product Name: {productCtx.product?.title}</p>
  ) : null;
}
