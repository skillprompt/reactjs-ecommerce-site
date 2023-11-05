import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/login-page";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h2>React S-com Site</h2>
        <ul>
          <li>
            <Link to={`/login`}>Login</Link>
          </li>
          <li>
            <Link to={`/about-us`}>About Us</Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    path: "about-us",
    element: <p>I am about us page</p>,
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
