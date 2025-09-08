import watch1 from "../../assets/images/watch/watch1.jpg";
import watch2 from "../../assets/images/watch/watch2.jpg";
import watch3 from "../../assets/images/watch/watch3.jpg";
import watch4 from "../../assets/images/watch/watch4.jpg";
import watch5 from "../../assets/images/watch/watch5.jpg";

import mobile1 from "../../assets/images/mobile/mobile1.jpg";
import mobile2 from "../../assets/images/mobile/mobile2.jpg";
import mobile3 from "../../assets/images/mobile/mobile 4.jpg";
import mobile4 from "../../assets/images/mobile/mobile5.jpg";
import mobile5 from "../../assets/images/mobile/mobile6.jpg";

import scroll1 from "../../assets/images/scroll/scroll1.png";
import scroll2 from "../../assets/images/scroll/scroll2.png";
import scroll3 from "../../assets/images/scroll/scroll3.png";
import scroll4 from "../../assets/images/scroll/scroll4.png";
import scroll5 from "../../assets/images/scroll/scroll5.png";
import newDay1 from "../../assets/images/11.jpg";
import newDay2 from "../../assets/images/22.jpg";
import newDay3 from "../../assets/images/33.jpg";
import dispwatch from "../../assets/images/dispwatch.webp";
import dispreturn from "../../assets/images/dispreturn.webp";
import { Link } from "react-router-dom";
import "../../css/productgrid.css";
const watches = [
  { id: 1, image: watch1, name: "Product 1", price: "$99.99", link: "link1" },
  { id: 2, image: watch2, name: "Product 2", price: "$149.99", link: "link1" },
  { id: 3, image: watch3, name: "Product 3", price: "$79.99", link: "link1" },
  { id: 4, image: watch4, name: "Product 4", price: "$45.99", link: "link1" },
  { id: 5, image: watch5, name: "Product 5", price: "$76.99", link: "link1" },
];

const mobiles = [
  { id: 1, image: mobile1, name: "Product 1", price: "$99.99" },
  { id: 2, image: mobile2, name: "Product 2", price: "$149.99" },
  { id: 3, image: mobile3, name: "Product 3", price: "$79.99" },
  { id: 4, image: mobile4, name: "Product 4", price: "$45.99" },
  { id: 5, image: mobile5, name: "Product 5", price: "$76.99" },
];

export const ProductGrid = () => (
  <section aria-label="Product List" className="product-list-section">
    <div className="slide-view-product">
      <div className="slide-track">
        <img className="slide-img delay-0" src={scroll1} alt="scroll 1" />
        <img className="slide-img delay-1" src={scroll2} alt="scroll 2" />
        <img className="slide-img delay-2" src={scroll3} alt="scroll 3" />
        <img className="slide-img delay-3" src={scroll4} alt="scroll 4" />
        <img className="slide-img delay-4" src={scroll5} alt="scroll 5" />
      </div>
    </div>

    <div className="new-content">
      <strong>
        <h1>WHAT'S SPECIAL</h1>
      </strong>
      <hr className="line"></hr>
      <b>
        <p>FOR TODAY?</p>
      </b>
    </div>

    <div className="new-content1">
      <div className="newd">
        <img className="newd1" src={newDay1} />
        <img className="newd2" src={newDay2} />
        <img className="newd3" src={newDay3} />
      </div>
    </div>
    <br />
    <div className="arrivals">
      <h1 style={{ width: "92%" }}>NEW ARRIVALS</h1>
    </div>
    <img src={dispwatch} alt="dispwatch" className="dispwatch" />
    <div className="watch_container">
      <h2 className="text-2xl font-bold mb-4">Watches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {watches.map((product) => (
          <article
            key={product.id}
            className="bg-white p-4 rounded shadow"
            style={{ backgroundColor: "seashell" }}
          >
            <img
              className="w-full h-40 object-cover mb-2 rounded"
              src={product.image}
            ></img>
            <p className="text-gray-700">{product.price}</p>
            <Link to={`/watchpage/${product.id}`}>
              <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                style={{ backgroundColor: "black" }}
              >
                View Product
              </button>
            </Link>
          </article>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Mobiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mobiles.map((product) => (
          <article
            key={product.id}
            className="bg-white p-4 rounded shadow"
            style={{ backgroundColor: "seashell" }}
          >
            <img
              className="w-full h-40 object-cover mb-2 rounded"
              src={product.image}
            ></img>
            <p className="text-gray-700">{product.price}</p>
            <Link to={`/mobile/${product.id}`}>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              style={{ backgroundColor: "black" }}
            >
              View Product
            </button>
            </Link>
          </article>
        ))}
      </div>
      <br />
    </div>
    <img src={dispreturn} alt="dispwatch" className="dispreturn" />
    <br />
    {/* <BackToTop /> */}
  </section>
);
