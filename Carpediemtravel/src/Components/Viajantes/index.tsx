import React, { useState } from "react";
import "./styles.css";

const TravelOptions: React.FC = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRoomChange = (increment: number) => {
    setRooms((prev) => Math.max(1, prev + increment));
  };

  const handleAdultChange = (increment: number) => {
    setAdults((prev) => Math.max(1, prev + increment));
  };

  const handleChildrenChange = (increment: number) => {
    setChildren((prev) => Math.max(0, prev + increment));
  };

  // Função para aplicar as alterações e fechar o dropdown
  const handleApply = () => {
    // Aqui você pode adicionar qualquer lógica adicional que precise ser aplicada
    setDropdownOpen(false);
  };

  return (
    <div className="travel-options-wrapper">
      <button className="dropdown-toggle-viajantes" onClick={toggleDropdown}>
        <span className="summary">
          {rooms} Quartos, {adults} Adultos, {children} Crianças
        </span>
      </button>

      {dropdownOpen && (
        <div className="travel-options-dropdown">
          <div className="options-row">
            <label>Quartos</label>
            <div className="number-control">
              <button onClick={() => handleRoomChange(-1)}>-</button>
              <input type="number" value={rooms} readOnly />
              <button onClick={() => handleRoomChange(1)}>+</button>
            </div>
          </div>

          <div className="options-row">
            <label>Adultos</label>
            <div className="number-control">
              <button onClick={() => handleAdultChange(-1)}>-</button>
              <input type="number" value={adults} readOnly />
              <button onClick={() => handleAdultChange(1)}>+</button>
            </div>
          </div>

          <div className="options-row">
            <label>Crianças</label>
            <div className="number-control">
              <button onClick={() => handleChildrenChange(-1)}>-</button>
              <input type="number" value={children} readOnly />
              <button onClick={() => handleChildrenChange(1)}>+</button>
            </div>
          </div>

          {/* Botão "Aplicar" */}
          <button className="apply-button" onClick={handleApply}>
            Aplicar
          </button>
        </div>
      )}
    </div>
  );
};

export default TravelOptions;
