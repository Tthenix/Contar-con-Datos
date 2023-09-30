import React from "react";
import foto1 from "../img/60.jpg"

const A60 = () => {
    return (
      <div className="relative">
        <img
          className="rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          src={foto1}
          alt="nature image"
        />
      </div>
    );
};

export default A60;
