import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Info/>
      <About/>
      <Skills/>
    </>
  );
}
