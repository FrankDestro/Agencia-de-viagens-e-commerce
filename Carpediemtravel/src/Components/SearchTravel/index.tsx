// src/components/SearchTravel.tsx
import {
  faCalendarAlt,
  faGift,
  faHotel,
  faMapMarkerAlt,
  faPaintRoller,
  faPlaneDeparture,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TravelOptions from "../Viajantes";
import "./styles.css"; // Adicione o caminho correto do seu CSS

const SearchTravel: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rooms] = useState(1);
  const [adults] = useState(1);
  const [children] = useState(0);

  const [activeTab, setActiveTab] = useState(1); // Controla qual aba está ativa

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Buscando viagens para:",
      destination,
      "Origem:",
      origin,
      "Data de Início:",
      startDate,
      "Data de Fim:",
      endDate,
      "Quartos:",
      rooms,
      "Adultos:",
      adults,
      "Crianças:",
      children
    );
  };

  return (
    <div className="search-travel">
      {/* Controles de Abas */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          Voos
          <FontAwesomeIcon
            icon={faPlaneDeparture}
            style={{ marginLeft: "10px" }}
          />
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          Pacotes
          <FontAwesomeIcon icon={faGift} style={{ marginLeft: "10px" }} />
        </button>
        <button
          className={`tab-button ${activeTab === 3 ? "active" : ""}`}
          onClick={() => setActiveTab(3)}
        >
          Hospedagem
          <FontAwesomeIcon icon={faHotel} style={{ marginLeft: "10px" }} />
        </button>
        <button
          className={`tab-button ${activeTab === 4 ? "active" : ""}`}
          onClick={() => setActiveTab(4)}
        >
          Parques
          <FontAwesomeIcon
            icon={faPaintRoller}
            style={{ marginLeft: "10px" }}
          />
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <form onSubmit={handleSearch}>
              <div
                className="search-inputs"
              >
                <div className="input-group">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  <input
                    type="text"
                    placeholder="Origem"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  <input
                    type="text"
                    placeholder="Destino"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="guests-selection">
                <TravelOptions />
              </div>
              <button type="submit" className="search-button">
                <FontAwesomeIcon icon={faSearch} /> Buscar
              </button>
            </form>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <p>Conteúdo da Aba 2: Aqui você pode colocar informações extras.</p>
          </div>
        )}

        {activeTab === 3 && (
          <div>
            <p>Conteúdo da Aba 3: Aqui você pode colocar observações.</p>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <p>Conteúdo da Aba 4: Aqui você pode colocar observações.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTravel;
