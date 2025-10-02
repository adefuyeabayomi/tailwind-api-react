// pages/Apitest.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Apitest = () => {
  const base_url = "https://jsonplaceholder.typicode.com";
  const path = "/todos";
  const fullUrl = `${base_url}${path}`;

  // GET REQUEST
  const [getMessage, setGetMessage] = useState("");
  const getRequest = async () => {
    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      console.log("GET Response:", data);
      setGetMessage(
        "✅ Request successful. Please check the console for full response.",
      );
    } catch (err) {
      console.error("GET Error:", err);
      setGetMessage("❌ Request failed. See console for details.");
    }
  };

  // GET BY ID REQUEST
  const [todoData, setTodoData] = useState(null);
  const [todoId, setTodoId] = useState("");
  const getTodoById = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Todo not found");
      const data = await response.json();
      console.log("Todo Data:", data);
      setTodoData(data);
    } catch (error) {
      console.error("Error fetching todo by ID:", error);
      setTodoData({ error: error.message });
    }
  };

  // POST REQUEST
  const [postResponse, setPostResponse] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const postRequest = async () => {
    try {
      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: text1, body: text2 }),
      });

      const data = await response.json();
      console.log("POST Response:", data);
      setPostResponse(
        "✅ POST successful. Check the console for response data. ",
      );
      setPostResponse(data);
    } catch (err) {
      console.error("POST Error:", err);
      setPostResponse("❌ POST failed. Check the console for error details.");
    }
  };

  // PUT REQUEST
  const [putResponse, setPutResponse] = useState("");
  const [putData, setPutData] = useState({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  });
  const putRequest = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + putData.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(putData),
        },
      );

      const result = await response.json();
      console.log("PUT Response:", result);

      setPutResponse(JSON.stringify(result, null, 2));
    } catch (err) {
      console.error("PUT Request Failed:", err);
    }
  };

  // UPLOAD FILE / FORM DATA REQUEST
  const [image, setImage] = useState(null);
  const [uploadResponse, setUploadResponse] = useState("");
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
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.json();
      console.log("Image Upload Response:", data);
      setUploadResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Image Upload Error:", err);
      setUploadResponse(
        "❌ Upload failed. Check the console for error details.",
      );
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
        <h2 className="text-xl font-semibold text-white">GET Request</h2>

        <button
          onClick={getRequest}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
        >
          Trigger GET Request
        </button>

        {getMessage && (
          <div className="mt-4 border-l-4 border-blue-300 bg-blue-50 p-4 rounded">
            <p className="text-sm text-blue-800 font-semibold">Notice:</p>
            <p className="text-sm text-gray-800">{getMessage}</p>
          </div>
        )}
      </section>
      {/* GET BY ID Section */}
      <section className="mt-10 p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          🔍 Get a Todo by ID
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label htmlFor="todoId" className="text-sm font-medium text-gray-700">
            Enter Todo ID:
          </label>
          <input
            id="todoId"
            type="number"
            min="1"
            className="border border-gray-300 rounded text-gray-800 px-4 py-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={todoId}
            onChange={(e) => setTodoId(e.target.value)}
          />
          <button
            onClick={getTodoById}
            className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded transition"
          >
            Fetch Todo
          </button>
        </div>

        {todoData && (
          <div className="mt-4 border-l-4 border-blue-700 bg-blue-50 p-4 rounded">
            <p className="text-sm text-blue-800 font-semibold">Result:</p>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(todoData, null, 2)}
            </pre>
          </div>
        )}
      </section>
      {/* POST Request Section */}
      <section className="bg-[#13225a] p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-white">POST Request</h2>
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
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
          >
            Send POST Request
          </button>
        </div>

        {postResponse && (
          <div className="mt-4 border-l-4 border-blue-700 bg-blue-50 p-4 rounded">
            <p className="text-sm text-blue-800 font-semibold">Result:</p>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(postResponse, null, 2)}
            </pre>
          </div>
        )}
      </section>
      <section className="bg-[#13225a] p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-white">PUT Request Body</h2>

        <div className="space-y-3">
          <input
            type="number"
            value={putData.id}
            onChange={(e) =>
              setPutData({ ...putData, id: parseInt(e.target.value) })
            }
            placeholder="ID"
            className="w-full p-3 rounded border border-gray-500 bg-[#0e1a45] text-white"
          />
          <input
            type="text"
            value={putData.title}
            onChange={(e) => setPutData({ ...putData, title: e.target.value })}
            placeholder="Title"
            className="w-full p-3 rounded border border-gray-500 bg-[#0e1a45] text-white"
          />
          <input
            type="text"
            value={putData.body}
            onChange={(e) => setPutData({ ...putData, body: e.target.value })}
            placeholder="Body"
            className="w-full p-3 rounded border border-gray-500 bg-[#0e1a45] text-white"
          />
          <input
            type="number"
            value={putData.userId}
            onChange={(e) =>
              setPutData({ ...putData, userId: parseInt(e.target.value) })
            }
            placeholder="User ID"
            className="w-full p-3 rounded border border-gray-500 bg-[#0e1a45] text-white"
          />
        </div>
        {putResponse && (
          <div className="mt-4 bg-[#0e1a45] p-4 rounded border border-blue-400">
            <h3 className="text-white font-semibold mb-2">Response:</h3>
            <pre className="bg-[#0a163a] text-green-300 p-2 rounded overflow-x-auto text-sm">
              {putResponse}
            </pre>
          </div>
        )}
        <button
          onClick={putRequest}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
        >
          Send PUT Request
        </button>
      </section>

      {/* Image Upload Section */}
      <section className="bg-[#13225a] p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-white">Image Upload</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block text-white placeholder:text-gray-400 p-3 rounded border border-gray-500"
        />
        <button
          onClick={uploadImage}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
        >
          Upload Image
        </button>

        {uploadResponse && (
          <div className="mt-4 bg-[#0e1a45] p-4 rounded border border-blue-400">
            <h3 className="text-white font-semibold mb-2">Response:</h3>
            <pre className="bg-[#0a163a] text-green-300 p-2 rounded overflow-x-auto text-sm">
              {uploadResponse}
            </pre>
          </div>
        )}
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
