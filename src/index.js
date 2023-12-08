import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BasketProvider from "./Context/BasketContext";
import WishListProvider from "./Context/WishListContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WishListProvider>
    
      <BasketProvider>
        <App />
      </BasketProvider>
      </WishListProvider>
    
  </React.StrictMode>
);
