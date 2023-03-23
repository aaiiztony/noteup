import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const bgColor = {
    backgroundColor: "#212529",
    border: "navajowhite",
    resize: "none",
  };
  //LATER ON, SHIFT THE ALERT COMPONENT AS A CONTEXT PROP RATHER THAN A PROP DRILL

                        //Fetch the notes from backend
  const getNote= async()=>{
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setNotes(json);
    console.log("Note fetching complete")
  }
                        //add notes
  const addNote= async(title, description, tag)=>{
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    setNotes(notes.concat(json));
    console.log("New Note Added");
  }
                      //delete notes
  const deleteNote= async(id)=>{ 
    //delete the information from the server
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    //frontend logic 
    const afterDelete = notes.filter((note)=>{return note._id!==id})
    setNotes(afterDelete);
    const json = await response.json();
    console.log("Note id", json.notes._id,"deleted successfully");
  }

                      //update notes
  const updateNote = async (id, tag, title, description)=>{
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    body: JSON.stringify({title, description, tag})
  });
  const json = await response.json();
  console.log("Note id", json.notes._id,"updated!");
  let newNotes = await JSON.parse(JSON.stringify(notes));
  //logic for frontend
  for (let i=0; i<newNotes.length;i++){
    const element = newNotes[i];
    if (element._id === id){
    newNotes[i].title = title;
    newNotes[i].description = description;
    newNotes[i].tag = tag;
    break
  }
  }
  setNotes(newNotes)
  }
 
return (
    <NoteContext.Provider value={{notes, getNote, addNote, deleteNote, updateNote, bgColor}}>
    {props.children}
    </NoteContext.Provider>
    )
};
export default NoteState;