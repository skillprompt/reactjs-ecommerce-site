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
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateStore = ({
    token,
    isLoggedIn,
  }: {
    token: string;
    isLoggedIn: boolean;
  }) => {
    setToken(token);
    setIsLoggedIn(isLoggedIn);
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
