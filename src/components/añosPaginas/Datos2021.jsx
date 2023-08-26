import React from "react";
import "./animacion.css";
import Frutales2021 from "./Dato2021/Frutales2021";
import Hortalizas2021 from "./Dato2021/Hortalizas2021";
import MapaPrincipal2021 from "./Dato2021/MapaPrincipal2021";
import VID2021 from "./Dato2021/VID2021";

const Datos2021 = () => {

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-0">
            <div className="col-span-2 row-span-3 flex justify-center items-center pt-14 animate-fade-in-left">
                <MapaPrincipal2021 />
            </div>


            <div className="col-span-3 md:col-span-2 row-span-3 pt-16 p-8">
                <div className="text-left font-bold text-2xl mb-4 text-white">
                    Conclusion de los datos 2021
                </div>
                <div className="text-justify">
                    <ul className="list-disc pl-5 text-white">
                        <li>El cultivo más afectado por el granizo fue la vid, con un total de 11,770.8 hectáreas afectadas en toda la provincia.</li>
                        <li>Dentro de la vid, los departamentos más afectados fueron San Martin, Santa Rosa y Rivadavia.</li>
                        <li>En cuanto a frutales, los departamentos más afectados fueron San Martin, Santa Rosa y San Rafael.</li>
                        <li>En hortalizas, los departamentos más afectados fueron Lavalle, San Martin y Tupungato.</li>
                        <li>A pesar de los daños, la superficie total afectada en la provincia fue de 14,524.7 hectáreas, lo que representa solo el 1.66% de la superficie total de cultivo.</li>
                        <li>La pérdida de producción en vid y hortalizas de los departamentos de Lavalle y San Martín fue más del 80% del territorio cultivado aproximadamente.</li>
                        <li>En general, la campaña agrícola fue exitosa, ya que la superficie afectada por el granizo fue relativamente baja en comparación con la superficie total de cultivo en la provincia.</li>
                    </ul>
                </div>
            </div>

            <div className="col-span-2 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-left">
                <div className="text-center font-bold text-2xl mb-4 min-h-8">
                    &nbsp;
                </div>
                <Frutales2021 />
            </div>

            <div className="col-span-1 row-span-2  flex flex-col justify-center items-center relative animate-fade-in-down">
                <div className="text-center font-bold text-2xl mb-4 text-white">
                    Mapas por cultivo
                </div>
                <Hortalizas2021 />
            </div>

            <div className="col-span-2 row-span-2 flex flex-col justify-center items-center relative ">
                <div className="text-center font-bold text-2xl mb-4 min-h-8">
                    &nbsp;
                </div>
                <VID2021 />
            </div>
        </div>
    )
}


export default Datos2021;
