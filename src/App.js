import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import About from "./MyComponents/About";
import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";
import Login from "./MyComponents/Login";
import Signup from "./MyComponents/Signup";
import Navbar from "./MyComponents/Navbar";
import Notes from "./MyComponents/Notes";
import Alert from "./MyComponents/Alert";

const App =()=> {
   //Alert Display
   const [alert, setAlert] = useState(null);
   const showAlert = (message, type)=>{
       setAlert({
         msg : message,
         type:  type
       })
       setTimeout(() => {
         setAlert(null)
       }, 2000);
     }
    return(
        <>
            <NoteState>
                <Navbar/>
                <Alert alert={alert}/>
                <Routes>
                    <Route exact path="/" element={<Home showAlert={showAlert}/>}  />
                    <Route exact path="/notes" element={<Notes showAlert={showAlert}/>} />
                    <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
                    <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
                    <Route exact path="/about" element={<About/>}/>
                </Routes>
                <Footer/>
            </NoteState>
        </>
    )
}

export default App;
