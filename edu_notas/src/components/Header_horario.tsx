// src/components/Header_horario.tsx
import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header_horario: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-yellow-400 text-white p-2 fixed top-0 left-0 right-0 h-16 flex justify-between items-center z-50">
      <div className="menu-btn flex items-center cursor-pointer" onClick={toggleSidebar}>
        <span className="menu-icon text-3xl">☰</span>
      </div>
      <div className="title font-bold text-xl text-left whitespace-pre-line">
        PROFESOR<br />
        CAMPUS
      </div>
      <div className="user-info text-lg">
        Francisco Javier Castaño López
      </div>
    </header>
  );
};

export default Header_horario;
