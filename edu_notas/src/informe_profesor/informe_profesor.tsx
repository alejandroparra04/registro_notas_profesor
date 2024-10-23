import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import HeaderInfo_informe from '../components/HeaderInfo_informe';
import Footer from '../components/Footer';

interface InformeProfesor {
    codigo: string;
    nombre: string;
    nota1: number;
    nota2: number;
    nota3: number;
    final: number;
    faltas: number;
    habilitacion: number;
  }
  
  const TablaNotas: React.FC = () => {
    const [notas, setNotas] = useState<InformeProfesor[]>([
        { codigo: "99552211", nombre: "Juan Camilo Pedraza", nota1: 3.1, nota2: 0.0, nota3: 0.0, final: 3.1, faltas: 0.9, habilitacion: 2 },
        { codigo: "99662211", nombre: "Carlos Alexander Vidal Realpe", nota1: 3.0, nota2: 0.0, nota3: 0.0, final: 3.0, faltas: 2.0, habilitacion: 3 },
        { codigo: "99772211", nombre: "Manuel Salazar", nota1: 3.5, nota2: 2.5, nota3: 0.0, final: 2.5, faltas: 4, habilitacion: 0 },
        { codigo: "99882211", nombre: "Javier Gómez", nota1: 4.1, nota2: 2.9, nota3: 0.0, final: 3.0, faltas: 3, habilitacion: 0 },
        { codigo: "99992211", nombre: "Natalia Jiménez", nota1: 3.7, nota2: 3.3, nota3: 0.0, final: 3.3, faltas: 1, habilitacion: 1 },
        { codigo: "99002211", nombre: "Dayer Majin", nota1: 5.0, nota2: 5.0, nota3: 0.0, final: 5.0, faltas: 10, habilitacion: 5 }
      ]);
    
  
    const [editMode, setEditMode] = useState<boolean>(false);
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number,
      field: keyof Pick<InformeProfesor, 'nota1' | 'nota2' | 'nota3' | 'faltas'> // Solo estas claves son modificables
    ) => {
      const newNotas = [...notas];
      
      // Validamos que el valor sea un número antes de asignarlo
      const valor = parseFloat(e.target.value);
    
      if (!isNaN(valor)) {
        newNotas[index][field] = valor; // Aquí TypeScript ya sabe que 'field' es un campo numérico
      }
    
      // Recalcula la nota final como un promedio de las 3 notas de corte
      const { nota1, nota2, nota3 } = newNotas[index];
      newNotas[index].final = parseFloat(((nota1 + nota2 + nota3) / 3).toFixed(2));
    
      setNotas(newNotas);
    };
    const toggleSidebar = () => {
        // Lógica para mostrar/ocultar el sidebar
        console.log("Toggle sidebar");
      };

  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-[220px]">
        <Header toggleSidebar={toggleSidebar}/>
        <HeaderInfo_informe />

        {/* Tabla de Notas */}
        <div className="overflow-auto max-h-[calc(100vh-160px)] p-6">
          <h2 className="text-center text-2xl mb-4 font-bold">Notas de los estudiantes</h2>

          <table className="table-auto w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">N°</th>
                <th className="border border-gray-300 p-2">Código</th>
                <th className="border border-gray-300 p-2">Nombres y Apellidos</th>
                <th className="border border-gray-300 p-2">Corte 1</th>
                <th className="border border-gray-300 p-2">Corte 2</th>
                <th className="border border-gray-300 p-2">Corte 3</th>
                <th className="border border-gray-300 p-2">Nota Final</th>
                <th className="border border-gray-300 p-2">Habilitación</th>
                <th className="border border-gray-300 p-2">Faltas</th>
              </tr>
            </thead>
            <tbody>
              {notas.map((estudiante, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{estudiante.codigo}</td>
                  <td className="border border-gray-300 p-2">{estudiante.nombre}</td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.nota1}
                      onChange={(e) => handleInputChange(e, index, "nota1")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.nota2}
                      onChange={(e) => handleInputChange(e, index, "nota2")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.nota3}
                      onChange={(e) => handleInputChange(e, index, "nota3")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{estudiante.final}</td>
                  <td className="border border-gray-300 p-2">{estudiante.habilitacion}</td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={estudiante.faltas}
                      onChange={(e) => handleInputChange(e, index, "faltas")}
                      className="text-center w-full bg-transparent"
                      disabled={!editMode}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default InformeProfesor;
