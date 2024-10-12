// Footer.tsx

import React from 'react';
import styled from 'styled-components';

// Estilização do Footer
const FooterContainer = styled.footer`
  background-color: #003580;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
    padding: 40px 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Column = styled.div`
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.9em;
  display: block;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  a {
    margin: 0 10px;
    color: #fff;
    font-size: 1.5em;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 20px;
  font-size: 0.8em;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

// Componente Footer
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Title>Agência de Viagens</Title>
          <Link href="#">Pacotes Promocionais</Link>
          <Link href="#">Destinos Populares</Link>
          <Link href="#">Ofertas de Última Hora</Link>
          <Link href="#">Contato</Link>
        </Column>
        <Column>
          <Title>Informações</Title>
          <Link href="#">Quem Somos</Link>
          <Link href="#">Política de Privacidade</Link>
          <Link href="#">Termos de Uso</Link>
          <Link href="#">Ajuda</Link>
        </Column>
        <SocialIcons>
          <Title>Nos Siga</Title>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </SocialIcons>
      </FooterContent>
      <Copyright>&copy; 2024 Agência de Viagens. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
