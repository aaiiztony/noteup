import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    let var1 = {
        name:"Tony",
        job:"Web Developer"
    }
  return (
    <NoteContext.Provider value={var1}>
    {props.children}
    </NoteContext.Provider>
    )
};
export default NoteState;
