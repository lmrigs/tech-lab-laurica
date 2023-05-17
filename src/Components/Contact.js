import "../Styles/Contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setSuccessMessage("");
      setErrorMessage("Please populate all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_lp00b4m",
        "template_bjirl6n",
        form.current,
        "jMQTw7s2dsYADFXbf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent.");
          setErrorMessage("");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("");
          setErrorMessage("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Send" />
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <h2 className="section-header">Contact Us</h2>
      <div className="container-contact">
        <div className="contact-info">
          <h3>Ready to Enhance Your Business Online? We're Here To Help.</h3>
          <div className="phone">
            <img
              src={require("../Images/Icons/icons8-phone 1.png")}
              alt="phone icon"
            ></img>
            <p>
              +1 647 769 6949<br></br>
              +1 810 300 1906
            </p>
          </div>
          <div className="email">
            <img
              src={require("../Images/Icons/icons8-email 1.png")}
              alt="email icon"
            ></img>
            <p>support@thetechlab.ca</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="contact-form">
          <ContactUs />
        </div>
      </div>
    </>
  );
}
