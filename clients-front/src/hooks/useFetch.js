import { useEffect, useState } from "react";
import { baseUrl } from "./baseUrl";

function useFetch(params) {

  const [ response, setResponse ] = useState({
    data: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    fetch(baseUrl + params)
      .then((response) => response.json())
      .then((response) => {
        setResponse({
          data: response,
          loading: false,
          error: null
        })
      })
      .catch((err) => {
        setResponse({
          data: null,
          loading: false,
          error: err
        })
      })
  }, [params]);

  return response;
}

export default useFetch;