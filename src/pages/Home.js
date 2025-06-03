import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import About from "../components/About";
import Skills from "../components/Skills";
import InternshipsCard from "../components/Internships";
import Projects from "../components/Projects";
import UpcomminProjects from "../components/UpcomminProjects";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Info/>
      <div>
      <About/>
      <Skills/>
      <InternshipsCard/>
      <Projects/>
      <UpcomminProjects/>
      </div>
    </>
  );
}
