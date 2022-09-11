import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fx3oz6s', 'template_gr2us4c', form.current, 'user_ZlR7Sby7m2n2A6rsE9rRd')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What's your story?</b> contact us. We can talk to you without obligation
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                            <input style={{ backgroundColor: darkMode && "#333" }} type="text" name="user_name" placeholder="Name" />
                            <input style={{ backgroundColor: darkMode && "#333" }} type="text" name="user_email" placeholder="Email" />
                            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" name="message" placeholder="Message" />
                            <input type="submit" value="Enviar" />
                            <br />
                            <span>{done && "Obrigado pelo contato!"}</span>
                        </form>
                        <div className='f-icons'>
                        <a href='https://github.com/silviocesarjunior'>
                            <Github color='green' size='3rem' /></a>
                        <a href='https://www.linkedin.com/in/silviocesarjunior/'>
                            <Linkedin color='green' size='3rem' /></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
