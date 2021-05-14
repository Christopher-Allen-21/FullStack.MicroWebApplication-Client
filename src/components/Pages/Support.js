import React from 'react';
import emailjs from 'emailjs-com';


export default function Support() {

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('gmail', 'template_t9nwbc3', e.target, 'user_mGnb4NpHJfoAK5kidhkDI')
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
        e.target.reset()
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <h1>Get in touch with the ZipTube Creator Support team</h1>
            <div>
                <p>Name</p>
            <input type="text" name="name" />
                <p></p>
            <p>Email</p>
            <input type="email" name="email" />
                <p></p>
            <p>Message</p>
            <textarea name="message" style={{width: '50%', height: '150px'}} />
                <p></p>
            <input type="submit" value="Send" />
            </div>
        </form>
    );
}
