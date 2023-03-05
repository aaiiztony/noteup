import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
    let var1 = {
        name:"Tony",
        job:"Web Developer"
    }
    const [state, setState] = useState(var1)
    const updatedState = ()=>{
      setTimeout(() => {
        setState({
          name:"Prasenjeet",
          job:"Dark Empath"
        })
      }, 1000);
    }
  return (
    <NoteContext.Provider value={{state, updatedState}}>
    {props.children}
    </NoteContext.Provider>
    )
};
export default NoteState;
