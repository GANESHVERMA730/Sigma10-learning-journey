import "./Forms.css"
import { useState } from "react";

export default function Form(){
  let [fullName, setFullName] = useState("");

  let handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <form className="form">
      <label htmlFor="userName">Full Name</label>
      <input placeholder="enter full name" type="text" value={fullName} onChange={handleNameChange} id="fullName"/>
      <button>Submit</button>
    </form>
  );
}