import { useOrders } from "./OrderContext";
import "../../css/order.css";
import DynamicButton from "../button/button_component";

export default function OrdersPage() {
  const { orders, removeOrder } = useOrders();

  if (orders.length === 0) {
    return <div className="buy_container">No orders yet.</div>;
  }

  return (
    <div className="buy_container">
      <h2>My Orders</h2>
      {orders.map((order) => {
        // ✅ Calculate total for this order
        const totalPrice = order.items.reduce((sum, item) => {
          const price = Number(item.product.price.replace(/[₹,]/g, "")) || 0;
          return sum + price * item.quantity;
        }, 0);

        const orderDate = new Date(order.date);
        const expectedDate = new Date(orderDate);
        expectedDate.setDate(orderDate.getDate() + 4);

        return (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>
              <b>Order ID:</b> {order.id}
            </p>
            <p>
              <b>Date:</b> {new Date(order.date).toLocaleString()}
            </p>
            <p>
              <b>Expected Date:</b> {expectedDate.toLocaleString()}
            </p>
            <p>
              <b>Status:</b> {order.status}
            </p>
            <ul>
              {order.items.map((item, index) => (
                <>
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="width_20"
                      style={{ marginRight: "10px" }}
                    />
                  </li>
                  <div>{item.product.name}</div>
                </>
              ))}
            </ul>
            <p>
              <b>Total Price:</b> ₹{totalPrice.toLocaleString()}
            </p>
            <DynamicButton onClick={() => removeOrder(order.id)}>
              Cancel Order
            </DynamicButton>
          </div>
        );
      })}
      <br />
      <br />
    </div>
  );
}
