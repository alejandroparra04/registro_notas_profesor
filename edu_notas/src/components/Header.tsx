import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-yellow-500 text-white px-4 py-2 fixed top-0 left-0 right-0 h-16 flex justify-between items-center z-50">
      {/* Botón de menú */}
      <div className="cursor-pointer flex items-center" onClick={toggleSidebar}>
        <span className="text-4xl">☰</span>
      </div>
      
      {/* Título */}
      <div className="font-bold text-lg whitespace-pre-line text-left mr-auto ml-8">
        PROFESOR<br />
        CAMPUS
      </div>
      
      {/* Información de usuario */}
      <div className="text-xl">
        Francisco Javier Castaño López
      </div>
    </header>
  );
}

export default Header;
