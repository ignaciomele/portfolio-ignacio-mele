import React from "react";
import './certifications.css'
import unlp from '../../static/iconCertifications/unlp.png'
import certificationLinkedin from '../../static/iconCertifications/certificationLinkedin.jpg'
import certificationUdemy from '../../static/iconCertifications/certificationUdemy.jpg'
import CertificationCard from "../globalComponents/CertificationCard/CertificationCard";

const certificationsData = [
    {
      id: 1,
      image: unlp,
      institution: "Universidad Nacional de La Plata",
      date: "2013 - 2021",
      imageClassName: "course-img-1",
    },
    {
      id: 2,
      image: certificationLinkedin,
      institution: "LinkedIn",
      date: "June - 2021",
      imageClassName: "course-img-2",
    },
    {
      id: 3,
      image: certificationUdemy,
      institution: "Udemy",
      date: "May - 2022",
      imageClassName: "course-img-2",
    },
];

const Certifications: React.FC = () => {

    const handleViewAllBtn = () => {
        window.open('https://drive.google.com/drive/folders/1j_wPwSTEVSUyw3qXw66DLos3hZOxBYDm', '_blank');
      };

    return(
        <div 
          className="div-certifications" 
          id="certifications" 
          data-testid="certifications"
          >
          <div>
            <h1 data-aos="zoom-in">Certifications</h1>
          </div>
          <div 
            className="div-certifications-cards" 
            data-aos="zoom-in" 
            data-testid="certification-card"
            >
            {certificationsData.map((certification) => (
              <CertificationCard
                key={certification.id}
                image={certification.image}
                institution={certification.institution}
                date={certification.date}
                imageClassName={certification.imageClassName}
              />
            ))}
          </div>
          <div className="div-certifications-a">
            <button
              onClick={handleViewAllBtn}
              className="button slide_right"
              data-testid="certifications-viewAll-button"
            >
              View all
            </button>
          </div>
        </div>
    )
}

export default Certifications