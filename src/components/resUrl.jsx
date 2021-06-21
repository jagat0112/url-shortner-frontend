import React, { useState } from "react";
import doneGif from "./done.gif";

const ResUrl = ({ url }) => {
  const [copied, setCopied] = useState(false);
  return (
    <React.Fragment>
      <div
        className="short-url"
        onClick={() => {
          navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      >
        <p className="short-url__result">{url}</p>
        <span>
          <i className="fas fa-clipboard"></i>
        </span>
      </div>
      {copied && (
        <div>
          <img src={doneGif} alt="" />
        </div>
      )}
    </React.Fragment>
  );
};

export default ResUrl;
