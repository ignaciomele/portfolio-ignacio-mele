import React from "react";
import "./certificationCard.css"

interface CertificationCardProps {
    image: string;
    institution: string;
    date: string;
    imageClassName: string;
  }
  
  const CertificationCard: React.FC<CertificationCardProps> = ({ image, institution, date, imageClassName }) => (
    <div className="div-certifications-card">
      <img className={imageClassName} src={image} alt="" />
      <div className="p-img-certifications">
        <p>{institution}</p>
        <p>{date}</p>
      </div>
    </div>
  );
  
  export default CertificationCard;