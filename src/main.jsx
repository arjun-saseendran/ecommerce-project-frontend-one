import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./pages/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/GlobalStyles.css";
import Root from "./routes/root";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
