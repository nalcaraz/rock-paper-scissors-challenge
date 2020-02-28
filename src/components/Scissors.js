import React from "react";
import scissors from "../assets/images/icon-scissors.svg";

const Scissors = ({handleClickWeapon}) => {
  return (
    <div className="scissors" onClick={()=> handleClickWeapon("scissors")}> 
      <div className="option">
        <span dangerouslySetInnerHTML={{ __html: scissors }} />
      </div>
    </div>
  );
};

export default Scissors;
