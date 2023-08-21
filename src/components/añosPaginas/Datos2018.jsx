import React from 'react';
import Frutales2018 from './Dato2018/Frutales2018.jsx';
import Hortalizas2018 from './Dato2018/Hortalizas2018.jsx';
import VID2018 from './Dato2018/VID2018.jsx';
import MapaPrincipal2018 from './Dato2018/MapaPrincipal2018';
import "./animacion.css";

const Datos2018 = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-0">
      <div className="col-span-2 row-span-3 flex justify-center items-center animate-fade-in-left">
        <MapaPrincipal2018 />
      </div>


      <div className="col-span-3 md:col-span-2 row-span-3 pt-16 p-8">
        <div className="text-left font-bold text-2xl mb-4 text-white">
          Conclusion de los datos 2018
        </div>
        <div className="text-justify">
          <ul className="list-disc pl-5 text-white">
            <li>El cultivo más afectado por el granizo fue la vid, con un total de 17,144.9 hectáreas afectadas en toda la provincia.</li>
            <li>Dentro de la vid, los departamentos más afectados fueron General Alvear, Lavalle y Junín.</li>
            <li>En cuanto a frutales, los departamentos más afectados fueron San Rafael, General Alvear y Rivadavia.</li>
            <li>En hortalizas, los departamentos más afectados fueron Lavalle, Maipu y San Martin.</li>
            <li>A pesar de los daños, la superficie total afectada en la provincia fue de 27,888.5 hectáreas, lo que representa solo el 3.2% de la superficie total de cultivo.</li>
            <li>En general, la campaña agrícola fue exitosa, ya que la superficie afectada por el granizo fue relativamente baja en comparación con la superficie total de cultivo en la provincia.</li>
          </ul>
        </div>
      </div>

      <div className="col-span-2 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-left">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <Frutales2018 />
      </div>

      <div className="col-span-1 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-down">
        <div className="text-center font-bold text-2xl mb-4 text-white">
          Mapas por cultivo
        </div>
        <Hortalizas2018 />
      </div>

      <div className="col-span-2 row-span-2 flex flex-col justify-center items-center relative animate-fade-in-right">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <VID2018 />
      </div>
    </div>
  );
};

export default Datos2018;

