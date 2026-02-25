import React from "react";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Layout;
