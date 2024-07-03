
//useStates from React Hooks to forms; onChange
import { useState } from "react";
import Button from "./Button";

function ContactMe(props) {
  return (
    <div id="contactMe">
      <div className="contactWrapper">
        <div className="contactTop">
          <h1>Want to contact me?</h1>
          <div className="contactTopIcons">
            <a href="">instagramLogo </a>
            <a href="">githubLogo </a>
            <a href="">linkedinLogo </a>
          </div>
        </div>
        <div className="contactForm">
          <h3>Please, send a email to <span>andreusui@email.com</span> using the form bellow:</h3>
          <form className="contactFormF">
            <input
              type="text"
              className="contactName"
              value="Name"
              name="formName" 
              onChange=""
            />
              
            <input
              type="text"
              className="contactName"
              value="Email"
              name="formEmail" 
              onChange=""
            />
            <textarea
              rows="5"
              className="contactText"
              value="Message"
              name="formText"
              wrap="hard"
            />
            <button
              type="submit"
              className="contactButton"
              name="formButton"
            >
              Submit 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;