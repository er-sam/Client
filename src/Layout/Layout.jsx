import React from "react";
import Nav from "../Navbar/Navbar";
import FooterPage from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="min-h-[80vh]">
        {children}
      </main>
      <FooterPage />
    </>
  );
}

export default Layout;
