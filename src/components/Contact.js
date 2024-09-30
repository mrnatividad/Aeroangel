import React, { useState, useRef } from 'react';
import './contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_gmz5s8k', 'template_wuk8i5a', form.current, {
            publicKey: '6q7zH3izJhHIhyywK',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset(); // Reset the form fields
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };

    return (
        <div className="contact">
            <div className="title-contact inknut-antiqua-normal">Contact</div>
            <div className='form-container-img'>
                <form ref = {form} onSubmit={sendEmail}>
                    <div className='textbox-container'>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        <input 
                            type='text' 
                            id='name' 
                            name="name" 
                            className='textbox' 
                            placeholder='Name' 
                            required // Add required attribute
                        />
                    </div>
                    <div className='textbox-container'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <input 
                            type='email' 
                            id="email" 
                            name="email" 
                            className='textbox' 
                            placeholder='Email' 
                            required // Add required attribute
                        />
                    </div>
                    <div className='textbox--big'>
                        <textarea 
                            id='message' 
                            name="message" 
                            placeholder="Message" 
                            className='textbox-big' 
                            required // Add required attribute
                        />
                    </div>
                    <button type="submit" className='button'>Send</button> {/* Add a submit button */}
                </form>
                <div className='image-container'>
                    <h1>Image Here</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact;
