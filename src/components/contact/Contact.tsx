import React from "react";
import './contact.css'
import ScrollUp from "../buttonScrollUp/ScrollUp";
import gmailIcon from '../../static/gmailIcon.webp'
import linkedinIcon from '../../static/linkedinIcon.png'
import whatsappIcon from '../../static/whatsappIcon.png'
import ContactForm from "./ContactForm";
import { ContactProps } from "../../models/database-entities";


const TitleText = "Contact Me"


const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="div-contact" id="contact">
            <div className="div-contact-title">
                <h1 
                    data-aos="zoom-in" 
                    data-aos-duration="1000" 
                    data-testid="contact-title"
                    >
                        {TitleText}
                </h1>
            </div>
            <div 
                data-aos="zoom-in" 
                data-aos-duration="1000" 
                className="div-contact-form" 
                >
                <ContactForm />
            </div>
            <hr className="hr-contact" />
            <div className="div-contact-icons">
                <a 
                    href="https://www.linkedin.com/in/ignacio-mele/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="contact-linkedinIcon"
                    >
                    <img src={linkedinIcon} alt="" className="icon-linkedin" />
                </a>
                <a 
                    href="https://api.whatsapp.com/send?phone=436608259229" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="contact-whatsappIcon"
                    >
                    <img src={whatsappIcon} alt="" className="icon-whatsapp" />
                </a>
                <a 
                    href="mailto: ignacio.mele1@gmail.com" 
                    rel="noopener noreferrer"
                    data-testid="contact-gmailIcon"
                    >
                    <img src={gmailIcon} alt="" className="icon-gmail" />
                </a>
            </div>
            <ScrollUp />
        </div>
    );
}

    export default Contact