import React from 'react';
import logo from '../images/logo unimayor.png';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center gap-5 py-5 bg-gray-100">
      <div className="text-center">
        <img src={logo} alt="Logo U" className="w-36 h-auto mb-5" />
      </div>
      <div className="text-lg text-gray-700">
        Institución Universitaria Colegio Mayor del Cauca
        <p>Versión 3.4.0 - © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
