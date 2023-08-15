import React from 'react';
import Frutales2020 from './Dato2020/Frutales2020.jsx';
import Hortalizas2020 from './Dato2020/Hortalizas2020.jsx';
import VID2020 from './Dato2020/VID2020.jsx';
import MapaPrincipal2020 from './Dato2020/MapaPrincipal2020';

const Datos2020 = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-screen">
      {/* Mapa centrado verticalmente */}
      <div className="col-span-full bg-gray-300 flex justify-center items-center">
        <MapaPrincipal2020 />
      </div>

      <div className="col-span-1 bg-blue-300 p-4">
        <Frutales2020 />
      </div>
      <div className="col-span-1 bg-green-300 p-4">
        <Hortalizas2020 />
      </div>
      <div className="col-span-1 bg-red-300 p-4">
        <VID2020 />
      </div>

    </div>

  );
};

export default Datos2020;
