import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

export const ResultContext = createContext();

export function ResultContextProvider({children}) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Ataturk");
  const [category, setCategory] = useState("/video");

  console.log(results);

  const BASE_URL = "https://google-search3.p.rapidapi.com/api/v1";

  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "US",
      "X-RapidAPI-Key": "4c988abb2cmsh8c5a2a37964c8afp1e96adjsn7e3048f6f758",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    async function fetchAPI() {
      const response = await axios.get(`${BASE_URL}${category}/q=${searchTerm}`, options);
      setResults(response.data);
    }

    fetchAPI();
    setIsLoading(false);
  }, [searchTerm, category]);

  return (
    <ResultContext.Provider value={{results, isLoading, setCategory, setSearchTerm, searchTerm}}>
      <div>{children}</div>
    </ResultContext.Provider>
  );
}

export const useResultContext = () => useContext(ResultContext);
