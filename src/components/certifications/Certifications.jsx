import React from "react";
import './certifications.css'
import unlp from '../../static/iconCertifications/unlp.png'
import certificationLinkedin from '../../static/iconCertifications/certificationLinkedin.jpg'
import certificationUdemy from '../../static/iconCertifications/certificationUdemy.jpg'

export default function Certifications() {
    return(
        <>
            <div className="div-certifications" id="certifications">
                <div>
                    <h1 data-aos="zoom-in">Certifications</h1>
                </div>
                <div className="div-certifications-cards" data-aos="zoom-in">
                    <div class="div-certifications-card">
                        <img className="course-img-1" src={unlp} alt="" />
                        <div className="p-img-certifications">
                            <p>Universidad Nacional de La Plata</p>
                            <p>2013 - 2021</p>
                        </div>
                    </div>
                    <div class="div-certifications-card">
                        <img className="course-img-2" src={certificationLinkedin} alt="" />
                        <div className="p-img-certifications">
                            <p>LinkedIn</p>
                            <p>June - 2021</p>
                        </div>
                    </div>
                    <div class="div-certifications-card">
                        <img className="course-img-2" src={certificationUdemy} alt="" />
                        <div className="p-img-certifications">
                            <p>Udemy</p>
                            <p>May - 2022</p>
                        </div>
                    </div>
                </div>                
                <div className="div-certifications-a">
                    <a 
                        href="https://drive.google.com/drive/folders/1j_wPwSTEVSUyw3qXw66DLos3hZOxBYDm" 
                        target="_blank"
                        className="certifications-a"
                        rel="noopener noreferrer"
                        data-aos="zoom-in"
                        ><button className="button slide_right">View all</button> </a>
                </div>
                
            </div>
        </>
    )
}