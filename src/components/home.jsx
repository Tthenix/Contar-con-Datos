import React from "react";
import foto1 from "../img/foto2.jpg"
import LineaDeTiempo from "./TimeLine";
import "./principal.css";

const home = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={foto1}
          alt="nature image"
        />
        <div class="absolute-center">
          <h1 class="titulo">E-PÓSTERS</h1>
          <h2 class="subtitulo">CONGRESO AACM 2023</h2>
        </div>
      </div>

      <div className="text-center mt-4 mx-11">
        <p className="text-lg text-white"></p>
      </div>

      <div className="flex justify-center items-center pt-4">
        <LineaDeTiempo />
      </div>
    </div>
  )
}

export default home;
