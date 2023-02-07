import React, { useState } from "react";

import { validateEmail } from "../../utils/helper";

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errMessage, setErrMessage] = useState('');
    const { name, email, message} = formState;

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
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text"
                    name="name"
                    defaultvalue={name}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                    name="email"
                    defaultvalue={email}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                    name="message"
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
                <button type="submit">Submit</button>

            </form>
        </section>
    );
}

export default Contact