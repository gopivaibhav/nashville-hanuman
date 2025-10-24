import React from "react";
import { Book, Heart, Users, Feather } from "lucide-react";
import { motion } from "framer-motion";

const curriculum = [
  {
    title: "Shloka & Stotra",
    description:
      "Children learn traditional Sanskrit shlokas and devotional hymns, helping them connect with our ancient scriptures.",
    icon: <Feather className="text-[#f97316]" />,
  },
  {
    title: "Yoga for Concentration",
    description:
      "Simple asanas and breathing exercises to improve focus, balance, and inner peace.",
    icon: <Heart className="text-[#f97316]" />,
  },
  {
    title: "Understanding Dharma through Stories",
    description:
      "Moral stories from the Ramayana, Mahabharata, and Puranas that teach values of compassion, truth, and service.",
    icon: <Book className="text-[#f97316]" />,
  },
  {
    title: "Seva - Community Service Projects",
    description:
      "Students participate in activities like food drives, cleanliness campaigns, and cultural volunteering.",
    icon: <Users className="text-[#f97316]" />,
  },
];

const HVS: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#fff7e0] via-[#fff3cc] to-[#ffedb3]">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hanuman Vedic School (HVS)
      </motion.h1>

      <p className="text-center text-[#5a1d1d] max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
        The Hanuman Vedic School (HVS) is dedicated to teaching children Hindu
        values, Vedic culture, and Sanatana Dharma through engaging lessons,
        music, arts, and service activities. Classes are led by volunteer
        teachers who nurture curiosity and spiritual growth.
      </p>

      {/* Curriculum Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {curriculum.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(249,115,22,0.35)",
            }}
            className="bg-[#fffaf3] shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-[#facc15]/50 transition-all duration-500"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-3 mb-2 bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent">
              {item.title}
            </h3>
            <p className="text-[#5a1d1d] text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bhagavad Gita Section */}
      <div className="bg-gradient-to-r from-[#fff0c2] to-[#ffec99] p-8 rounded-xl text-center shadow-inner border border-[#facc15]/50">
        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent">
          Bhagavad Gita Classes
        </h2>
        <p className="text-[#5a1d1d] max-w-2xl mx-auto leading-relaxed">
          The Bhagavad Gita classes offer wisdom for modern life through weekly
          group discussions. Participants learn the essence of{" "}
          <strong className="text-[#7b1113]">Jnana (Knowledge)</strong>,{" "}
          <strong className="text-[#7b1113]">Bhakti (Devotion)</strong>,{" "}
          <strong className="text-[#7b1113]">Karma (Action)</strong>, and{" "}
          <strong className="text-[#7b1113]">Dhyana (Meditation)</strong> — applying
          them in everyday living.
        </p>
        <p className="mt-4 text-sm text-[#7b1113] font-medium">
          🕒 Classes are held every Sunday at 5:00 PM. All age groups welcome.
        </p>
      </div>
    </div>
  );
};

export default HVS;
