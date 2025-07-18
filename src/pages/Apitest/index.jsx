// pages/Apitest.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Apitest = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [putText, setPutText] = useState("");
  const [image, setImage] = useState(null);

  const base_url = "https://jsonplaceholder.typicode.com";
  const path = "/todos";
  const fullUrl = `${base_url}${path}`;

  const getRequest = async () => {
    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      console.log("GET Response:", data);
    } catch (err) {
      console.error("GET Error:", err);
    }
  };

  const postRequest = async () => {
    try {
      const response = await fetch(`${base_url}/posts`, {
        method: "POST",
        body: JSON.stringify({
          title: text1,
          body: text2,
          userId: 9999,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log("POST Response:", data);
    } catch (err) {
      console.error("POST Error:", err);
    }
  };

  const putRequest = async () => {
    try {
      const response = await fetch(`${base_url}/posts/1`, {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: putText,
          body: "updated body",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log("PUT Response:", data);
    } catch (err) {
      console.error("PUT Error:", err);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Image Upload Response:", data);
    } catch (err) {
      console.error("Image Upload Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1a47] text-white placeholder:text-gray-400 p-8 space-y-10">
      <h1 className="text-3xl font-bold text-center">API Test Page</h1>
<div className="flex flex-wrap gap-4 mb-6">
  <span className="bg-blue-100 text-blue-900 text-sm font-medium px-4 py-2 rounded-full">
    🔍 <strong>GET:</strong> Retrieve data from a server.
  </span>
  <span className="bg-green-100 text-green-900 text-sm font-medium px-4 py-2 rounded-full">
    📨 <strong>POST:</strong> Send new data to the server.
  </span>
  <span className="bg-yellow-100 text-yellow-900 text-sm font-medium px-4 py-2 rounded-full">
    ♻️ <strong>PUT:</strong> Update existing data on the server.
  </span>
  <span className="bg-purple-100 text-purple-900 text-sm font-medium px-4 py-2 rounded-full">
    🖼️ <strong>UPLOAD:</strong> Send files (e.g. images) to the server.
  </span>
</div>

      {/* GET Request Section */}
      <section className="bg-[#13225a] p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">GET Request</h2>
        <button
          onClick={getRequest}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Trigger GET Request
        </button>
      </section>

      {/* POST Request Section */}
      <section className="bg-[#13225a] p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">POST Request</h2>
        <div className="space-y-2">
          <input
            className="w-full p-2 rounded text-white placeholder:text-gray-400 border border-gray-500"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Title"
          />
          <input
            className="w-full p-2 rounded text-white placeholder:text-gray-400 border border-gray-500"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Body"
          />
          <button
            onClick={postRequest}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Send POST Request
          </button>
        </div>
      </section>

      {/* PUT Request Section */}
      <section className="bg-[#13225a] p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">PUT Request</h2>
        <input
          className="w-full p-2 rounded text-white placeholder:text-gray-400 border border-gray-500"
          value={putText}
          onChange={(e) => setPutText(e.target.value)}
          placeholder="New Title"
        />
        <button
          onClick={putRequest}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Send PUT Request
        </button>
      </section>

      {/* Image Upload Section */}
      <section className="bg-[#13225a] p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Image Upload</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block text-white placeholder:text-gray-400  p-3 rounded border border-gray-500"
        />
        <button
          onClick={uploadImage}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Upload Image
        </button>
      </section>

      {/* Back Link */}
      <div className="text-center">
        <Link
          to="/"
          className="text-blue-400 hover:underline hover:text-blue-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Apitest;
