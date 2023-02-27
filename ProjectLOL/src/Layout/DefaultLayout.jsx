import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default HomePage;
