import React from "react";
import { ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../../../public/history.jpeg";

const History: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <motion.h1
        className="text-3xl font-bold text-center text-[#ff9933] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our History
      </motion.h1>

      <div className="flex justify-center mb-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#ff9933] shadow-lg"
        >
          <img
            src={img1}
            alt="Temple History"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
      
        <p className="mb-6">
          The idea of building a Nashville Hanuman Temple was envisioned in 2021
          by our founder and community devotees. By 2025, that dream blossomed
          into the establishment of the <strong>Nashville Hanuman Non-Profit
          Organization</strong>.
        </p>
        <p className="mb-6">
          The temple aims to unite Hindus in America — diverse in customs, yet
          bound by the same spirit of <em>Sanatana Dharma</em>. It stands as a
          beacon of devotion, learning, and service for future generations.
        </p>
        <p>
          The temple continues to grow with the blessings of Hanuman and the
          collective seva of our community.
        </p>
      </div>
    </div>
  );
};

export default History;
