import React from "react";
import loadingGif from "./loading.gif";

const Loading = () => {
  return (
    <React.Fragment>
      <img src={loadingGif} alt="" />
    </React.Fragment>
  );
};

export default Loading;
