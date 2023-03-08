import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

//Fetch the notes from backend
//check why add note is getting linked properly
  const getNote= async()=>{
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMWM0YWFmYjZjZGVlMTBiZGU0MDkxIn0sImlhdCI6MTY3NzkxMDYyNH0.Tf5aA6TNLuivu2cqkwe-QgZ5KV6kPtT1J6bf_gMdSCc"
      }
    });
    const json = await response.json();
    setNotes(json);
  }
  
  //add notes
  //API Call
  const addNote= async(id, title, description,tag)=>{
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMWM0YWFmYjZjZGVlMTBiZGU0MDkxIn0sImlhdCI6MTY3NzkxMDYyNH0.Tf5aA6TNLuivu2cqkwe-QgZ5KV6kPtT1J6bf_gMdSCc"
      },
      body: JSON.stringify({title, description, tag}), 
    });
    const json = (response.json());
    console.log(json)
  }
  
  //delete notes
  const deleteNote=(id)=>{
    console.log("Deleting note:", id);
    const afterDelete= notes.filter((note)=>{
      return note._id!==id;
    })
    setNotes(afterDelete);
}

  return (
    <NoteContext.Provider value={{notes, getNote, addNote, deleteNote}}>
    {props.children}
    </NoteContext.Provider>
    )
};
export default NoteState;