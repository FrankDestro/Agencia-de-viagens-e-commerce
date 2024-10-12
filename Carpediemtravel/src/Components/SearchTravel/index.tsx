// src/components/SearchTravel.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css"; // Adicione o caminho correto do seu CSS
import TravelOptions from "../Viajantes";

const SearchTravel: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rooms, ] = useState(1);
  const [adults, ] = useState(1);
  const [children, ] = useState(0);

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
    <div className="teste">
      <div className="search-travel">
        <h2>Encontre a sua viagem dos sonhos</h2>
        <form onSubmit={handleSearch}>
          <div className="search-inputs">
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
    </div>
  );
};

export default SearchTravel;
