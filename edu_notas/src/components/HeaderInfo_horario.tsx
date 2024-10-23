// src/components/HeaderInfo_horario.tsx
import React from 'react';
import logo from '../images/logo unimayor.png';

const HeaderInfo_horario: React.FC = () => {
  return (
    <div className="bg-[#f8e5c3] p-5 rounded-lg mb-5 ml-[250px] mt-[90px]">
      {/* Logo y título */}
      <div className="flex items-center mb-5">
        <div className="logo-placeholder flex items-center justify-center bg-[#ececec] rounded-full w-10 h-10 mr-12 mt-14 ml-12">
          <img src={logo} alt="Logo Unimayor" className="w-[190px] h-auto" />
        </div>
        <h1 className="text-2xl text-[#333] ml-5">Horario</h1>
      </div>

      {/* Bloque de información de la materia */}
      <div className="bg-[#668CD8] text-white text-lg p-4 rounded-lg">
        <p>Itinerario semanal</p>
        <p>Campus Unimayor</p>
      </div>
    </div>
  );
};

export default HeaderInfo_horario;
