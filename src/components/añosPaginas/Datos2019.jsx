import React from 'react';
import Frutales2019 from './Dato2019/Frutales2019.jsx';
import Hortalizas2019 from './Dato2019/Hortalizas2019.jsx';
import VID2019 from './Dato2019/VID2019.jsx';
import MapaPrincipal2019 from './Dato2019/MapaPrincipal2019';

const Datos2019 = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-screen">
      {/* Mapa centrado verticalmente */}
      <div className="col-span-full bg-gray-300 flex justify-center items-center">
        <MapaPrincipal2019 />
      </div>

      <div className="col-span-1 bg-blue-300 p-4">
        <Frutales2019 />
      </div>
      <div className="col-span-1 bg-green-300 p-4">
        <Hortalizas2019 />
      </div>
      <div className="col-span-1 bg-red-300 p-4">
        <VID2019 />
      </div>

    </div>

  );
};

export default Datos2019;
