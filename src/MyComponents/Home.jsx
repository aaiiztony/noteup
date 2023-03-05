import React from "react";
// import NoteContext from "../context/notes/NoteContext";

const Home = () => {
    // const Notes = useContext(NoteContext);
    // const {notes, setNotes} = Notes;
  return (
    <div className="container my-2">
      <div className="text-center">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <strong>Add a note +</strong>
        </label>
        <textarea
          className="form-control br-2 bg-dark text-white"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      <div className="mynotes my-2 text-center">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <strong>Your Notes :)</strong>
        </label>
        {/* {notes.map((note)=>{
            return note.title();
        })} */}
      </div>
    </div>
  );
};

export default Home;
