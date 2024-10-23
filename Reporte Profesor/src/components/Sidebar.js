import React from 'react';
import './Sidebar.css'; // Aquí crearemos estilos luego

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Generar Informe Calificaciones</a></li>
        <li><a href="#">Grupo Diurno</a></li>
        <li><a href="#">Grupo Nocturno</a></li>
        <li><a href="#">Asignaturas</a>
          <ul>
            <li><a href="#">Física</a></li>
            <li><a href="#">Matemáticas</a></li>
            <li><a href="#">Economía</a></li>
          </ul>
        </li>
        <li><a href="#">Misión y Visión</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
