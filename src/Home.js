import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import Packages from "./Packages";
import TravelBooking from "./TravelBooking";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Packages />
      <TravelBooking />
      <Footer />
    </>
  );
};

export default Home;
