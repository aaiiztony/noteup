import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  //using context to update the notes object
    const context = useContext(NoteContext);

  //destructuring to obtain notes object from useContext
    const {notes, getNote} = context;
    useEffect(() => {
      getNote();
    }, // eslint-disable-next-line 
    [])
  return (
    <div className="container">
    <div className="my-1 text-center">
          <h3><strong>Your Notes :)</strong></h3>
           <br />
        <div className="row">
        {notes.map((note)=>{
            return <Noteitem note={note} key={note._id}/>
          })}
        </div>
    </div>
    </div>
  )
}

export default Notes
