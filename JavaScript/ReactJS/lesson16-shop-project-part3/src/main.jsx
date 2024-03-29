import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/bootstrap.min.css';
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from 'react-use-cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
)
