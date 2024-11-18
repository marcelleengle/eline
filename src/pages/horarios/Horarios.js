import './horarios.css';
import React from "react";



function Horarios() {
  return (
      <div>
        <table>
          <tr>
            <td className='marked'>Concentração (Realengo): </td>
            <td className='info'>14:00h</td>
          </tr>
          <tr>
            <td className='marked'>Saída de casa (Realengo): </td>
            <td className='info'>14:30h</td>
          </tr>
          <tr>
            <td className='marked'>Previsão de chegada: </td>
            <td className='info'>Entre 16:00 e 16:30h</td>
          </tr>
          <tr>
            <td className='marked'>Distância: </td>
            <td className='info'>Aproximadamente 72km</td>
          </tr>
        </table>
      </div>
  );
}

export default Horarios;
