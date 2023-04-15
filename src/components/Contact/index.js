
import React, { useState } from "react";

import { validateEmail } from "../../utils/helper";

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errMessage, setErrMessage] = useState('');
    const { name, email, subject, message} = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrMessage("Not a valid Email.");
            } else {
                setErrMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrMessage(`${event.target.name} required.`);
            } else {
                setErrMessage('');
            }
        }
        if (!errMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section className="contact-container">
            <h2 className="form-title">Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="form-name" htmlFor="name"></label>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultvalue={name}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label className="form-email" htmlFor="email"></label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultvalue={email}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label className="form-subject" htmlFor="subject"></label>
                    <input 
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    defaultvalue={subject}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label className="form-message" htmlFor="message"></label>
                    <textarea
                    name="message"
                    placeholder="Message"
                    rows="8"
                    defaultValue={message}
                    onBlur={handleChange}
                    />
                </div>
                {errMessage && (
                    <div>
                        <p className="err-msg">{errMessage}</p>
                    </div>
                )}
                <button className="form-button" type="submit">Send Message</button>

            </form>
        </section>
    );
}

export default Contact