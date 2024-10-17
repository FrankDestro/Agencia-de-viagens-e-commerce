import {
  faEnvelope,
  faGlobe,
  faPhone,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/logomain.jpg";
import "./styles.css";

const Header: React.FC = () => {
  const [lang, setLang] = useState<string>("Português (BR)");

  const countries = [
    { flag: "🇧🇷", name: "Português (BR)" },
    { flag: "🇮🇹", name: "Italiano" },
    { flag: "🇺🇸", name: "English" },
    { flag: "🇪🇸", name: "Spanish" },
    { flag: "🇫🇷", name: "French" },
    { flag: "🇩🇪", name: "German" },
  ];

  return (
    <div className="container-main-navbar">
      <Navbar expand="lg" className="container-navbar">
        <Container>
          <Navbar.Brand href="#" className="me-3 d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "190px", height: "70px", marginRight: "10px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto m-3">
              <span className="mx-3">
                <FontAwesomeIcon icon={faPhone} /> Televendas: 0800 049 8790
              </span>
              <span className="mx-3">
                <FontAwesomeIcon icon={faEnvelope} /> email: agencia.ag@gmail.com
              </span>
              <Dropdown className="d-inline-block mx-3 mb-3 m-3">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  <FontAwesomeIcon icon={faGlobe} />{" "}
                  {countries.find(({ name }) => name === lang)?.flag} {lang}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {countries.map(({ name, flag }) => (
                    <Dropdown.Item key={name} onClick={() => setLang(name)}>
                      {flag} {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="d-inline-block container-login">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-login">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/login">Entrar</Dropdown.Item>
                  <Dropdown.Item href="/register">Registrar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
