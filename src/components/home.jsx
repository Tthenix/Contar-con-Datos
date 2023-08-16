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
          <p className="text-sm md:text-base text-shadow">Esta es una página que pretende mostrar datos sobre el daño de los granizos en las distintas localidades de la ciudad de Mendoza en un lapso de 5 años.</p>
        </div>
      </div>

      <div className="text-center mt-4 mx-11">
        <p className="text-lg text-white">Un mapa interactivo de Mendoza que detalla los daños sufridos en el sector agrícola desde el año 2017 hasta el 2021. Mediante esta herramienta, podrás explorar visualmente las áreas afectadas y conocer los tipos de cultivos perjudicados, obteniendo una visión completa de los desafíos a los que se enfrentó la agricultura en esa región. Este recurso ofrece una comprensión más profunda de los impactos climáticos y otros factores que contribuyeron a las pérdidas agrícolas.</p>
      </div>

      <div className="flex justify-center items-center pt-4">
        <LineaDeTiempo />
      </div>
    </div>
  )
}

export default home;
