import React from 'react';
import Frutales2018 from './Dato2018/Frutales2018.jsx';
import Hortalizas2018 from './Dato2018/Hortalizas2018.jsx';
import VID2018 from './Dato2018/VID2018.jsx';
import MapaPrincipal2018 from './Dato2018/MapaPrincipal2018';

const Datos2018 = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-screen">
      {/* Mapa centrado verticalmente */}
      <div className="col-span-full bg-gray-300 flex justify-center items-center">
        <MapaPrincipal2018 />
      </div>

      <div className="col-span-1 bg-blue-300 p-4">
        <Frutales2018 />
      </div>
      <div className="col-span-1 bg-green-300 p-4">
        <Hortalizas2018 />
      </div>
      <div className="col-span-1 bg-red-300 p-4">
        <VID2018/>
      </div>

    </div>

  );
};

export default Datos2018;
