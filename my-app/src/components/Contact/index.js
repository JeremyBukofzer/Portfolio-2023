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
        is (!errMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>
            <form id="contact-form" onSubmit={}>
                <div>
                    
                </div>

            </form>
        </section>
    )
}