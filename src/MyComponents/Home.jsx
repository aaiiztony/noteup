import React from "react";
import AddNotes from "./AddNotes";
// import Alert from "./Alert";
//add an alert component for notes add
const Home = (props) => {
  const {showAlert} = props;
  return (
    //creating home component for further chnages in the futures
    <>
      <AddNotes showAlert={showAlert}/>
    </>
  );
};

export default Home;
