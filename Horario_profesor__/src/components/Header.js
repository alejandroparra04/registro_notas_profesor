// src/components/Header.js
import React from 'react';
import './Header.css'; // Vamos a aplicar los estilos desde un archivo CSS.

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="menu-btn" onClick={toggleSidebar}>
        {/* Botón para mostrar/ocultar el menú */}
        <span className="menu-icon">☰</span>
      </div>
      <div className="title">
                        PROFESOR<br />
                        CAMPUS
                        </div>
      <div className="user-info">
        Francisco Javier Castaño López
      </div>
    </header>
  );
}

export default Header;
