import { useState } from "react";
import { baseUrl } from "./baseUrl";

function usePost(url) {

  const [ response, setResponse ] = useState({
    error: null,
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
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  return { response: response, post: onPost };
}

export default usePost;