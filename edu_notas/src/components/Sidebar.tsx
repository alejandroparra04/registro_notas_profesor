import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-5 h-screen fixed top-0 left-0 w-48 z-10 overflow-y-auto">
      <ul>
        <li className="my-5"><a href="#">Generar Informe Calificaciones</a></li>
        <li className="my-5"><a href="#">Grupo Diurno</a></li>
        <li className="my-5"><a href="#">Grupo Nocturno</a></li>
        <li className="my-5">
          <a href="#">Asignaturas</a>
          <ul className="ml-3">
            <li><a href="#">Física</a></li>
            <li><a href="#">Matemáticas</a></li>
            <li><a href="#">Economía</a></li>
          </ul>
        </li>
        <li className="my-5"><a href="#">Misión y Visión</a></li>
        <li className="my-5"><a href="#">Acerca de</a></li>
        <li className="my-5"><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
