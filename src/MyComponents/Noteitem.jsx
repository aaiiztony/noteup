import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="container col-md-3">
      <div className="card bg-dark my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <hr />
          <p>{note.description}</p>
        </div>
        <div
          className="btns"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            padding: "1.2rem 0",
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
