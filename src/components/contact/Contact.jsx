import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || (email === "") | (message === "")) {
      alert("please fill in all fields");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_kb3vskm",
        "template_17j4yrp",
        templateParams,
        "dXnl2Ho1Wixl32gU3"
      )
      .then(
        (response) => {
          console.log("Email sent", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }
  return (
    <section id="contact">
      <h1 className="title">Contact</h1>
      <div className="container">
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Send" />
        </form>
      </div>
      <div className="icons_footer">
      <a href="https://github.com/silviocesarjunior">
        <Github color="#59b256" size="3rem" />
      </a>
      <a href="https://www.linkedin.com/in/silviocesarjunior/">
        <Linkedin color="#59b256" size="3rem" />
      </a>
      </div>
    </section>
  );
};

export default Contact;
