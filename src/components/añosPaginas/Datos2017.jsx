import React from 'react';
import Frutales2017 from './Dato2017/Frutales2017.jsx';
import Hortalizas2017 from './Dato2017/Hortalizas2017.jsx';
import VID2017 from './Dato2017/VID2017.jsx';
import MapaPrincipal2017 from './Dato2017/MapaPrincipal2017';

const Datos2017 = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-screen">
      {/* Mapa centrado verticalmente */}
      <MapaPrincipal2017 />
      <div className="col-span-full bg-gray-300 flex justify-center items-center">

      </div>

      <div className="col-span-1 bg-blue-300 p-4">
        <Frutales2017 />
      </div>
      <div className="col-span-1 bg-green-300 p-4">
        <Hortalizas2017 />
      </div>
      <div className="col-span-1 bg-red-300 p-4">
        <VID2017 />
      </div>

    </div>

  );
};

export default Datos2017;