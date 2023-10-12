import { LoginForm } from "../components/login-form";
import styles from "../styles/login-page.module.css";

export function LoginPage() {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>React S-com Site</h1>
      </nav>
      <section className={styles.formSection}>
        <LoginForm />
      </section>
    </div>
  );
}
