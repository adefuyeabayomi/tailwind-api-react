// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apitest from "./pages/Apitest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-test" element={<Apitest />} />
      </Routes>
    </Router>
  );
};

export default App;
