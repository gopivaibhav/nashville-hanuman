import React from "react";
import { Utensils, Coffee, Heart, Flame } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../../../public/Jai_Jai_Siya_Ram.jpg";
import img2 from "../../../public/hanuman1.jpg";

const menuItems = [
  {
    name: "Dosa & Idly Varieties",
    description:
      "Crisp dosas, soft idlis, and traditional chutneys made fresh daily.",
  },
  {
    name: "Vada & Punugulu",
    description: "Golden, crunchy favorites perfect for prasad or snack.",
  },
  {
    name: "Rice Delights",
    description:
      "Tamarind Rice, Yogurt Rice, Tomato Rice — authentic South Indian comfort food.",
  },
  {
    name: "Snacks & Sweets",
    description:
      "Samosa, Mirchi Bajji, Ladoo, and more – made with love and devotion.",
  },
  {
    name: "Drinks & Juices",
    description: "Refreshing fresh-made beverages for all ages.",
  },
];

const RamKiBandi: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#fff7e0] via-[#fff3cc] to-[#ffedb3]">
      {/* Hero Images Section */}
      {/* Hero Images Section */}
<div className="flex flex-row flex-nowrap items-center justify-center gap-3 mb-12 overflow-x-auto">
  {/* Left Image */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="min-w-[160px] sm:min-w-[200px] md:min-w-[260px] flex justify-center"
  >
    <div className="bg-[#ffedd5] rounded-2xl shadow-xl border border-[#facc15]/50 flex items-center justify-center p-3">
      <img
        src={img1}
        alt="Lord Rama"
        className="rounded-xl object-contain w-full h-[220px] sm:h-[320px]"
      />
    </div>
  </motion.div>

  {/* Right Image */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="min-w-[160px] sm:min-w-[200px] md:min-w-[260px] flex justify-center"
  >
    <div className="bg-[#ffedd5] rounded-2xl shadow-xl border border-[#facc15]/50 flex items-center justify-center p-3">
      <img
        src={img2}
        alt="Lord Hanuman"
        className="rounded-xl object-contain w-full h-[220px] sm:h-[320px]"
      />
    </div>
  </motion.div>
</div>

      {/* Text & Menu Section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Ram Ki Bandi — Temple Cafeteria
      </motion.h1>

      <p className="text-center text-[#5a1d1d] max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
        <strong className="text-[#f97316]">Ram Ki Bandi</strong> is a humble
        initiative to serve freshly prepared, authentic Indian food to devotees
        and visitors. Managed by volunteers, all proceeds support the temple’s
        service and community projects.
      </p>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(249,115,22,0.35)",
            }}
            className="bg-[#fffaf3] shadow-md rounded-xl p-6 border border-[#facc15]/50 transition-all duration-500"
          >
            <Flame className="text-[#f97316] mb-3" size={26} />
            <h3 className="text-lg font-semibold bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent mb-1">
              {item.name}
            </h3>
            <p className="text-[#5a1d1d] text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-12 bg-gradient-to-r from-[#fff0c2] to-[#ffec99] p-8 rounded-2xl shadow-inner text-center border border-[#facc15]/50">
        <Heart className="inline-block text-[#f97316]" size={32} />
        <h2 className="text-2xl font-semibold mt-3 bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent">
          Serving with Love and Devotion
        </h2>
        <p className="text-[#5a1d1d] mt-3 max-w-2xl mx-auto leading-relaxed">
          Operated entirely by dedicated volunteers of the{" "}
          <strong className="text-[#7b1113]">Nashville Hanuman Temple</strong>.
          Every meal is prepared with care, devotion, and quality — nourishing
          both body and soul.
        </p>
        <div className="flex justify-center space-x-4 mt-5">
          <Utensils className="text-[#f97316]" size={24} />
          <Coffee className="text-[#f97316]" size={24} />
        </div>
        <p className="mt-4 text-sm text-[#7b1113] font-medium">
          🕒 Open on Weekends and Festival Days · 10:30 AM – 7:30 PM
        </p>
      </div>
    </div>
  );
};

export default RamKiBandi;
