import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductList from './pages/ProductList'
import './styles/GlobalStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductList />
  </StrictMode>,
)
