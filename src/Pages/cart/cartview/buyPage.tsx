import { useNavigate } from "react-router-dom";
import { useCart } from "../../../Constants/CartContext";
import { useOrders } from "../../orders/OrderContext";
import { CartItem, Order } from "../../types/types";
import "../../../css/buypage.css";
import DynamicButton from "../../button/button_component";

export default function BuyPage() {
  const { cartItems, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (cartItems.length === 0) return;

    const newOrder: Order = {
      id: Date.now(),
      items: cartItems,
      date: new Date().toISOString(),
      status: "confirmed",
    };

    addOrder(newOrder);
    clearCart();
    navigate("/orders");
  };

  if (cartItems.length === 0) {
    return <div>No items in cart. Please add products before buying.</div>;
  }

  return (
    <div className="buy_container">
      <h2>Review Your Cart</h2>
      <ul>
        {cartItems.map((item: CartItem, index: number) => {
          const price = Number(item.product.price.replace(/[₹,]/g, "")) || 0;
          const total = price * item.quantity;
          {
            cartItems.map((item) => (
              <div key={item.product.id}>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  width={60}
                />
                <p>
                  {item.product.name} - {item.quantity}
                </p>
              </div>
            ));
          }

          return (
            <div key={index}>
              <img src={item.product.image} alt={item.product.name} className="width_50"/>
              <div>
                <b>{item.product.name}</b>
                <div>
                  {item.quantity} × ₹{price} = ₹{total}
                </div>
              </div>
            </div>
          );
        })}
      </ul>

      <h3>
        Grand Total: ₹
        {cartItems.reduce((sum: number, item: CartItem) => {
          const price = Number(item.product.price.replace(/[₹,]/g, "")) || 0;
          return sum + price * item.quantity;
        }, 0)}
      </h3>

      <DynamicButton onClick={handlePurchase}>Confirm Purchase</DynamicButton>
    </div>
  );
}
