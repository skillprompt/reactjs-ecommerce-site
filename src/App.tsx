import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/login-page";
import { HomePage } from "./pages/home-page";
import { AboutUsPage } from "./pages/about-us";
import { DashboardPage } from "./pages/dashboard";
import { AuthProvider } from "./store/authentication";
import { ZodPage } from "./pages/zod";
import { BaseLayout } from "./components/base-layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <BaseLayout>
        <DashboardPage />
      </BaseLayout>
    ),
  },
  {
    path: "/zod",
    element: <ZodPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
