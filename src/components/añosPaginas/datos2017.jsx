import React from 'react';
import Frutales2017 from './Dato2017/Frutales2017.jsx';
import Hortalizas2017 from './Dato2017/Hortalizas2017.jsx';
import VID2017 from './Dato2017/VID2017.jsx';
import MapaPrincipal2017 from './Dato2017/MapaPrincipal2017.jsx';
import "./animacion.css";

const Datos2017 = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-0">
      <div className="col-span-2 row-span-3 flex justify-center items-center pt-14 animate-fade-in-left">
        <MapaPrincipal2017 />
      </div>


      <div className="col-span-3 md:col-span-2 row-span-3 pt-16 p-8">
        <div className="text-left font-bold text-2xl mb-4 text-white">
          Conclusion de los datos 2017
        </div>
        <div className="text-justify">
          <ul className="list-disc pl-5 text-white">
            <li>El cultivo más afectado por el granizo fue la vid, con un total de 6,006.31 hectáreas afectadas en toda la provincia.</li>
            <li>Dentro de la vid, los departamentos más afectados fueron General Alvear, San Rafael y Maipú.</li>
            <li>En cuanto a frutales, los departamentos más afectados fueron San Rafael, General Alvear y Tunuyán.</li>
            <li>En hortalizas, los departamentos más afectados fueron San Rafael, General Alvear y Maipú.</li>
            <li>A pesar de los daños, la superficie total afectada en la provincia fue de 9,624.69 hectáreas, lo que representa solo el 1.3% de la superficie total de cultivo.</li>
            <li>En general, la campaña agrícola fue exitosa, ya que la superficie afectada por el granizo fue relativamente baja en comparación con la superficie total de cultivo en la provincia.</li>
            <li>La pérdida de producción tanto en vid y frutales en el departamento de San Rafael fue más del 50% del territorio cultivado.</li>
          </ul>
        </div>
      </div>

      <div className="col-span-2 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-left">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <Frutales2017 />
      </div>

      <div className="col-span-1 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-down">
        <div className="text-center font-bold text-2xl mb-4 text-white">
          Mapas por cultivo
        </div>
        <Hortalizas2017 />
      </div>

      <div className="col-span-2 row-span-2 flex flex-col justify-center items-center relative ">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <VID2017 />
      </div>
    </div>
  );
};

export default Datos2017;
