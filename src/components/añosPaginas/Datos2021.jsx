import React from 'react';
import Frutales2021 from './Dato2021/Frutales2021.jsx';
import Hortalizas2021 from './Dato2021/Hortalizas2021.jsx';
import VID2021 from './Dato2021/VID2021.jsx';
import MapaPrincipal2021 from './Dato2021/MapaPrincipal2021';

const Datos2021 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-screen">
      <div className="col-span-1 bg-white-300 p-4">
        <m />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <MapaPrincipal2021 />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <m />
      </div>

      <div className="col-span-1 bg-white-300 p-4">
        <Frutales2021 />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <Hortalizas2021 />
      </div>
      <div className="col-span-1 bg-white-300 p-4">
        <VID2021 />
      </div>
    </div>
  );
};

export default Datos2021;
