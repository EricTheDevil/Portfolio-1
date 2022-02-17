import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useSpring } from "@react-spring/core";

import NavBar from "./Components/NavBar.js";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Header from "./Components/Header";
import PreLoader from "./Components/PreLoader";
import TimeLine from "./Components/TimeLine";
import WhitePage from "./Components/WhitePage";
import BlogsPage from "./Pages/BlogsPage";
import SunScene from "./Components/SunScene";
import LottieAnim from "./Components/LottieAnim";
import SkillsPage from "./Pages/SkillsPage";
import Blob from "./Components/Blob";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Test from "./Pages/Test";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

//GSAP plugin register
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("CSSRulePlugin", CSSRulePlugin);
function App() {
  const [navToggle, setNavToggle] = useState(false);

  // prob need to combine all hooks for clarity
  // Scrolltrigger for Timeline, changes colors for theme
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".TimeLine",
      start: "top 50%",
      end: "bottom 50%",
      //markers: { startColor: 'white', endColor: 'white' },
      scrub: true,
      onEnter: () => ChangeColor(),
      onLeave: () => ChangeColor2(),
      onEnterBack: () => ChangeColor(),
      onLeaveBack: () => ChangeColor2(),
    });
  });

  // Scrolltrigger for About, changes background, changes colors for theme
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".AboutPage",
      start: "top 50%",
      end: "bottom 50%",
      //markers: { startColor: 'white', endColor: 'white' },
      scrub: true,
      onEnter: () => ChangeColor(),
      onLeave: () => ChangeColor2(),
      onEnterBack: () => ChangeColor(),
      onLeaveBack: () => ChangeColor2(),
    });
  });

  const ChangeColor = () => {
    gsap.to(".main-content", { backgroundColor: "#202435" });
    gsap.to(".nav", { backgroundColor: "#10121b" });
  };
  const ChangeColor2 = () => {
    gsap.to(".main-content", { backgroundColor: "#10121b" });
    gsap.to(".nav", { backgroundColor: "#202435" });
  };
  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <title>Eric Ng</title>

      <Header />
      <div className="main-content">
        <div className="content">
          <HomePage />
          <AboutPage />
          <SkillsPage />
          <TimeLine />
          <SunScene />
        </div>
      </div>
    </div>
  );
}

export default App;
