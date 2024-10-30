import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductList from './pages/ProductList'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/GlobalStyles.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
