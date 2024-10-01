import React, { useState, useRef } from 'react';
import './contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.init('XY9tbQtZmj7qzCiNn');

        let templateParams = {
            name: name,
            email: email,
            message: message
          };
          
          emailjs.send('service_z25qt4r', 'template_oocgwwa', templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setName('');
              setMessage('');
              setEmail('');
              alert('Send Successfully');
              setLoading(false);
            },
            (error) => {
              console.log('FAILED...', error);
              setLoading(false);
            },
          );

    };

    const handleName = (e) => setName(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleMessage = (e) => setMessage(e.target.value)
    

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
                            value={name} 
                            onChange={handleName}
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
                            value={email} 
                            onChange={handleEmail}
                        />
                    </div>
                    <div className='textbox--big'>
                        <textarea 
                            id='message' 
                            name="message" 
                            placeholder="Message" 
                            className='textbox-big' 
                            required // Add required attribute
                            value={message} 
                            onChange={handleMessage}
                        />
                    </div>
                   {loading ? (<button type="submit" className='button' disabled>Sending...</button>
                   ) : (
                    <button type='submit' className='button'>Submit</button>
                   )}
                </form>
                <div className='image-container'>
                        <img src = "/contactFiller.png" className='contact-image' alt='nacaAirfoilWing'/>
                </div>
            </div>
        </div>
    )
}

export default Contact;
