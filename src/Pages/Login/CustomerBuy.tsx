import { useCart } from "./CartContext";
import { useProducts } from "./ProductContext";

export const CustomerBuy = () => {
  const { products } = useProducts();

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <img src={p.image} width={50} /> {p.name} - ₹{p.price}
            <button>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
