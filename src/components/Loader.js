import React from "react";
import {Puff} from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Puff height="80" width="80" radius={2} color="#4fa94d" ariaLabel="puff-loading" />
    </div>
  );
}
