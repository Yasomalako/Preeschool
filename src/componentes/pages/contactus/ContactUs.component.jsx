import "./contactus.css";
import React from "react";

function ContactUs() {
  return (
    <div className="contactus">
      <h1>contactus</h1>
      <form onSubmit>
                <input type="text" placeholder="first-name"  /><br></br>
                <input  type="text" placeholder="last name" /><br></br>
                <input  type="age" placeholder="age"  /><br></br>
                <button type="submit">Submit</button>
            </form>
    </div>
  );
};

export default ContactUs;
