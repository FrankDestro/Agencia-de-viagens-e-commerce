import {
  faArrowDown,
  faBars,
  faGlobe,
  faMailBulk,
  faPhone,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas
} from "react-bootstrap";
import Logo from "../../assets/logomain.jpg";
import Whats from "../../assets/whatsapp.png";
import "./styles.css";

const Header: React.FC = () => {
  const [lang, setLang] = useState<string>("Português (BR)");
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);

  const countries = [
    { flag: "🇧🇷", name: "Português (BR)" },
    { flag: "🇮🇹", name: "Italiano" },
    { flag: "🇺🇸", name: "English" },
    { flag: "🇪🇸", name: "Spanish" },
    { flag: "🇫🇷", name: "French" },
    { flag: "🇩🇪", name: "German" },
  ];

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <>
      {/* Navbar principal */}
      <Navbar bg="body-tertiary" expand="lg" className="container-navbar">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "190px", height: "70px", marginRight: "10px" }}
            />
          </Navbar.Brand>
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Features
            </Nav.Link>

            <NavDropdown
              title={<span style={{ color: "white" }}>Pricing</span>}
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

          {/* Itens para telas grandes */}
          <div className="d-none d-lg-flex align-items-center">
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
              <Dropdown.Toggle variant="" id="dropdown-language">
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
          </div>
          <FontAwesomeIcon icon={faBars} onClick={handleOffcanvasShow} fontSize={32} color="white" className="button-offcanvas" />
        </Container>
      </Navbar>

      {/* Offcanvas para telas pequenas */}
      <Offcanvas
  show={showOffcanvas}
  onHide={handleOffcanvasClose}
  className="d-lg-none offcanvas-container"
>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title style={{ fontWeight: "bold", fontSize: "1.25rem" }} className="text-white">
      Menu
    </Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <Nav className="flex-column">
      <Nav.Link href="#" className="text-white" style={{ padding: "10px 0" }}>
        Home
      </Nav.Link>
      <Nav.Link href="#" className="text-white" style={{ padding: "10px 0" }}>
        Features
      </Nav.Link>

      <NavDropdown
        title="Pricing"
        id="pricing-dropdown"
        className="text-white"
        style={{ padding: "10px 0"}}
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

      <div className="d-flex align-items-center mt-4">
        <FontAwesomeIcon icon={faMailBulk} className="me-2" />
        <div>
          <span className="fw-bold">Email:</span>
          <span className="d-block">carpe.diem.travel@hotmail.com</span>
        </div>
      </div>

      <div className="d-flex align-items-center mt-4">
        <FontAwesomeIcon icon={faPhone} className="me-2" />
        <div>
          <span className="fw-bold ">Televendas</span>
          <span className="d-block">(11) 3280-1004</span>
        </div>
        <div className="ms-4 d-flex align-items-center">
          <img src={Whats} alt="whats" style={{ width: "24px", height: "24px" }} />
          <div className="ms-2">
            <span className="fw-bold">WhatsApp</span>
            <span className="d-block">(11) 988887766</span>
          </div>
        </div>
      </div>

      <Dropdown className="d-inline-block mt-4 w-100">
        <Dropdown.Toggle
          variant="light"
          id="dropdown-language"
          className="d-flex align-items-center justify-content-between w-100"
        >
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faGlobe} className="me-2" />
            <span>{countries.find(({ name }) => name === lang)?.flag}</span>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {countries.map(({ name, flag }) => (
            <Dropdown.Item key={name} onClick={() => setLang(name)}>
              {flag} {name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline-block mt-4 w-100">
        <Dropdown.Toggle
          variant="light"
          id="dropdown-login"
          className="d-flex align-items-center justify-content-between w-100"
        >
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            <span>Login</span>
          </div>
          <FontAwesomeIcon icon={faArrowDown} fontSize={12} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item href="/login">Entrar</Dropdown.Item>
          <Dropdown.Item href="/register">Registrar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  </Offcanvas.Body>
</Offcanvas>

    </>
  );
};

export default Header;
