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
        <h1 className="header-title">Listado de Estudiantes</h1>
      </div>

      {/* Bloque de información de la materia */}
      <div className="subject-info">
        <p><strong>Nombre de la materia:</strong> Electiva 5</p>
        <p><strong>Semestre:</strong> 8</p>
        <p><strong>Salón:</strong> Laboratorio de redes</p>
        <p><strong>Horario:</strong> Martes 7:00 pm - 10:00 pm</p>
      </div>
    </div>
  );
};

export default HeaderInfo;
