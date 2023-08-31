import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Cookies from 'js-cookie';
const  Login=()=> {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     navigate("/");
  //   }
  // }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error(" Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      if (data.succes === false) {
        console.log('err')
      }
      if (data.succes === true) {

        //setting the jwtToken data in cookies of dev tools 
        // Set cookie with expiration time of one hour
      //   const expirationTime = new Date();
      //  expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000);
      //   Cookies.set('authTokenCookie', data.jwtToken,{expires:expirationTime});
         //getting the cookies data in cookies of dev tools 
        // const fetchingCookiesToken = Cookies.get('authTokenCookie');
        // console.log("cookiesData",fetchingCookiesToken)

        localStorage.setItem('user',
        JSON.stringify(data.user)
        );
        navigate("/dashboard");
      }
    }
  };
  return (
    <>
    <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
            min="6"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
         
        </form>
        </FormContainer>
        <ToastContainer />

    </>
  );
}
export default Login;

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      // background-color: #4e0eff;
      background-color: green;
    }
  }
  footer {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;







  


// const handleSubmit=(e)=>{
//   e.preventDefault()
// const newentry={email:email,password:password}
// setAllEntry([...allEntry,newentry])//all entry sare purane wale
// console.log(allEntry)
    
//   <div>
//   {
// allEntry.map((it)=>{
// return(
//    <div className="alluser">
// <p>{it.email}</p>
// <p>{it.password}</p>
// <p></p>

//    </div>
// )
// })
//   }
//   </div>