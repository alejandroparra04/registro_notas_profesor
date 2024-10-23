import React from 'react';
import './HeaderInfo.css';
import logo from '../images/logo unimayor.png';

const HeaderInfo = () => {
  return (
    <div className="header-info-container">
      {/* Logo y título */}
      <div className="header-logo-title">
        <div className="logo-placeholder">
        <img src={logo} alt="Logo Unimayor" className="logo" /> {/* Aquí se muestra el logo */}
        </div>
        <h1 className="header-title">Horario</h1>
      </div>

      {/* Bloque de información de la materia */}
      <div className="subject-info">
        <p>Itinerario semanal </p>
        <p>Campus Unimayor</p>
      </div>
    </div>
  );
};

export default HeaderInfo;
