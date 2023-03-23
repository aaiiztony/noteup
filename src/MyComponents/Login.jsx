import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
const Login = (props) => {
  const {showAlert} = props;
  const context = useContext(NoteContext);
  const {bgColor} = context; 
  const style = {
    display: "flex",
    flexDirection: "column",
    minHeight:"50vh",
    justifyContent: "center",
  }
  const [credentials, setCredentials] = useState({email:"", password:""})
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  //useHistory is replaced with useNavigate in v6 of react router dom
  const navigate = useNavigate();
  const handleFormData = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json =  await response.json();
    console.log(json)
    if (json.success){
      //save the token
      localStorage.setItem("token" , json.token);
      navigate("/") // helps navigate to homepage;
      showAlert("Login Success - hehehe, though don't note your passwords in noteUp","success");
    }
    else{
      showAlert("Login Failed - You're password's wrong man!", "danger")
    }
  }
  return (
    <div className="container w-50" style={style}>
    <form onSubmit={handleFormData}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control text-white"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          style={bgColor}
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control text-white"
          id="exampleInputPassword1"
          placeholder="Password"
          style={bgColor}
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-dark my-2">
        Submit
      </button>
    </form>
    </div>
  );
};
export default Login;
