import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  //using context to update the notes object
    const context = useContext(NoteContext);

    //destructuring to obtain note object from useContext
    const {bgColor, updateNote, notes, getNote} = context;

    //set the initial value to blanks
    const [note, setNote] = useState({ etitle: "", edescription: "", etag:""});

    //using the name and value as pair to populate our client side note for the UI
    const handleChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
      updateNote(note._id); //backend logic
    };

    useEffect(() => {
      getNote();
    }, // eslint-disable-next-line 
    [])

    const editNote= (currentNote)=>{
      //when clicked on edit button, the editModal will be populated with the existing data (title, description, tag)
      setNote({etitle: currentNote.title, edescription: currentNote.description, etag : currentNote.tag})
    }
  return (
    <div className="container my-2">
    <div className="text-center">
          <h3><strong>Your Notes :)</strong></h3>
          <div
            className="modal fade text-dark"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-dark text-white">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Got something to add?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body bg-dark text-white">
                <form style={{textAlign:"start"}}>
              <label htmlFor="title">
                <small>Title?</small>
              </label>
              <textarea
                className="form-control br-2 text-white mb-2"
                style={bgColor}
                rows="1"
                name="etitle"
                value={note.etitle}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="description">
                <small>What about the description?</small>
              </label>
              <textarea
                className="form-control br-2 text-white mb-2"
                rows="8"
                style={bgColor}
                value={note.edescription}
                name="edescription"
                onChange={handleChange}
              ></textarea>
            </form>
                </div>
                <div className="modal-footer  bg-dark text-white">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
      <hr />
        <div className="row">
        {notes.map((note)=>{
            return <Noteitem note={note} editNote={editNote} key={note._id}/>
          })}
        </div>
    </div>
    </div>
  )
}

export default Notes
