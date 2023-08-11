import React from "react";
import foto1 from "../img/granizodark.jpg"
import LineaDeTiempo from "./TimeLine";

const home = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={foto1}
          alt="nature image"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-shadow">Contar con Datos</h2>
          <p className="text-sm md:text-base text-shadow">  Esta es una pagina que pretende mostrar datos sobre el daño de los granizos en las distintas localidades de la ciudad de Mendoza en un lapso de 5 años. </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-0">
        <LineaDeTiempo />
      </div>

    </div>

  )
}
export default home