// src/components/NavbarWithLanguages.tsx
import React, { useState } from 'react';
import { faGlobe, faPhone, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logomain.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css'; 

const Header: React.FC = () => {
  const [lang, setLang] = useState<string>('Português (BR)');

  const countries = [
    { flag: '🇧🇷', name: 'Português (BR)' }, 
    { flag: '🇮🇹', name: 'Italiano' },      
    { flag: '🇺🇸', name: 'English' },       
    { flag: '🇪🇸', name: 'Spanish' },       
    { flag: '🇫🇷', name: 'French' },        
    { flag: '🇩🇪', name: 'German' },       
  ];

  return (
    <div className='container-main-navbar'>
    <Navbar className="container-navbar">
      <Navbar.Brand href="#" className="me-3 d-flex align-items-center">
        <img
          src={Logo} 
          alt="Logo"
          style={{ width: '160px', height: '60px', marginRight: '10px' }} 
        />
       
      </Navbar.Brand>
      <Nav className="me-auto">
        <span className="mx-3">
          <FontAwesomeIcon icon={faPhone} /> Central de atendimento: 11 3003 9282
        </span>
        <span className="mx-3">
          | Televendas: 0800 049 8790
        </span>
      </Nav>
      <Dropdown className="d-inline-block">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          <FontAwesomeIcon icon={faGlobe} /> {countries.find(({ name }) => name === lang)?.flag} {lang}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {countries.map(({ name, flag }) => (
            <Dropdown.Item key={name} onClick={() => setLang(name)}>
              {flag} {name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline-block ms-3">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-login">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/login">Entrar</Dropdown.Item>
          <Dropdown.Item href="/register">Registrar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
    </div>
  );
};

export default Header;