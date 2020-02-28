import React from "react";
import triangle from "../assets/images/bg-triangle.svg";

const Triangle = () => {
  return (
    <div className="triangle">
      <span dangerouslySetInnerHTML={{ __html: triangle }} />
    </div>
  );
};

export default Triangle;
