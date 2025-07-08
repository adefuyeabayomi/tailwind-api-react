// pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
  <h1 class="">
    Hello world!
  </h1>
      <Link to="/api-test">Go to API Test</Link>
    </div>
  );
};

export default Home;
