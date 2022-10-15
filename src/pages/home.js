import React from "react";
import Navbar from '../components/Navbar'
import NavbarHome from "../components/NavbarHome";
const Home=()=>{
    return(
        <>
      {
        
          (localStorage.getItem('user')) ? <NavbarHome/> :  <Navbar/>
        
      }
        
        <h1> HOME PAGE</h1>
        
        </>
    )
}
export default Home;