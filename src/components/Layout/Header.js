import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Medicine</h1>
      <HeaderCartButton onClick1={props.onShowCart}/>
    </div>
  );
};

export default Header;
