import { Route, Routes } from "react-router-dom";
import { ProductGrid } from "../Pages/mainpages/ProductGrid";
import Clothing from "../Pages/pages/Clothing";
import HomeAppliance from "../Pages/pages/HomeAppliances";
import { Electronics } from "../Pages/pages/Electronics";
import Toys from "../Pages/pages/Toys";
import { Food } from "../Pages/pages/Food";
import { Sports } from "../Pages/pages/Sports";
import Watch1 from "../Pages/viewProduct/watchpage1";
import Electronics1 from "../Pages/viewProduct/electronicspage1";
import Mobile1 from "../Pages/viewProduct/mobilepage1";
import Cart from "../Pages/cart/cart";

const PageRoutes = () => {
  return (
    
<Routes>
  <Route path="/" element={<ProductGrid />} />
  <Route path="/clothing" element={<Clothing />} />
  <Route path="/electronics" element={<Electronics />} />
  <Route path="/home_appliance" element={<HomeAppliance />} />
  <Route path="/toys" element={<Toys />} />
  <Route path="/food" element={<Food />} />
  <Route path="/sports" element={<Sports />} />
  <Route path="/watchpage/:id" element={<Watch1 />} />
  <Route path="/electronics/:id" element={<Electronics1 />} />
  <Route path="/mobile/:id" element={<Mobile1 />} />
  <Route path="/cart" element={<Cart />} />
</Routes>


  );
};

export default PageRoutes;
