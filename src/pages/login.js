import React, { useState } from "react";
import axios from "axios";
import "../style/login.css";
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
  const moveToRegister=()=>{
    navigate("/register")
  }
  return (
    <> 
    <div className="app">
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
          <div style={{display:"flex",flexDirection:"column"}}>
          <p>Don't have an account ?</p>
          <a onClick={moveToRegister}>Register</a>
          </div> 
          </form>
          <ToastContainer />
          </div>
        
    </>
  );
}
export default Login;








  


