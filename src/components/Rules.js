import React from "react";
import rules from "../assets/images/image-rules.svg";

const Rules = ({close, isOpen}) => {
  return (
   
    <div className={"rules modal  "  + (!isOpen? "hidden" : "")}>
      <div className="modal-header">
        <h2 className="dark-text">RULES</h2> 
        <button className="modal-close close dark-text" onClick={close}></button>
      </div>
      <span dangerouslySetInnerHTML={{ __html: rules }} />
    </div>
  );
};

export default Rules;
