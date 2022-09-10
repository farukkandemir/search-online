import React from "react";
import {useResultContext} from "../context/ResultContextProvider";
import Loader from "./Loader";
import ReactPlayer from "react-player";

function VideosResults() {
  const {isLoading, results} = useResultContext();

  if (isLoading || results == undefined) return <Loader />;

  const filteredResults = results.results;

  return (
    <article style={{display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center"}}>
      {filteredResults?.map(({link, title, description}, index) => (
        <div key={index}>
          {link && (
            <ReactPlayer
              url={link}
              config={{youtube: {playerVars: {origin: window.location.origin}}}}
              controls
              width="355px"
              height="200px"
            />
          )}
        </div>
      ))}
    </article>
  );
}

export default VideosResults;
