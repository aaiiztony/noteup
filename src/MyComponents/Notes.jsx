import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  //fetch all existing notes
  useEffect(() => {
    getNote();
  }, // eslint-disable-next-line 
  [])

  //using context to update the notes object
    const context = useContext(NoteContext);

    //destructuring to obtain note object from useContext
    const {bgColor, updateNote, notes, getNote} = context;

    //set the initial value to blanks
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag:""});

    //using the name and value as pair to populate our client side note for the UI
    const handleChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value });
    };

    const ref = useRef(null)

    //Fucntion to edit the note in noteitem button
    const editNote= (currentNote)=>{
      //when clicked on edit button, the editModal will be populated with the existing data (title, description, tag)
      setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag : currentNote.tag})
    }
    //update the note on the backend as well as on the UI
    const handleSubmit = () => {
      updateNote(note.id, note.etag, note.etitle, note.edescription); //backend logic
      ref.current.click();  //click on close button
    }

  return (
    <div className="container my-2">
    <div className="text-center">
          <h3><strong>Your Notes :)</strong></h3><hr />
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
                    ref = {ref}
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
        <div className="row" style={{minHeight:"70vh"}}>
        {notes.map((note)=>{
            return <Noteitem note={note} editNote={editNote} key={note._id}/>
          })}
        </div>
    </div>
    </div>
  )
}

export default Notes
