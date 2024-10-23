import React from 'react';
import logo from '../images/logo unimayor.png';

const HeaderInfo_informe: React.FC = () => {
  // Función para manejar el clic en el botón de imprimir
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#f8e5c3] p-5 rounded-lg mb-5 ml-[250px] mt-[90px] relative">
      {/* Logo y título */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div className="w-[10px] h-[10px] bg-gray-200 flex items-center justify-center font-bold rounded-full mt-[60px] ml-[50px] mr-[50px]">
            <img src={logo} alt="Logo Unimayor" className="w-[190px] mb-[50px]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 ml-5">Informe Alumnos</h1>
        </div>
        {/* Botón de imprimir */}
        <button
          className="bg-yellow-500 text-black border-none px-5 py-2 cursor-pointer rounded-lg text-lg hover:bg-yellow-400"
          onClick={handlePrint}
        >
          Imprimir
        </button>
      </div>

      {/* Bloque de información de la materia */}
      <div className="bg-[#668CD8] text-white p-4 rounded-lg">
        <p className="mb-2">
          <strong>Nombre de la materia:</strong> Electiva 5
        </p>
        <p className="mb-2">
          <strong>Semestre:</strong> 8
        </p>
        <p className="mb-2">
          <strong>Salón:</strong> Laboratorio de redes
        </p>
        <p>
          <strong>Horario:</strong> Martes 7:00 pm - 10:00 pm
        </p>
      </div>
    </div>
  );
};

export default HeaderInfo_informe;
