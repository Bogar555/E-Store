import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import tag from "../../assets/images/tag.webp";
import "../../css/watchpage.css";
import { Button } from "primereact/button";
import cart from "../cart/cart";
import { useCart } from "../../Constants/CartContext";
import { watches } from "../../assets/data/watchData";

export default function Watch1() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const product = watches.find((w) => w.id === Number(id));
  const { addToCart } = useCart();


  if (!product) return <div>Not Found</div>;

  const Gotocart = () => {
    if (!selectedOption) return;
    addToCart(product, quantity);
    navigate("/cart");
  };

  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const quantity = Number(selectedOption);

  // Remove ₹ and commas, then convert to number
  const priceNumber = Number(product.price.replace(/[₹,]/g, ""));
  const totalPrice = priceNumber * quantity;

  // Selected Price: {product.price} * {selectedOption || 0} = ₹{selectedOption ? totalPrice : 0}

  return (
    <section aria-label="Product Detail" className="product-list">
      <div className="p-grid">
        <div className="image-container">
          <img className="image" src={product.image} alt={product.name} />
        </div>
        <div className="image-container1">
          <b>{product.heading}</b>
          <div className="fullwidth"></div>
          <div className="fullwidth"></div>
          <div className="fullwidth"></div>
          <div>{product.name}</div>
          <div className="fullwidth"></div>
          <div className="colorgreen">{product.special}</div>
          <div className="fullwidth"></div>
          <div>
            <b>{product.price}</b>&nbsp;&nbsp;
            <span style={{ textDecorationLine: "line-through" }}>₹1,799</span>
            &nbsp;&nbsp;<span className="colorgreen">83% off</span>
          </div>
          <div className="fullwidth"></div>
          <div className="fullwidth"></div>
          <div className="fullwidth"></div>
          <div>{product.offers}</div>
          <div className="fullwidth"></div>
          <div>
            <img src={tag} alt="tag" className="tag" />
            <b>Bank Offer</b>&nbsp;{product.offer1}&nbsp;
            <span className="tc">T&C.</span>
          </div>
          <div>
            <img src={tag} alt="tag" className="tag" />
            <b>Bank Offer</b>&nbsp;{product.offer2}&nbsp;
            <span className="tc">T&C.</span>
          </div>
          <div>
            <img src={tag} alt="tag" className="tag" />
            <b>Bank Offer</b>&nbsp;{product.offer3}&nbsp;
            <span className="tc">T&C.</span>
          </div>
          <div>
            <img src={tag} alt="tag" className="tag" />
            <b>Bank Offer</b>&nbsp;{product.offer4}&nbsp;
            <span className="tc">T&C.</span>
          </div>
        </div>
      </div>
      <div className="fullwidth"></div>
      <div className="fullwidth"></div>
      <div className="p-grid">
        <div className="image-container">
          <div className="pro_price">
            <b>{product.price}</b>
          </div>
          <div className="qtn_selection">
            <label>Quantity: </label>
            <select value={selectedOption} onChange={handleChange}>
              <option value="">-- Choose --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <p>
              Total price of the quantity :{" "}
              <span className="color_red">₹{totalPrice}</span>
            </p>
          </div>
          <div className="butn_container">
            <Button
              label="Add to cart"
              icon="pi pi-plus"
              className="addcart"
              onClick={Gotocart}
              disabled={!selectedOption}
            />
          </div>
        </div>
        <div className="image-container1"></div>
      </div>
    </section>
  );
}
