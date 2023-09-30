import React from "react";
import foto1 from "../img/58.jpg"
import foto2 from "../img/58-1.jpg"
import foto3 from "../img/58-2.jpg"

const A58 = () => {
    return (
      <div className="relative">
        <img
          className="rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={foto1}
          alt="nature image"
        />
        <img
          className="rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={foto2}
          alt="nature image"
        />
        <img
          className="rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={foto3}
          alt="nature image"
        />
      </div>
      
    );
};

export default A58;
