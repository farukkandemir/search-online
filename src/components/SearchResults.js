import React from "react";
import Loader from "./Loader";
import {useResultContext} from "../context/ResultContextProvider";

function SearchResults() {
  const {results, isLoading} = useResultContext();

  if (isLoading || results == undefined) return <Loader />;

  const filteredResults = results.results;

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px,1fr))",
        gap: "2rem",
        marginTop: "1rem",
      }}
    >
      {filteredResults?.map(({title, link, description}, index) => (
        <div key={index} style={{width: "90%"}}>
          <a href={link} target="_blank">
            <p style={{fontSize: "12px", color: "black"}}>
              {link.length > 30 ? link.substring(0, 30) : link}
            </p>
            <p>{title}</p>
          </a>
          {description && (
            <p style={{fontSize: "14px", color: "gray", marginTop: "10px"}}>{description}</p>
          )}
        </div>
      ))}
    </article>
  );
}

export default SearchResults;
