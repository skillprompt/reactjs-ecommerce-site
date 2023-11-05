import { Link } from "react-router-dom";
import styles from "../styles/login-page.module.css";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>
          <Link to="/">E-commmerce</Link>
        </h1>

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
      <section className={styles.formSection}>{children}</section>
    </div>
  );
}
