// src/registro_notas_profesor/RegistroNotas.tsx
import React from 'react';
import Header from '../components/Header';
import HeaderInfo from '../components/HeaderInfo';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TablaNotas from './TablaNotas';

const RegistroNotas: React.FC = () => {
  return (
    <div className="registro-notas-layout">
      {/* Sidebar */}
      <Sidebar />

      <div className="main-content">
        {/* Header */}
        <Header toggleSidebar={() => {}} /> {/* Función de toggle si es necesario */}
        
        {/* HeaderInfo */}
        <HeaderInfo />

        {/* Tabla de Notas */}
        <TablaNotas />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default RegistroNotas;
