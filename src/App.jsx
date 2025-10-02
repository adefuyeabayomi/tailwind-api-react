// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apitest from "./pages/Apitest";
import HeroSection from "./pages/newHero";
import Header from "./pages/lyseis-creation-project/headerComponent";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-test" element={<Apitest />} />
        <Route path="/hero" element={<HeroSection />} />
      </Routes>
    </Router>
  );
};

export default App;
