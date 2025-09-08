import side1 from "../../assets/images/sidebar-icons/electronics.png";
import side2 from "../../assets/images/sidebar-icons/appliance.png";
import side3 from "../../assets/images/sidebar-icons/fashion.png";
import side4 from "../../assets/images/sidebar-icons/food.png";
import side5 from "../../assets/images/sidebar-icons/sports.png";
import side6 from "../../assets/images/sidebar-icons/toys.png";
import { useNavigate } from "react-router-dom";
type SidebarProps = {
  isVisible: boolean;
};

function Sidebar({ isVisible }: SidebarProps) {
  const navigate = useNavigate();
  return (
    <aside className={`sidebar ${isVisible ? "visible" : ""}`}>
      <nav>
        <h2>Categories</h2>
        <ul>
          <li onClick={() => navigate("electronics")}>
            <img src={side1} alt="side1" className="side1" /> Electronics
          </li>
          <li onClick={() => navigate("clothing")}>
            <img src={side3} alt="side3" className="side1" /> Fashion
          </li>
          <li onClick={() => navigate("home_appliance")}>
            <img src={side2} alt="side2" className="side1" /> Appliances
          </li>
          <li onClick={() => navigate("toys")}>
            <img src={side6} alt="side6" className="side1" /> Toys
          </li>
          <li onClick={() => navigate("sports")}>
            <img src={side5} alt="side5" className="side1" /> Sports
          </li>
          <li onClick={() => navigate("food")}>
            <img src={side4} alt="side4" className="side1" /> Food
          </li>
        </ul>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "0.375rem",
            border: "white",
          }}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}
export default Sidebar;
