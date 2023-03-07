import React from "react";

export default function Alert() {
  return (
    <div className="text-center" style={{ height: "7vh" }}>
        <div
          className={`text-white h-max p-2 bg-dark`}
          role="alert"
        >
          Added a new note!
        </div>
  
    </div>
  );
}
