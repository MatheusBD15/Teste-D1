import { useState } from "react";
import { baseUrl } from "./baseUrl";

function useDelete() {

  const [response, setResponse] = useState({
    error: null,
    loading: true,
    response: null
  });


  const onDelete = (url) => {
    fetch(baseUrl + url, {
      method: "DELETE",
    })
      .then((response) => setResponse({
        error: null,
        loading: false,
        response: response
      }))
      .catch((err) => setResponse({
        error: response.error,
        loading: false,
        response: response
      }))
  }

  return { response: response, callDelete: onDelete };
}

export default useDelete;