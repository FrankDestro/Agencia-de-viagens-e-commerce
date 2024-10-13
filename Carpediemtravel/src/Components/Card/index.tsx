// TravelCard.tsx

import React from 'react';
import styled from 'styled-components';

// Estilização do Card
const CardContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 1em;
  color: #777;
`;

const Price = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #e91e63;
`;

// Definição de Props
interface TravelCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

// Componente Card
const Card: React.FC<TravelCardProps> = ({ image, title, description, price }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Content>
    </CardContainer>
  );
};

// Exportando o Componente
export default Card;
