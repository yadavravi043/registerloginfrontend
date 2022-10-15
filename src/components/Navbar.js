import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div class="header">
        <a href="/" class="logo">
          SDS Wellfare
        </a>
        <div class="header-right">
          
          <Link to="/register">
            <a class="active">Signup</a>
          </Link>
        
          <Link to="/login">
            <a class="active">Signin</a>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
