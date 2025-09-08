import pro1 from "../../assets/images/prof/pro1.jpg";
import pro2 from "../../assets/images/prof/pro2.jpg";
import pro3 from "../../assets/images/prof/pro3.jpg";
import pro4 from "../../assets/images/prof/pro4.jpg";
import pro5 from "../../assets/images/prof/pro5.jpg";
import "../../css/Clothing.css";
import proslide1 from "../../assets/images/prof/proslide/proslide1.jpg";
import proslide2 from "../../assets/images/prof/proslide/proslide2.jpg";
import proslide3 from "../../assets/images/prof/proslide/proslide3.jpg";

function Clothing() {
  return (
    <div>
      <div className="profi">
        <div>
          <img src={pro1} alt="" className="pro1" />
          <h4 className="clo">Men's Clothing</h4>
        </div>
        <div>
          <img src={pro2} alt="" className="pro1" />
          <h4 className="clo">Women's Clothing</h4>
        </div>
        <div>
          <img src={pro3} alt="" className="pro1" />
          <h4 className="clo">Kids's Fashion</h4>
        </div>
        <div>
          <img src={pro4} alt="" className="pro1" />
          <h4 className="clo">Jewellery</h4>
        </div>
        <div>
          <img src={pro5} alt="" className="pro1" />
          <h4 className="clo">Beauty</h4>
        </div>
      </div>
      <div className="slide-img11">
        <img src={proslide1} alt="" className="slideimg" />
      </div>
      <h3 className="headi1">TOP BRANDS</h3>
      <h2 className="headi2">Unbeatable offers await</h2>
      
    </div>
  );
}
export default Clothing;
