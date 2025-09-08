import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import userIcon from "../../assets/images/user.png";
import home from "../../assets/images/home.png";
import orders from "../../assets/images/orders.png";
import { useCart } from "../../Constants/CartContext";
import { Button } from "@mui/material";

export const Header: React.FC = () => {
  const { cartItems } = useCart();
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  const itemCount = (cartItems || []).reduce(
    (total: number, item: { quantity: any }) =>
      total + (Number(item.quantity) || 0),
    0
  );

  const user =localStorage.getItem("user") || "null";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // back to login
    setOpenDropdown(false);
  };

  return (
    <header>
      <img src={logo} alt="logo" style={{ width: "135px" }} />

      <div className="nav-cont">
        <Link to="/orders" className="orders">
          <img src={orders} alt="orders" style={{ width: "35px" }} />
        </Link>

        <Link to="/cart" className="cart" style={{ position: "relative" }}>
          <img src={cart} alt="cart" style={{ width: "35px" }} />
          {itemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
              }}
            >
              {itemCount}
            </span>
          )}
        </Link>

        <Link to="/" className="home">
          <img src={home} alt="home" style={{ width: "35px" }} />
        </Link>

        {/* User dropdown */}
        <div style={{ position: "relative" }}>
          <img
            src={userIcon}
            alt="user"
            style={{ width: "35px", cursor: "pointer" }}
            onClick={() => setOpenDropdown((prev) => !prev)}
          />

          {openDropdown && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                minWidth: "180px",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <strong>{user || "Guest"}</strong>
                <Button
                  onClick={() => setOpenDropdown(false)}
                  size="small"
                  style={{ minWidth: "30px" }}
                >
                  ✕
                </Button>
              </div>

              {user ? (
                <Button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "10px",
                    justifyContent: "flex-start",
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    justifyContent: "flex-start",
                  }}
                >
                  Login
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
