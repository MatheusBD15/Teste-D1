import { useState } from "react";
import { baseUrl } from "./baseUrl";

function usePut(url) {

  const [ response, setResponse ] = useState({
    error: null,
    response: null
  })


  const onPut = (params) => {
    fetch(baseUrl + url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },  
      method: "PUT",
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

  return { response: response, put: onPut };
}

export default usePut;