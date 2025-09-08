import { Outlet } from "react-router-dom";
import { Header } from "../Pages/mainpages/Header";
import Sidebar from "../Pages/mainpages/Sidebar";
import { Footer } from "../Pages/mainpages/Footer";
 

const Layout = ({ showSidebar }: { showSidebar: boolean }) => {
  return (
    <div className="container">
      <Header />
      <div className="layout">
        <Sidebar isVisible={showSidebar} />
        <main>
          <Outlet /> {/* nested route renders here */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
