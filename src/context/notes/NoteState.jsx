import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "640590b22ad238fd079b3e82f1",
      "user": "6401c4aafb6cdee10bde4091",
      "title": "difference between res.json and res.send",
      "description": "res.json() and res.send() are methods in the Express.js framework used to send a response to an HTTP request. res.send() method is a general-purpose method that can be used to send any kind of response to the client",
      "tag": "General",
      "date": "2023-03-06T07:05:30.235Z",
      "comments": [],
      "__v": 0
    },
    {
      "_id": "6405290c81238fdz079b3e82f3",
      "user": "6401c4aafb6cdee10bde4091",
      "title": "Stay away please, Im toxic",
      "description": "res.json() and res.send() are methods in the Express.js framework used to send a response to an HTTP request. res.send() method is a general-purpose method that can be used to send any kind of response to the client",
      "tag": "General",
      "date": "2023-03-06T07:05:44.634Z",
      "comments": [],
      "__v": 0
    },
    {
      "_id": "640590c8d238dd3fd079b3e82f3",
      "user": "6401c4aafb6cdee10bde4091",
      "title": "Die already",
      "description": "res.json() and res.send() are methods in the Express.js framework used to send a response to an HTTP request. res.send() method is a general-purpose method that can be used to send any kind of response to the client",
      "tag": "General",
      "date": "2023-03-06T07:05:44.634Z",
      "comments": [],
      "__v": 0
    },
    {
      "_id": "640590c833238fd3079bdf3e82f3",
      "user": "6401c4aafb6cdee10bde4091",
      "title": "why am i tuping a title rn?",
      "description": "res.json() and res.send() are methods in the Express.js framework used to send a response to an HTTP request. res.send() method is a general-purpose method that can be used to send any kind of response to the client",
      "tag": "General",
      "date": "2023-03-06T07:05:44.634Z",
      "comments": [],
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial);
  //creating a function to add notes when clicked on the submit button
  const addNote=(title, description, tag)=>{
    let newNote = {
      "_id": "640590c8d238fd3079bd434f3e82f3",
      "user": "6401c4aafb6cdee10bde4091",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-03-06T07:05:44.634Z",
      "comments": [],
      "__v": 0
    }
    setNotes(notes.concat(newNote))
  }
  
  //edit notes
  const editNote=()=>{
    //a method to update the note
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
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
    {props.children}
    </NoteContext.Provider>
    )
};
export default NoteState;