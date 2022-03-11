import React, { useState } from "react";
import Blogs from "../Components/BlogsScreen";
import Contact from "../Components/ContactScreen";
import HomeScreen from "../Components/HomeScreen";
import Info from "../Components/InfoScreen";
import Navbar from "../Components/Navbar";
import Project from "../Components/ProjectScreen";
import Sidebar from "../Components/Sidebar";
import Work from "../Components/WorkScreen";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeScreen></HomeScreen>
      <Work></Work>
      <Project></Project>
      <Blogs />
      <Info />
      <Contact />
    </>
  );
};
export default Home;
