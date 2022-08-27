import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
export const pages = ["home","grades","ptc","teacher","contactus","pagenotfound"]

function Header() {
  return (
    <div className="header">
      <Link to="/"></Link>
      {pages.map(pageName=>(<Link to={pageName}><button>{pageName}</button></Link>
      ))}
    </div>
  );
};

export default Header;
