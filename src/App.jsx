import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Student from "./components/Student";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import { useEffect } from "react";
import Faculty from "./components/Faculty";
import Admissions from "./components/Admissions";
import Academics from "./components/Academics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SportsGallery from "./components/SportsGallery";
import ScienceExhibition from "./components/ScienceExhibition";
import CulturalFestGallery from "./components/CulturalFest";

function MainComponents() {
  const location = useLocation();
  const routesWithoutMainComponents = [
    "/about",
    "/faculty",
    "/admissions",
    "/academics",
    "/sportsgallery",
    "/exhibitiongallery",
    "/culturalgallery",
  ];
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (routesWithoutMainComponents.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <Hero />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="student">
        <Student />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <ContactUs />
        <ToastContainer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/sportsgallery" element={<SportsGallery />} />
        <Route path="/exhibitiongallery" element={<ScienceExhibition />} />
        <Route path="/culturalgallery" element={<CulturalFestGallery />} />
      </Routes>
      <MainComponents />
    </Router>
  );
}

export default App;
