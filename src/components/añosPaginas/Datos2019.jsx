import React from 'react';
import Frutales2019 from './Dato2019/Frutales2019.jsx';
import Hortalizas2019 from './Dato2019/Hortalizas2019.jsx';
import VID2019 from './Dato2019/VID2019.jsx';
import MapaPrincipal2019 from './Dato2019/MapaPrincipal2019';
import "./animacion.css";

const Datos2019 = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-0">
      <div className="col-span-2 row-span-6 flex justify-center items-center pt-14 animate-fade-in-left">
        <MapaPrincipal2019 />
      </div>


      <div className="col-span-3 row-span-6 pt-16 p-8">
        <div className="text-left font-bold text-2xl mb-4 text-white">
          Conclusion de los datos 2019
        </div>
        <div className="text-justify">
          <ul className="list-disc pl-5 text-white">
            <li>En términos de superficie de cultivo, el cultivo más afectado fue la vid, con un total de 10,705.2 hectáreas afectadas por el granizo.</li>
            <li>Dentro de la vid, los departamentos más afectados fueron Tunuyán y Tupungato.</li>
            <li>En cuanto a frutales, los departamentos más afectados fueron General Alvear, San Rafael, y Tupungato.</li>
            <li>En hortalizas, los departamentos más afectados fueron Lavalle, General Alvear y Tupungato.</li>
            <li>A pesar de los daños, la superficie total afectada en la provincia fue de 15,553.4 hectáreas, lo que representa solo el 1.78% de la superficie total de cultivo.</li>
            <li>En general, la campaña agrícola fue exitosa, ya que la superficie afectada por el granizo fue relativamente baja en comparación con la superficie total de cultivo en la provincia.</li>
          </ul>
        </div>
      </div>

      <div className="col-span-2 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-left">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <Frutales2019 />
      </div>

      <div className="col-span-1 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-down">
        <div className="text-center font-bold text-2xl mb-4 text-white">
          Mapas por cultivo
        </div>
        <Hortalizas2019 />
      </div>

      <div className="col-span-2 row-span-2 flex flex-col justify-center items-center relative animate-fade-in-right">
        <div className="text-center font-bold text-2xl mb-4 min-h-8">
          &nbsp;
        </div>
        <VID2019 />
      </div>
    </div>
  );
};

export default Datos2019;

