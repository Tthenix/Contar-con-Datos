import React from "react";
import foto1 from "../img/0.jpg"

const A0 = () => {
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

export default A0;
