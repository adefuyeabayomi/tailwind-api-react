// pages/Apitest.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Apitest = () => {
  // first part of the api is the base url
  let base_url = 'https://jsonplaceholder.typicode.com'

  // path to the resource
  let path = '/todos'

  // combine the base url and the path to form the full url

  let fullUrl = `${base_url}${path}`
  console.log({fullUrl})

  const getRequest = async () => {
    let response = await fetch(fullUrl)
    console.log({response})
  }

  let [text1,setText1] = useState("")
  let [text2,setText2] = useState("")

  const postRequest = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    let config = {
      method : "POST",
      body: JSON.stringify({
        title: text1,
        body: text2,
        userId: 9999
      }),
        headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    }
    let response = await fetch(url,config)
    console.log({response})
  }

  return (
    <div>
      <h1>API Test Page</h1>

      <p>GET TODO LIST</p>
      <button style={{border: '1px solid gray', padding: '10px'}} onClick={getRequest}> Trigger Get Request </button>
      <div />
      <label>Text 1</label>
      <input value={text1} onChange={(e)=> setText1(e.target.value)} />
      <label>Text 2</label>
      <input  value={text2} onChange={(e)=> setText2(e.target.value)}  />
      <button onClick={postRequest}> Send Form</button>
      <div />
 
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Apitest;
