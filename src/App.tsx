import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/login-page";
import { HomePage } from "./pages/home-page";
import { AboutUsPage } from "./pages/about-us";

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
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
