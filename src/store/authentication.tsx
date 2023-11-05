import { createContext, useContext, useState } from "react";

// createContext
// useContext

type TAuth = {
  token: string;
  isLoggedIn: boolean;
  updateStore: ({
    token,
    isLoggedIn,
  }: {
    token: string;
    isLoggedIn: boolean;
  }) => void;
};

const AuthContext = createContext<TAuth>({
  token: "",
  isLoggedIn: false,
  updateStore: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const tokenVal = localStorage.getItem("token") || "";
  const isLoggedInVal = localStorage.getItem("isLoggedIn") || "false";

  const [token, setToken] = useState(tokenVal);
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInVal === "true");

  const updateStore = ({
    token,
    isLoggedIn,
  }: {
    token: string;
    isLoggedIn: boolean;
  }) => {
    setToken(token);
    setIsLoggedIn(isLoggedIn);

    localStorage.setItem("token", token);
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        updateStore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authCtx = useContext(AuthContext);
  return authCtx;
}
