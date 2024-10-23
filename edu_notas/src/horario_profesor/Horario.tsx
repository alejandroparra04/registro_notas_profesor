import React from "react";
import Header from "../components/Header_horario";
import HeaderInfo from "../components/HeaderInfo_horario";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Horario: React.FC = () => {
    const toggleSidebar = () => {
      // Lógica para mostrar/ocultar el sidebar
      console.log("Toggle sidebar");
    };
  
  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar}/>
      <HeaderInfo />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-4">
          <section className="mt-5">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">HORA</th>
                  <th className="border border-gray-300 p-2">LUNES</th>
                  <th className="border border-gray-300 p-2">MARTES</th>
                  <th className="border border-gray-300 p-2">MIÉRCOLES</th>
                  <th className="border border-gray-300 p-2">JUEVES</th>
                  <th className="border border-gray-300 p-2">VIERNES</th>
                  <th className="border border-gray-300 p-2">SÁBADO</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí puedes iterar sobre los datos del horario */}
                <tr>
                  <td className="border border-gray-300 p-2">7:00 AM</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">8:00 AM</td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">9:00 AM</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2 bg-blue-100">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Horario;
