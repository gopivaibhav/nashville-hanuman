import React from "react";

const Gurus: React.FC = () => {
  const gurus = [
    { name: "Guru Shivram Maharaj Dixit", image: "/images/gurus/guru1.jpg" },
    { name: "Guru Ganesh Maharaj Dixit", image: "/images/gurus/guru2.jpg" },
  ];

  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-[#7b1113] mb-8">
        Our Gurus
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {gurus.map((guru, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 text-center border border-yellow-100"
          >
            <img
              src={guru.image}
              alt={guru.name}
              className="w-40 h-40 object-cover mx-auto rounded-full mb-3"
            />
            <h2 className="text-lg font-semibold text-[#7b1113]">
              {guru.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gurus;
