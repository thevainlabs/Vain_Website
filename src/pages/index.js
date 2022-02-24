import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};
export default Home;
