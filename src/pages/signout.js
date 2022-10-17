import React from 'react'
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Signout() {
  const navigate = useNavigate();
  const SetOutHai=()=>{
    alert('Are you sure to logout')
    const outhai = localStorage.removeItem('user')
    navigate("/")
  }
 useEffect(()=>{
   SetOutHai();
 })
  return (
    <>
    <p>signout</p>
    </>
  )
}

export default Signout