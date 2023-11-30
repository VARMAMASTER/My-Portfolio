import React from "react";
import Home from "./pages/Home";
import "./CSS/Home_styles/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WSA from "./components/InternDemo/WSA";
import IITD from "./components/InternDemo/IITD";
import BIS from "./components/InternDemo/BIS";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/wsa" element={<WSA/>} />
        <Route path="/iitd" element={<IITD/>}/>
        <Route path="/bis" element={<BIS/>}/>
      </Routes>
      
    </Router>
  );
}
