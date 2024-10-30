import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductList from './pages/ProductList'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/GlobalStyles.css'
import Root from './routes/root';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <ProductList/>
      },
      {
      path: '/product-details/:id',
      element: <ProductDetails/>
    },
      {
      path: '/cart',
      element: <Cart/>
    },
      {
      path: '/checkout',
      element: <Checkout/>
    },
      {
      path: '/register',
      element: <Register/>
    },
      {
      path: '/login',
      element: <Login/>
    }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
