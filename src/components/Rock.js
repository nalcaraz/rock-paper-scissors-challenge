import React from "react";
import rock from "../assets/images/icon-rock.svg";

const Rock = ({handleClickWeapon}) => {
  return (
    <div className="rock"  onClick={()=> handleClickWeapon("rock")}>
      <div className="option">
        <span dangerouslySetInnerHTML={{ __html: rock }} />
      </div>
    </div>
  );
};

export default Rock;
