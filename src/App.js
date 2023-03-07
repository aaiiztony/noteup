import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import About from "./MyComponents/About";
import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";
import Login from "./MyComponents/Login";
import Signup from "./MyComponents/Signup";
import Navbar from "./MyComponents/Navbar";

const App =()=> {
    return(
        <>
            <NoteState>
                <Navbar/>
                <Routes>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/signup" element={<Signup/>}/>
                </Routes>
                <Footer/>
            </NoteState>
        </>
    )
}

export default App;
