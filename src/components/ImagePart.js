import React from "react";
import image from "../images/image.png";

function ImagePart() {
  return (
    <div className="image">
      <p className="img-txt">Your Personal Job Finder</p>
      <img
        src={image}
        alt="img"
        max-height="100%"
        max-width="100%"
        height="100%"
        width="100%"
      ></img>
    </div>
  );
}

export default ImagePart;
