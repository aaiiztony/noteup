import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import About from "./MyComponents/About";
import Home from "./MyComponents/Home";
import Navbar from "./MyComponents/Navbar";
// import Login from "./MyComponents/Login";
// import Signup from "./MyComponents/Signup";

const App =()=> {
    return(
        <>
        <NoteState>
        <Navbar/>
        <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<Home/>}/>
         </Routes>
        </NoteState>
        </>
    )
}

export default App;
