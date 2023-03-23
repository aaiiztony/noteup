import React from "react";
import AddNotes from "./AddNotes";
// import Alert from "./Alert";
//add an alert component for notes add
const Home = (props) => {
  const {showAlert} = props;
  return (
    //creating home component for further chnages in the futures
    //turn the addnote component off if not logged in and think about a different modsal or something to shiowcase or a login modal to login to use the website
    <>
      <AddNotes showAlert={showAlert}/>
    </>
  );
};

export default Home;
