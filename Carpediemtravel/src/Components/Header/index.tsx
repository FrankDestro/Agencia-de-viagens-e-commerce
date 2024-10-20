import {
  faArrowDown,
  faGlobe,
  faMailBulk,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Importa a seta
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/logomain.jpg";
import Whats from "../../assets/whatsapp.png";
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
    <Navbar bg="body-tertiary" expand="lg" className="container-navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "190px", height: "70px", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarText" />
        <Navbar.Collapse id="navbarText">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Features
            </Nav.Link>

            <NavDropdown
               title={<span style={{ color: 'white' }}>Pricing</span>} 
               id="pricing-dropdown" 
               className="text-white"
            >
              <NavDropdown.Item href="/pricing/basic">
                Basic Plan
              </NavDropdown.Item>
              <NavDropdown.Item href="/pricing/premium">
                Premium Plan
              </NavDropdown.Item>
              <NavDropdown.Item href="/pricing/enterprise">
                Enterprise Plan
              </NavDropdown.Item>
            </NavDropdown>
            <FontAwesomeIcon icon={faArrowDown} fontSize={12} color="white" />
          </Nav>
          <span className="navbar-text d-flex align-items-center">
            <div className="mail-container">
              <div className="mail-icon">
                <FontAwesomeIcon icon={faMailBulk} />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span className="mail-title">Email:</span>
                <span className="mail-text">carpe.diem.travel@hotmail.com</span>
              </div>
            </div>

            <div className="phone-container">
              <div className="phone-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="phone-title">Televendas </span>
                <span className="phone-number">(11) 3280-1004</span>
              </div>
              <div className="whatsapp-icon">
                <img src={Whats} alt="whats" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="phone-title">WhatsApp</span>
                <span className="phone-number">(11) 988887766</span>
              </div>
            </div>

            <Dropdown className="d-inline-block mx-3 container-login">
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FontAwesomeIcon icon={faGlobe} />{" "}
                {countries.find(({ name }) => name === lang)?.flag}
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
              <Dropdown.Toggle variant="" id="dropdown-login">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  fontSize={12}
                  style={{ marginLeft: "5px" }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="/login">Entrar</Dropdown.Item>
                <Dropdown.Item href="/register">Registrar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
