import { useState } from "react";
import "../style/register.css";
import FormInput from "../components/Forminput";
import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate,Link } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit =  async(e) => {
    e.preventDefault();
    const {username,email,password,birthday}=values;

    const{data}=   await axios.post('http://localhost:5000/api/auth/register',{
      username,email,password,birthday,
    })
    if(data.status===true){
      
      localStorage.setItem("user", JSON.stringify(data.user) );
      navigate("/login");
    }
    setValues({username:"",email:"",birthday:"",password:"",confirmPassword:""})
    
  };


//...values is spread operator 
//means we get all the five input here ie username,email...etc
  const onChange = (e) => {
    //console.log(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };

  return (
    <>
    <div className="app">
    <form onSubmit={handleSubmit}>
    <h1>Register</h1>
        {inputs.map((it) => (
          <FormInput key={it.id} {...it} value={values[it.name]} onChange={onChange}/>
        ))
      }
        <button>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Register;