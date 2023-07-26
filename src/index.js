import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import { AuthProvider } from "./context/authContext";
import { WishlistProvider } from "./context/wishlistContext";
import { CartProvider } from "./context/cartContext";
import { AddressProvider } from "./context/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AddressProvider>
          <CartProvider>
            <WishlistProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </WishlistProvider>
          </CartProvider>
        </AddressProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
