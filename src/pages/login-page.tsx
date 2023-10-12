import styles from "../styles/login-page.module.css";

export function LoginPage() {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>React S-com Site</h1>
      </nav>
      <section className={styles.formSection}>
        <h2>Login Form</h2>

        <div className={styles.formContainer}>
          <form>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div>
              <button type="button">Login</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
