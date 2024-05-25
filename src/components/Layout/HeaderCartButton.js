import React from "react";
import "./HeaderCartButton.css";
const HeaderCartButton = (props) => {
  return (
    <div>
      <button className="button" onClick={props.onClick1}>
        <span className="icon"></span>
        <span>Your Cart</span>
        <span className="badge">3</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
