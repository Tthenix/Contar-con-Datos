import React from 'react';
import Frutales2020 from './Dato2020/Frutales2020.jsx';
import Hortalizas2020 from './Dato2020/Hortalizas2020.jsx';
import VID2020 from './Dato2020/VID2020.jsx';
import MapaPrincipal2020 from './Dato2020/MapaPrincipal2020';

const Datos2020 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-screen">
      <div className="col-span-1 bg-white-300 p-4">
        <m />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <MapaPrincipal2020 />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <m />
      </div>

      <div className="col-span-1 bg-white-300 p-4">
        <Frutales2020 />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <Hortalizas2020 />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <VID2020 />
      </div>
    </div>
  );
};

export default Datos2020;

