import React, { useState } from "react";
import "./App.css";
import { Header } from "./Pages/mainpages/Header";
import Sidebar from "./Pages/mainpages/Sidebar";
import AppRoutes from "./Allroutes/AppRoutes";
import { Footer } from "./Pages/mainpages/Footer";
import Login from "./Pages/Login/login";

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
        <main>
          <AppRoutes />
        </main>
  );
};

export default App;
