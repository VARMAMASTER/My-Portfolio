import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import About from "../components/About";
import Skills from "../components/Skills";
import InternshipsCard from "../components/Internships";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Info/>
      <div className="bg">
      <About/>
      <Skills/>
      <InternshipsCard/>
      </div>
    </>
  );
}
