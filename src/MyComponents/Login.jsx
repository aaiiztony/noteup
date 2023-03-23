import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
const Login = (props) => {
  //destructure showalert from prop
  const {showAlert} = props;
  const context = useContext(NoteContext);
  //destructure bgColor from context
  const {bgColor} = context; 
  const style = {
    display: "flex",
    flexDirection: "column",
    minHeight:"50vh",
    justifyContent: "center",
  }
  //to set the input fields blank and changeable with the handleChange function
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
      localStorage.setItem("token" , json.token); //sets the auth-token in a object with key as token
      navigate("/") // helps navigate to homepage;
      showAlert("Login Success - hehehe, don't save your passwords in noteUp though","success");
    }
    else{
      showAlert("Login Failed - You're password's wrong man!", "danger")
    }
  }
  return (
    <div className="container w-50" style={style}>
    <h2 className="text-center mt-2">Personalize your notes</h2>
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
