import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";

interface DataEmail {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [dataEmail, setDataEmail] = useState<DataEmail>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitButtonText, setSubmitButtonText] = useState<string>('Send');
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDataEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendDataEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitButtonText('Sending');

        const form = formRef.current;

        if (form) {
            try {
                await emailjs.sendForm(
                    'service_66ar31s',
                    'template_jxx6fcj',
                    form,
                    'THGsEy0f2bF9DvlVu'
                );

                swal({
                    title: "The email was successfully sent",
                    icon: "success",
                    timer: 2000
                });

                setSubmitButtonText('Send');
                setDataEmail({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } catch (error) {
                swal({
                    title: "The email couldn't be sent",
                    icon: "error",
                    timer: 2000
                });

                console.error(error);
            }
        }
    };

    return (
        <form 
            ref={formRef} 
            onSubmit={e => sendDataEmail(e)} 
            className="contact-form" 
            data-testid="contact-contactForm"
            >
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={dataEmail.name}
                required
                onChange={e => handleChange(e)}
                data-testid="form-name"
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={dataEmail.email}
                required
                onChange={e => handleChange(e)}
                data-testid="form-email"
            />
            <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={dataEmail.subject}
                required
                onChange={e => handleChange(e)}
                data-testid="form-subject"
            />
            <textarea
                placeholder="Message"
                name="message"
                value={dataEmail.message}
                required
                onChange={e => handleChange(e)}
                data-testid="form-message"
            />
            <div className="button-form">
                <button className="button slide_right" type="submit">{submitButtonText}</button>
            </div>
        </form>
    );
}

export default ContactForm;