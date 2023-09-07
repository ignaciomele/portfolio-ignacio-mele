    import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
    import './contact.css'
    import ScrollUp from "../buttonScrollUp/ScrollUp";
    import emailjs from '@emailjs/browser';
    import swal from "sweetalert";
    import gmailIcon from '../../static/gmailIcon.webp'
    import linkedinIcon from '../../static/linkedinIcon.png'
    import whatsappIcon from '../../static/whatsappIcon.png'

    interface DataEmail {
        name: { placeholder: string; type: string; value: string };
        email: { placeholder: string; type: string; value: string };
        subject: { placeholder: string; type: string; value: string };
        message: { placeholder: string; type: string; value: string };
        [key: string]: { placeholder: string; type: string; value: string };
    }

    interface ContactProps {}

    const Contact: React.FC<ContactProps> = () => {
        const [dataEmail, setDataEmail] = useState<DataEmail>({
            name: { placeholder: "Name & Surname", type: "text", value: '' },
            email: { placeholder: "Email", type: "email", value: '' },
            subject: { placeholder: "Subject", type: "text", value: '' },
            message: { placeholder: "Message", type: "text", value: '' }
        });

        const [submitButtonText, setSubmitButtonText] = useState<string>('Send');
        const formRef = useRef<HTMLFormElement>(null);

        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setDataEmail(prevState => ({
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value
                }
            }));
        };

        const sendDataEmail = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitButtonText('Sending');
        
            const form = formRef.current;
        
            if (form) {
                emailjs.sendForm(
                    'service_66ar31s',
                    'template_jxx6fcj',
                    form,
                    'THGsEy0f2bF9DvlVu'
                )
                    .then(() => {
                        swal({
                            title: "The email was successfully sent",
                            icon: "success",
                            timer: 2000
                        });
                        setSubmitButtonText('Send');
                        setDataEmail({
                            name: { ...dataEmail.name, value: '' },
                            email: { ...dataEmail.email, value: '' },
                            subject: { ...dataEmail.subject, value: '' },
                            message: { ...dataEmail.message, value: '' }
                        });
                    })
                    .catch((error: any) => {
                        swal({
                            title: "The email couldn't be sent",
                            icon: "error",
                            timer: 2000
                        });
                        console.log(error.text);
                    });
            }
        };


        return(
            <>
            <div className="div-contact" id="contact">
                <div className="div-contact-title">
                    <h1 data-aos="zoom-in" data-aos-duration="1000">Contact Me</h1>
                </div>            
                <div data-aos="zoom-in" data-aos-duration="1000" className="div-contact-form">
                    <form ref={formRef} onSubmit={e => sendDataEmail(e)} className="contact-form">
                        {Object.keys(dataEmail).map(keyName => {
                            if (keyName !== 'message') return <input
                                key={keyName}
                                type={dataEmail[keyName].type}
                                placeholder={dataEmail[keyName].placeholder}
                                name={keyName}
                                value={dataEmail[keyName].value}
                                required
                                onChange={e => handleChange(e)}
                            />
                            return <textarea
                                key={keyName}
                                // type={dataEmail[keyName].type}
                                placeholder={dataEmail[keyName].placeholder}
                                name={keyName}
                                value={dataEmail[keyName].value}
                                required
                                onChange={e => handleChange(e)}
                            />
                        })}
                        <div className="button-form" >
                            <button className="button slide_right" type="submit">{submitButtonText}</button>
                        </div>
                    </form>
                </div>
                    <hr className="hr-contact"/>
                <div className="div-contact-icons">
                    <a href="https://www.linkedin.com/in/ignacio-mele/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="" className="icon-linkedin"/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=436608259229" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="" className="icon-whatsapp"/>
                    </a>
                    <a href="mailto: ignacio.mele1@gmail.com" rel="noopener noreferrer">
                        <img src={gmailIcon} alt="" className="icon-gmail"/>
                    </a>
                </div>
                <ScrollUp/>            
            </div>
                
            </>
        )
    }

    export default Contact