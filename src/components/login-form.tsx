import { useState } from "react";
import styles from "./login-form.module.css";
import { loginApi } from "../data/login";
import { useNavigate } from "react-router";
import { useAuth } from "../store/authentication";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUsername(event.currentTarget.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.currentTarget.value);
  };

  const handleLoginClick: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    console.log("submit data", {
      username,
      password,
    });

    /**
     * make api call to the backend
     * link: https://fakestoreapi.com/auth/login
     */
    const loginResponse = await loginApi({
      username,
      password,
    });
    console.log("login response", loginResponse);

    /**
     * update the store before navigation
     */
    auth.updateStore({
      token: loginResponse.token,
      isLoggedIn: true,
    });
    /**
     * login is successfull, go to dashboard
     */
    navigate("/dashboard");
  };

  return (
    <>
      <h2>Login Form</h2>

      <div className={styles.formContainer}>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div>
            <button type="button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
