import React from "react";
import AddNotes from "./AddNotes";
import Notes from "./Notes";
// import Alert from "./Alert";
//add an alert component for notes add
const Home = () => {
  return (
    <>
      <AddNotes/>
      <Notes/>
    </>
  );
};

export default Home;
