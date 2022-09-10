import React from "react";
import {useResultContext} from "../context/ResultContextProvider";
import Loader from "./Loader";

function ImagesResults() {
  const {results, isLoading} = useResultContext();

  if (isLoading || results == undefined) return <Loader />;

  const filteredResults = results.image_results;

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "1rem",
      }}
    >
      {filteredResults?.map((result, index) => (
        <div key={index}>
          <img src={result.image.src} alt="image" width="100%" />
          <p>{result.link.title}</p>
          <a href={result.link.href} style={{fontSize: "12px"}}>
            {result.link.href.length > 30 ? result.link.href.substring(0, 30) : result.link.href}
          </a>
        </div>
      ))}
    </article>
  );
}

export default ImagesResults;
