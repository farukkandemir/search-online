import React from "react";
import {useResultContext} from "../context/ResultContextProvider";
import Loader from "./Loader";

function NewsResults() {
  const {results, isLoading} = useResultContext();

  if (isLoading || results == undefined) return <Loader />;

  const filteredResults = results.entries;

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px,1fr))",
        gap: "2rem",
        marginTop: "1rem",
      }}
    >
      {filteredResults?.map(({title, link}, index) => (
        <div key={index} style={{width: "90%"}}>
          <a href={link} target="_blank">
            <p style={{fontSize: "12px", color: "black"}}>
              {link.length > 30 ? link.substring(0, 30) : link}
            </p>
            <p>{title}</p>
          </a>
        </div>
      ))}
    </article>
  );
}

export default NewsResults;
