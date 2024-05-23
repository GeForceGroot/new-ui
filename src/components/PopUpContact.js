import '../style/popupConatc.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_rw2gu5k', 'template_ojz2pk8', e.target, {
                publicKey: 'ljK8_Qd1p3N6fl0Bq',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Thank you! I will get back to you as soon as possible.');
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        requirement: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="contact-form-container" style={{boxShadow:'none'}}>
            <form className="form" onSubmit={sendEmail} >
                <div className='row' id='rowForm'>
                    <div className="col form-group" id='colForm'>
                        <label htmlFor="name">Your Name (Required)</label>
                        <input style={{ border: '2px solid' }} type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                    </div>
                    <div className="col form-group">
                        <label htmlFor="email">Your Email (Required)</label>
                        <input style={{ border: '2px solid' }} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input style={{ border: '2px solid' }} type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label htmlFor="requirement">Tell Us About Your Requirement</label>
                    <textarea style={{ border: '2px solid' }} id="requirement" name="requirement" value={formData.requirement} onChange={handleChange} rows="4" placeholder="Describe your needs in detail"></textarea>
                </div>
                <button id='btnHvn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUsForm;
