import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';

const Signup = (props) => {
  const {showAlert} = props;
  const context = useContext(NoteContext);
  const {bgColor} = context; 
  const style = {
    display: "flex",
    flexDirection: "column",
    minHeight:"50vh",
    justifyContent: "center",
  }
  const [info, setInfo] = useState({name:"", email:"", password:"", cpassword:""})
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSignUp = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: info.name, email: info.email, password: info.password})
    });
    const json =  await response.json();
    console.log(json)
    if (json.success){
      //save the token
      localStorage.setItem("token" , json.token)
      showAlert("Successfully Logged in","primary");
      navigate("/") // helps navigate to the homepage
    }
    else{
      showAlert("Account already exists, try forget passsword", "Danger")
    }
  }
  return (
    <div className="container w-50" style={style}>
    <h2 className="text-center mt-2">Experience boring notes!</h2>
    <form onSubmit={handleSignUp}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control text-white"
          placeholder="Enter your name"
          style={bgColor}
          name="name"
          value={info.name}
          onChange={handleChange}
        />
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control text-white"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
          style={bgColor}
          name="email"
          value={info.email}
          onChange={handleChange}
        />
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
          value={info.password}
          onChange={handleChange}
          required
          minLength={6}
        />
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          className="form-control text-white"
          id="exampleInputPassword1"
          placeholder="Confirm Password"
          style={bgColor}
          name="cpassword"
          value={info.cpassword}
          onChange={handleChange}
          required
          minLength={6}
        />
      </div>
      <button type="submit" className="btn btn-dark my-2">
        Submit
      </button>
    </form>
    </div>
  )
}

export default Signup