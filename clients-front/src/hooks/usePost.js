import { useState } from "react";
import { baseUrl } from "./baseUrl";

function usePost(url) {

  const [ response, setResponse ] = useState({
    error: null,
    response: null
  })


  const onPost = (params) => {
    fetch(baseUrl + url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },  
      method: "POST",
      body: JSON.stringify(params)
    })
      .then((response) => setResponse({
        error: null,
        response: response
      }))
      .catch((err) => setResponse({
        error: response.error,
        respponse: response
      }))
  }

  return { response: response, post: onPost };
}

export default usePost;