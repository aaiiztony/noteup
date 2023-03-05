import React from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
    let state = {
        name:"Tony",
        job:"Web Developer"
    }
  return (
    <NoteContext.Provider value={state}>
    {props.children}
    </NoteContext.Provider>
    )
};
export default NoteState;
