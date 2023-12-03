// Layout.js
import React from "react";
import NavBar from "../../pages/NavBar"; 
import Footer from "../../pages/footer"; 

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
