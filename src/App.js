import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Header from './components/Header';
import Horario from './components/Horario';
import HeaderInfo from './components/HeaderInfo';
import logo from './images/logo unimayor.png'; // Ajusta la ruta según la ubicación del archivo


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Función para ocultar/mostrar el Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div className="App">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />
      {/* Aquí añadimos el nuevo componente HeaderInfo */}
      <HeaderInfo />
      {/* Contenido principal que incluye el Sidebar y la página */}
      <div className="main-content">
        {/* Sidebar: Solo se muestra si sidebarOpen es true */}
        {sidebarOpen && <Sidebar />}
        
        {/* Contenido principal */}
        <div className="content">
           {/* Aquí va el horario */}
        <Horario />
        </div>
      </div>

      {/* Footer con el logo y el texto */}
      <footer className="footer">
      <div className="logo-placeholder">
        <img src={logo} alt="Logo U" className="logoU" />
      </div>
        <div className="footer-text">
          Institución Universitaria Colegio Mayor del Cauca
          <p>Versión 3.4.0 - © 2024</p>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
