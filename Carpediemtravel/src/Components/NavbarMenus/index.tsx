// src/components/SubMenu.tsx
import { faHotel, faPlane, faSuitcase } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de mala
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.css'; // Certifique-se de que este arquivo CSS existe

const SubMenu: React.FC = () => {
  return (
    <div className="submenu">
      <div className="submenu-item">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faPlane} />
        </div>
        <span>Passagens</span>
      </div>
      <div className="submenu-item">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faHotel} />
        </div>
        <span>Hotéis</span>
      </div>
      <div className="submenu-item">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faSuitcase} />
        </div>
        <span>Pacotes</span>
      </div>
    </div>
  );
};

export default SubMenu;
