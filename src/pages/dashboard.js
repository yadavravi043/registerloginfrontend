import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
import NavbarHome from '../components/NavbarHome';
function Dashboard() {
    const navigate=useNavigate();
     useEffect(() => {
           if (!localStorage.getItem('user')) {
             navigate("/login");
           }
         }, []);
  return (
    <>
    <NavbarHome/>
    <h1>My Dashboard</h1>
    </>
  )
}

export default Dashboard