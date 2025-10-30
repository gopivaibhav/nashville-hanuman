import React from "react";

import g1 from "../../../public/g1.png";
import g2 from "../../../public/g2.png";
import g3 from "../../../public/g3.png";
import g4 from "../../../public/g4.png";
import g5 from "../../../public/g5.png";
import g6 from "../../../public/g6.png";
import g7 from "../../../public/g7.png";
import g8 from "../../../public/g8.png";
import g9 from "../../../public/g9.png";
import g10 from "../../../public/g10.png";
import g11 from "../../../public/g11.png";
import g12 from "../../../public/g12.png";

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
            <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden border-[5px] border-[#ffcc80] shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <img
                src={image}
                alt={`Guru ${i + 1}`}
                className="w-full h-full object-cover rounded-full"
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
