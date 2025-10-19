import React from "react";
import { Book, Heart, Users, Feather } from "lucide-react";
import { motion } from "framer-motion";

const curriculum = [
  {
    title: "Shloka & Stotra",
    description:
      "Children learn traditional Sanskrit shlokas and devotional hymns, helping them connect with our ancient scriptures.",
    icon: <Feather className="text-[#7b1113]" />,
  },
  {
    title: "Yoga for Concentration",
    description:
      "Simple asanas and breathing exercises to improve focus, balance, and inner peace.",
    icon: <Heart className="text-[#7b1113]" />,
  },
  {
    title: "Understanding Dharma through Stories",
    description:
      "Moral stories from the Ramayana, Mahabharata, and Puranas that teach values of compassion, truth, and service.",
    icon: <Book className="text-[#7b1113]" />,
  },
  {
    title: "Seva - Community Service Projects",
    description:
      "Students participate in activities like food drives, cleanliness campaigns, and cultural volunteering.",
    icon: <Users className="text-[#7b1113]" />,
  },
];

const HVS: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <motion.h1
        className="text-3xl font-bold text-center text-[#7b1113] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hanuman Vedic School (HVS)
      </motion.h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        The Hanuman Vedic School (HVS) is dedicated to teaching children Hindu
        values, Vedic culture, and Sanatana Dharma through engaging lessons,
        music, arts, and service activities. Classes are led by volunteer
        teachers who nurture curiosity and spiritual growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {curriculum.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-yellow-100"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-[#7b1113] mt-3 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#fdf5e6] p-8 rounded-xl text-center shadow-inner">
        <h2 className="text-2xl font-bold text-[#7b1113] mb-3">
          Bhagavad Gita Classes
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          The Bhagavad Gita classes offer wisdom for modern life through weekly
          group discussions. Participants learn the essence of{" "}
          <strong>Jnana (Knowledge)</strong>, <strong>Bhakti (Devotion)</strong>
          , <strong>Karma (Action)</strong>, and{" "}
          <strong>Dhyana (Meditation)</strong> — applying them in everyday
          living.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Classes are held every Sunday at 5:00 PM. All age groups welcome.
        </p>
      </div>
    </div>
  );
};

export default HVS;
