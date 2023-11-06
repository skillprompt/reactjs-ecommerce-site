import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/login-page.module.css";
import { useAuth } from "../store/authentication";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const navigate = useNavigate();

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
      </nav>
      <section className={styles.formSection}>{children}</section>
    </div>
  );
}
