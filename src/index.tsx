import React from "react";
import ReactDOM from "react-dom/client"; // ✅ use client entry
import "./index.css";
import { CartProvider } from "./Constants/CartContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { OrderProvider } from "./Pages/orders/OrderContext";
import { ProductGrid } from "./Pages/mainpages/ProductGrid";
import { UserProvider, useUser } from "./Pages/Login/UserContext";
import Login from "./Pages/Login/login";
import { CustomerBuy } from "./Pages/Login/CustomerBuy";
import { AdminUpload } from "./Pages/Login/AdminUpload";
import { ProductProvider } from "./Pages/Login/ProductContext";

const MainApp = () => {
  const { user, login } = useUser();

  // Show login screen if no user
  if (!user) {
    return (
      <div>
        <h2>Login</h2>
        <button
          onClick={() =>
            login({ id: "1", username: "admin", role: "admin" })
          }
        >
          Login as Admin
        </button>
        <button
          onClick={() =>
            login({ id: "2", username: "customer", role: "customer" })
          }
        >
          Login as Customer
        </button>
      </div>
    );
  }

  // Role-based rendering
  return user.role === "admin" ? <AdminUpload /> : <CustomerBuy />;
};


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <ProductProvider>
          <CartProvider>
            <OrderProvider>
              <BrowserRouter>
                <MainApp />
              </BrowserRouter>
            </OrderProvider>
          </CartProvider>
        </ProductProvider>
      </Provider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
