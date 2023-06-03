import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

  // const serviceID = process.env.REACT_APP_SERVICE_ID;
  // const templateID = process.env.REACT_APP_TERMPLATE_ID;
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(
      'service_u4b4an4', 
      'template_uit8gmz', 
        form.current,
        'PebPb8uxonbUdZWuz')
      .then((result) => {
          console.log(result.text);
          console.log('Message Sent!')
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <section className="contact-container">
            <h2 className="form-title">Contact Me</h2>
            <form className='form-container' ref={form} onSubmit={sendEmail}>
      <label className='form-name'>Name</label>
      <input type="text" name="user_name" />
      <label className='form-email'>Email</label>
      <input type="email" name="user_email" />
      <label className='form subject'>Subject</label>
      <input type="text" name="subject" />
      <label className='form-message'>Message</label>
      <textarea name="message" />
      <input className='form-button' type="submit" value="Send" />
    </form>
        </section>
    );
}

export default Contact