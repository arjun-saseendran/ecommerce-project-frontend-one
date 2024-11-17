import { createRoot } from "react-dom/client";
import ProductList from "./pages/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/GlobalStyles.css";
import Root from "./routes/root";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";
import AdminSignup from './pages/AdminSignup'
import AdminLogin from './pages/AdminLogin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <ProductList />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "signup",
        element: <UserSignup />,
      },
      {
        path: "login",
        element: <UserLogin />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Root />,
    children: [
      {
        path: "",
        element: <AddProduct />,
      },
      {
        path: "signup",
        element: <AdminSignup />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
