import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNotes = (props) => {
  //to use the state at any component, we use context
  const context = useContext(NoteContext);
  const { addNote, bgColor} = context; //destructuring to get the addNote function

  //set the initial value to ""
  const [note, setNote] = useState({ title: "", description: "", tag: null});
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  //using the name and value as pair to populate our client side note
  const handleSubmit = () => {
    addNote(note.title, note.description, note.tag);
    props.showAlert("Notes added successfully", "primary")
  };
  return (
    <div className="container my-2">
      <h3 className="text-center">
        <strong>Add a note +</strong>
      </h3>
      <div>
        <form>
          <label htmlFor="title">
            <small>Title?</small>
          </label>
          <textarea
            className="form-control br-2 text-white mb-2"
            style={bgColor}
            rows="1"
            name="title"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="description">
            <small>What about the description?</small>
          </label>
          <textarea
            className="form-control br-2 text-white mb-2"
            style={bgColor}
            rows="8"
            name="description"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="tag">
            <small>Any tag?</small>
          </label>
          <textarea
            className="form-control br-2 text-white mb-2"
            style={bgColor}
            rows="1"
            name="tag"
            onChange={handleChange}
          ></textarea>
          <div className="my-2 text-center">
            <i
              type="submit"
              href="/"
              className="btn btn-dark fa-solid fa-check"
              style={{ border: "none", color: "white", borderRadius: "2rem" }}
              onClick={handleSubmit}
            ></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
