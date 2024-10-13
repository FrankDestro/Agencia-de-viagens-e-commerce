import React from "react";
import "./styles.css"; // Arquivo CSS para estilização

type CardProps = {
  image: string;
  title: string;
  description: string;
};

const CardDestinos: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-overlay">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardDestinos;
