import elecslide1 from '../../assets/images/electronics/elecslide1.avif';
import elecslide2 from '../../assets/images/electronics/elecslide2.avif';
import elecslide3 from '../../assets/images/electronics/elecslide3.avif';
import elecslide4 from '../../assets/images/electronics/elecslide4.jpeg';
import elecslide5 from '../../assets/images/electronics/elecslide5.avif';
import elecslide6 from '../../assets/images/electronics/elecslide6.avif';
import elec1 from '../../assets/images/electronics/product/electro1.jpg';
import elec2 from '../../assets/images/electronics/product/electro2.jpg';
import elec3 from '../../assets/images/electronics/product/electro3.jpg';
import elec4 from '../../assets/images/electronics/product/electro4.webp';
import elec5 from '../../assets/images/electronics/product/electro5.jpg';
import elec6 from '../../assets/images/electronics/product/electro6.webp';
import BackToTop from './backtotop';
import ScrollableList from './ScrollableList';
import "../../css/Electronics.css";

const Electro = [
  { id: 1, image: elec1, name: "", price: "$99.99" },
  { id: 2, image: elec2, name: "", price: "$149.99" },
  { id: 3, image: elec3, name: "", price: "$79.99" },
  { id: 4, image: elec4, name: "", price: "$45.99" },
  { id: 5, image: elec5, name: "", price: "$76.99" },
  { id: 6, image: elec6, name: "", price: "$76.99" }
];

export const Electronics = () => {
  return (
    <>
    <section aria-label="Product List" className="product-list1">
    <div className="slide-view1">
      <div className="slide-track">
        <a href="#"><img className="slide-img delay-0" src={elecslide1} alt="scroll 1" /></a>
        <a href="#"><img className="slide-img delay-1" src={elecslide2} alt="scroll 2" /></a>
        <a href="#"><img className="slide-img delay-2" src={elecslide3} alt="scroll 3" /></a>
        <a href="#"><img className="slide-img delay-3" src={elecslide4} alt="scroll 4" /></a>
        <a href="#"><img className="slide-img delay-4" src={elecslide5} alt="scroll 5" /></a>
        <a href="#"><img className="slide-img delay-4" src={elecslide6} alt="scroll 5" /></a>
      </div>
    </div>
    

<h2 className="">Electonics</h2>
    <div >
      <ScrollableList items={Electro} />
    </div>
    <br />
    
    </section>
    <BackToTop />
    </>
  )
}
