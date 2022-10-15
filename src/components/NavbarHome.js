import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
function NavbarHome() {
  return (
    <>
      <div class="header">
        <a href="/" class="logo">
          SDS Wellfare
        </a>
        <div class="header-right">
          
          <Link to="/signout">
            <a class="active">Signout</a>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default NavbarHome;
