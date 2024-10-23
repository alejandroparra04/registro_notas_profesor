import React from 'react';
import logo from '../images/logo unimayor.png';

const HeaderInfo: React.FC = () => {
  return (
    <div className="bg-pink-200 p-5 rounded-lg mb-5 ml-64 mt-20">
      {/* Logo y título */}
      <div className="flex items-center mb-5">
        <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-full mr-12 mt-6 ml-12">
          <img src={logo} alt="Logo Unimayor" className="w-48 h-auto mb-5" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 ml-5">Listado de Estudiantes</h1>
      </div>

      {/* Bloque de información de la materia */}
      <div className="bg-blue-600 text-white p-4 rounded-lg">
        <p><strong>Nombre de la materia:</strong> Electiva 5</p>
        <p><strong>Semestre:</strong> 8</p>
        <p><strong>Salón:</strong> Laboratorio de redes</p>
        <p><strong>Horario:</strong> Martes 7:00 pm - 10:00 pm</p>
      </div>
    </div>
  );
};

export default HeaderInfo;
