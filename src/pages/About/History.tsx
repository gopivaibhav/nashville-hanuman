import React from "react";
import { ScrollText } from "lucide-react";
import { motion } from "framer-motion";

const History: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <motion.h1
        className="text-3xl font-bold text-center text-[#7b1113] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our History
      </motion.h1>

      <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
        <ScrollText className="text-[#7b1113] mb-4 mx-auto" size={32} />
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
