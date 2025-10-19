import React from "react";
import { Utensils, Coffee, Heart, Flame } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dosa & Idly Varieties", description: "Crisp dosas, soft idlis, and traditional chutneys made fresh daily." },
  { name: "Vada & Punugulu", description: "Golden, crunchy favorites perfect for prasad or snack." },
  { name: "Rice Delights", description: "Tamarind Rice, Yogurt Rice, Tomato Rice — authentic South Indian comfort food." },
  { name: "Snacks & Sweets", description: "Samosa, Mirchi Bajji, Ladoo, and more – made with love and devotion." },
  { name: "Drinks & Juices", description: "Refreshing fresh-made beverages for all ages." },
];

const RamKiBandi: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <motion.h1
        className="text-3xl font-bold text-center text-[#7b1113] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Ram Ki Bandi — Temple Cafeteria
      </motion.h1>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        Ram Ki Bandi is a humble initiative to serve freshly prepared, authentic Indian food to devotees and visitors.
        Managed by volunteers, all proceeds support the temple’s service and community projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-md rounded-xl p-6 border border-yellow-100"
          >
            <Flame className="text-[#7b1113] mb-3" size={24} />
            <h3 className="text-lg font-semibold text-[#7b1113]">
              {item.name}
            </h3>
            <p className="text-gray-700 text-sm mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-[#fdf5e6] p-8 rounded-xl shadow-inner text-center">
        <Heart className="inline-block text-[#7b1113]" size={28} />
        <h2 className="text-xl font-semibold text-[#7b1113] mt-2">
          Serving with Love and Devotion
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Operated entirely by dedicated volunteers of the Nashville Hanuman Temple.
          Every meal is prepared with care, devotion, and quality — nourishing both body and soul.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Utensils className="text-yellow-600" />
          <Coffee className="text-yellow-600" />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Open on Weekends and Festival Days · 10:30 AM – 7:30 PM
        </p>
      </div>
    </div>
  );
};

export default RamKiBandi;
