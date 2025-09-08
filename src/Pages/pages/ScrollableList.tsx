import React, { useRef } from "react";
import right from '../../assets/images/left.png';
import left from '../../assets/images/right.png';
import { Link } from "react-router-dom";

const ScrollableList = ({ items }: { items: any[] }) => {
  const scrollRef = useRef<HTMLDivElement | any>("");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300, // Change for vertical scroll if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
        <button onClick={() => scroll("left")} className="py-5" ><img src={right} alt="" style={{width:"35px"}}/></button>
      <div
        ref={scrollRef}
        className="product-container"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((product) => (
        <article key={product.id} className="p-5">
          <img
            className=""
            src={product.image}
          ></img>
          <p className="product-size">{product.name}</p>
          <p className="">{product.price}</p>
          <Link to={`/electronics/${product.id}`}>
          <button className="">
            Add to Cart
          </button>
          </Link>
        </article>
      ))}
      </div>
      <button onClick={() => scroll("right")} className="py-6" ><img src={left} alt="" style={{width:"39px",height:"35px",top:"6px",left:"6px",position:"relative"}}/></button>
    </div>
  );
};

export default ScrollableList;
