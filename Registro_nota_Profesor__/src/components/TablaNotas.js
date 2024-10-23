import React, { useState } from 'react';
import './TablaNotas.css';

const TablaNotas = () => {
  const [notas, setNotas] = useState([
    { nombre: "Juan Camilo Pedraza", nota1: 3.1, nota2: 0.0, nota3: 0.0, final: 3.1, faltas: 0.9, habilitacion: 2 },
    { nombre: "Carlos Alexander Vidal Realpe", nota1: 3.0, nota2: 0.0, nota3: 0.0, final: 3.0, faltas: 2.0, habilitacion: 3 },
    { nombre: "Manuel Salazar", nota1: 3.5, nota2: 2.5, nota3: 0.0, final: 2.5, faltas: 4, habilitacion: 0 },
    { nombre: "Javier Gómez", nota1: 4.1, nota2: 2.9, nota3: 0.0, final: 3.0, faltas: 3, habilitacion: 0 },
    { nombre: "Natalia Jiménez", nota1: 3.7, nota2: 3.3, nota3: 0.0, final: 3.3, faltas: 1, habilitacion: 1 },
    { nombre: "Dayer Majin", nota1: 5.0, nota2: 5.0, nota3: 0.0, final: 5.0, faltas: 10, habilitacion: 5 }
  ]);

  const [editMode, setEditMode] = useState(false);

  // Función que maneja los cambios en las notas y recalcula la nota final
  const handleInputChange = (e, index, field) => {
    const newNotas = [...notas];
    newNotas[index][field] = parseFloat(e.target.value);

    // Recalcula la nota final como un promedio de las 3 notas de corte
    const { nota1, nota2, nota3 } = newNotas[index];
    newNotas[index].final = ((nota1 + nota2 + nota3) / 3).toFixed(2); // Redondea a 2 decimales

    setNotas(newNotas);
  };

  const actualizarNotas = () => {
    setEditMode(true); // Habilita la edición
  };

  const guardarNotas = () => {
    setEditMode(false); // Deshabilita la edición
    console.log("Notas guardadas:", notas);
    alert("Las notas han sido guardadas");
  };

  return (
    <div className="tabla-notas-container">
      <h2 className="titulo-tabla">Notas</h2>

      <table className="tabla-notas">
        <thead>
          <tr>
            <th></th> {/* Columna vacía para los números de fila */}
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
            <th>G</th>
          </tr>
          <tr>
            <th>N°</th>
            <th>Nombres y apellidos</th>
            <th>Nota 1° Corte</th>
            <th>Nota 2° Corte</th>
            <th>Nota 3° Corte</th>
            <th>Nota Final</th>
            <th>Faltas</th>
            <th>Nota Habilitación</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((estudiante, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Número de fila */}
              <td>{estudiante.nombre}</td>
              <td>
                <input
                  type="number"
                  value={estudiante.nota1}
                  onChange={(e) => handleInputChange(e, index, "nota1")}
                  disabled={!editMode}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={estudiante.nota2}
                  onChange={(e) => handleInputChange(e, index, "nota2")}
                  disabled={!editMode}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={estudiante.nota3}
                  onChange={(e) => handleInputChange(e, index, "nota3")}
                  disabled={!editMode}
                />
              </td>
              <td>{estudiante.final}</td> {/* Nota final calculada */}
              <td>
                <input
                  type="number"
                  value={estudiante.faltas}
                  onChange={(e) => handleInputChange(e, index, "faltas")}
                  disabled={!editMode}
                />
              </td>
              <td>{estudiante.habilitacion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="botones-tabla">
        <button className="actualizar-btn" onClick={actualizarNotas} disabled={editMode}>
          Actualizar
        </button>
        <button className="guardar-btn" onClick={guardarNotas} disabled={!editMode}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default TablaNotas;


