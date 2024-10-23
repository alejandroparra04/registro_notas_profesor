import React from "react";
import './Horario.css';

function Horario() {
  return (
    <div className="container">
     {/* <aside className="sidebar">
        {/*<div className="logo">
          <h2>ESTUDIANTE CAMPUS</h2>
        </div>*/}
        {/*<ul>
          <li>Calificaciones</li>
          <li>Horario</li>
          <li>Misión y visión</li>
          <li>Acerca de</li>
          <li>Cerrar Sesión</li>
        </ul>*/}
      {/*</aside>*/}

      <main className="main-content">
       {/* <header className="header">
         {/* <div className="student-info">
            <h1>Horario</h1>
            <p>Itinerario Semanal Campus Unimayor</p>
          </div>*/}
          {/*<div className="student-name">
            <p>Juan Jose Concha Trujillo</p>
          </div>*/}
        {/*</header>*/}

        <section className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>HORA</th>
                <th>LUNES</th>
                <th>MARTES</th>
                <th>MIÉRCOLES</th>
                <th>JUEVES</th>
                <th>VIERNES</th>
                <th>SÁBADO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:00 AM</td>
                <td></td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
              </tr>
              <tr>
                <td>8:00 AM</td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                <td></td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                <td></td>
                <td></td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
                <td></td>
                <td className="class">Materia: Base de datos<br />Sede: Casa Obando<br />Salón: 103</td>
              </tr>
            </tbody>
          </table>
        </section>

      </main>
    </div>
  );
}

export default Horario;