import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <>
      <div class="jumping-dots-loader">
        {" "}
        <span></span> <span></span> <span></span>{" "}
      </div>
      <div class="moving-gradient"></div>
    </>
  );
};

export default Loading;
