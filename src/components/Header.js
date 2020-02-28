import React from "react";
import logo from "../assets/images/logo.svg";
import Score from "./Score";

const Header = ({score}) => {
  return (
    <div className="header">
      <span dangerouslySetInnerHTML={{ __html: logo }} />
      <Score value={score} />
    </div>
  );
};

export default Header;
