import React from "react";
import paper from "../assets/images/icon-paper.svg";

const Paper = ({handleClickWeapon}) => {
  return (
    <div className="paper"  onClick={()=> handleClickWeapon("paper")}>
      <div className="option">
        <span dangerouslySetInnerHTML={{ __html: paper }} />
      </div>
    </div>
  );
};

export default Paper;
