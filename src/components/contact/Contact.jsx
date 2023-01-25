import React, {useState, useRef} from "react";
import './contact.css'
import ScrollUp from "../buttonScrollUp/ScrollUp";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";
import gmailIcon from '../../static/gmailIcon.webp'
import linkedinIcon from '../../static/linkedinIcon.png'
import whatsappIcon from '../../static/whatsappIcon.png'

export default function Contact() {
    const [dataEmail, setDataEmail] = useState({
        name: {placeholder: "Name & Surname", type: "text", value: '' },
        email:{ placeholder: "Email", type: "email", value: '' },
        subject:{ placeholder: "Subject", type: "text", value: '' },
        message:{ placeholder: "Message", type: "text", value: '' }
    })
    const [submitButtonText, setSubmitButtonText] = useState('Send')

    const formRef = useRef()

    const handleChange = e => {
        const { name, value } = e.target
        setDataEmail(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value
            }
        })
        )
    }
    const sendDataEmail = (e) => {
        e.preventDefault();
        setSubmitButtonText('Sending')
        emailjs.sendForm(
            'service_66ar31s', 
            'template_jxx6fcj', 
            formRef.current, 
            'THGsEy0f2bF9DvlVu')
          .then((result) => {
            swal({
                title: "The email was successfully sent",
                icon: "success",
                button: "accept",
                timer: "2000"
            });
            setTimeout(() => {
                setSubmitButtonText('Send')
            }, 3000);
            setSubmitButtonText('Sent')
            dataEmail.name.value = ''
            dataEmail.email.value = ''
            dataEmail.subject.value = ''
            dataEmail.message.value = ''
          }, (error) => {
            swal({
                title: "The email couldn't be sent",
                icon: "error",
                button: "accept",
                timer: "2000"
            });
              console.log(error.text);
          });
            
          
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
                            type={dataEmail[keyName].type}
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