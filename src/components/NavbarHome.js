import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function NavbarHome() {
    const navigate = useNavigate();

  const SetOutHai=()=>{
    alert('Are you sure to logout')
    const outhai = localStorage.removeItem('user')
    navigate("/")
  }
  return (
    <>
      <div class="header">
        <a href="/" class="logo">
          SDS Wellfare
        </a>
        <div class="header-right">   
          <button onClick={SetOutHai} style={{ backgroundColor: 'blue', color: 'white' }}>
          Signout
          </button>
        </div>
      </div>
    </>
  );
}

export default NavbarHome;
