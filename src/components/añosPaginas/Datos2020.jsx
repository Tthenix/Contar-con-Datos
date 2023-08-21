import React from 'react';
import Frutales2020 from './Dato2020/Frutales2020.jsx';
import Hortalizas2020 from './Dato2020/Hortalizas2020.jsx';
import VID2020 from './Dato2020/VID2020.jsx';
import MapaPrincipal2020 from './Dato2020/MapaPrincipal2020';
import "./animacion.css";

const Datos2020 = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-0">
      <div className="col-span-2 row-span-3 flex justify-center items-center pt-14 animate-fade-in-left">
        <MapaPrincipal2020 />
      </div>


      <div className="col-span-3 md:col-span-2 row-span-3 pt-16 p-8">
        <div className="text-left font-bold text-2xl mb-4 text-white">
          Conclusion de los datos 2020
        </div>
        <div className="text-justify">
          <ul className="list-disc pl-5 text-white">
            <li>El cultivo más afectado por el granizo fue la vid, con un total de 8,696.1 hectáreas afectadas en toda la provincia.</li>
            <li>Dentro de la vid, los departamentos más afectados fueron San Rafael, Maipú y Tupungato.</li>
            <li>En cuanto a frutales, los departamentos más afectados fueron San Rafael, Tunuyán y General Alvear.</li>
            <li>En hortalizas, los departamentos más afectados fueron Lavalle, Malargue y Maipú.</li>
            <li>A pesar de los daños, la superficie total afectada en la provincia fue de 15,879.2 hectáreas, lo que representa solo el 1.8% de la superficie total de cultivo.</li>
            <li>En general, la campaña agrícola fue exitosa, ya que la superficie afectada por el granizo fue relativamente baja en comparación con la superficie total de cultivo en la provincia.</li>
          </ul>
        </div>
      </div>

      <div className="col-span-2 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-left">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <Frutales2020 />
      </div>

      <div className="col-span-1 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-down">
        <div className="text-center font-bold text-2xl mb-4 text-white">
          Mapas por cultivo
        </div>
        <Hortalizas2020 />
      </div>

      <div className="col-span-2 row-span-2 flex flex-col justify-center items-center relative ">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <VID2020 />
      </div>
    </div>
  );
};

export default Datos2020;

