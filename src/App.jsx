import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Subscribe from "./components/Subscribe/Subscribe";
import SwiperComponent from "./components/Swiper/Swiper";
import Sorted from "./components/Sorted/Sorted";
import Footer from "./components/footer/Footer";
import Blog from "./components/home/Blog";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`app ${open ? "move-left" : "move-right"}`}>
      <Navbar open={open} setOpen={setOpen} />
      <Home />
      <Blog />
      <Subscribe />
      <SwiperComponent />
      <Sorted />
      <Footer />
    </div>
  );
}

export default App;
