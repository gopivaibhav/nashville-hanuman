import React from "react";

import g1 from "../../../public/g01.png";
import g2 from "../../../public/g02.png";
import g3 from "../../../public/g03.png";
import g4 from "../../../public/g04.png";
import g5 from "../../../public/g05.jpeg";
import g6 from "../../../public/g06.jpeg";
import g7 from "../../../public/g07.png";
import g8 from "../../../public/g08.png";
import g9 from "../../../public/g09.png";
import g10 from "../../../public/g010.png";
import g11 from "../../../public/g011.png";
import g12 from "../../../public/g012.png";

const Gurus: React.FC = () => {
  const gurus = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

  return (
    <div className="pt-24 pb-20 container mx-auto px-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-[#ff9933] mb-14">
        Our Gurus
      </h1>

      {/* Circle Gallery - 3 per row with extra spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-items-center max-w-6xl mx-auto">
        {gurus.map((image, i) => (
          <div
            key={i}
            className="relative group flex flex-col items-center text-center"
          >
            {/* Circular Image */}
          <div className="w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full overflow-hidden border-[5px] border-[#ffcc80] shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-[#fffaf3] flex items-center justify-center">
  <img
    src={image}
    alt={`Guru ${i + 1}`}
    className="w-full h-full object-cover object-top rounded-full"
  />
</div>

            {/* Optional Glow on Hover */}
            <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gurus;
