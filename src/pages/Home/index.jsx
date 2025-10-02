// pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1 className="text-2xl font-semibold">Hello world!</h1>

      <Link
        to="/api-test"
        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      >
        Go to API Test
      </Link>

      <Link
        to="/hero"
        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      >
        Go To Hero
      </Link>
    </div>
  );
};

export default Home;
