import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';
function Join() { 
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2xtvz9t', 'template_xoobdl7', form.current, 'u7h7zmetypJGw3Tu3')
          .then((result) => {
              console.log(result.text);
              console.log("refat");

          }, (error) => {
              console.log(error.text);
          });

      };
  return (
    <div className="Join" id="juoin-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">  WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <from   ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="from_name" placeholder="Enter your email address" />
             <button className="btn btn-j"> Join Us</button>
        </from>
      </div>
    </div>   
  );
}

export default Join;
