import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Importa ícones corretos
import { faInfo, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.css";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="column">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className="icon"
              style={{ marginRight: "10px" }}
            />
            <h3 className="title">Agência de Viagens</h3>
          </div>
          <a href="#" className="link">
            Pacotes Promocionais
          </a>
          <a href="#" className="link">
            Destinos Populares
          </a>
          <a href="#" className="link">
            Ofertas de Última Hora
          </a>
          <a href="#" className="link">
            Contato
          </a>
        </div>
        <div className="column">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="icon"
              style={{ marginRight: "10px", fontSize: "18px" }}
            />
            <h3 className="title">Informações</h3>
          </div>
          <a href="#" className="link">
            Quem Somos
          </a>
          <a href="#" className="link">
            Política de Privacidade
          </a>
          <a href="#" className="link">
            Termos de Uso
          </a>
          <a href="#" className="link">
            Ajuda
          </a>
        </div>
        <div className="social-icons">
          <h3 className="title">Nos Siga nas redes sociais</h3>

          <a href="#" aria-label="Facebook" className="social-link">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="#" aria-label="Instagram" className="social-link">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="#" aria-label="Twitter" className="social-link">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="#" aria-label="Youtube" className="social-link">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
        </div>
      </div>
      <p className="copyright">
        &copy; 2024 CarpeDiem Travel. Todos os direitos reservados.
      </p>
      <p className="developer-brand">
        Desenvolvido por SoftWorks. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
