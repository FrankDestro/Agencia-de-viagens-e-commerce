import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.css";

interface TravelCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  going: string;
  back: string;
  installment: string;
  priceInstallment: string;
}

const Card: React.FC<TravelCardProps> = ({
  image,
  title,
  description,
  price,
  going,
  back,
  installment,
  priceInstallment,
}) => {
  return (
    <div className="card-container">
    <img className="card-image" src={image} alt={title} />
    <div className="card-content">
      <div className="icon-title-container">
        <h2 className="card-title">{title}</h2>
        <FontAwesomeIcon icon={faPlaneDeparture} className="card-icon" />
      </div>
      <span className="card-going">Ida: {going}</span>
      <span className="card-back">Volta: {back}</span>
      <p className="card-description">{description}</p>
      <p className="card-price">{price}</p>
      <span className="card-price-installment">
        {installment} {priceInstallment}
      </span>
    </div>
    <div className="card-banner">Promoção</div>
  </div>
  );
};

export default Card;
