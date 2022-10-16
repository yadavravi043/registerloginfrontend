import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
function Dashboard() {
    const navigate=useNavigate();
     useEffect(() => {
           if (!localStorage.getItem('user')) {
             navigate("/login");
           }
         }, []);
  return (
    <div>dashboard</div>
  )
}

export default Dashboard