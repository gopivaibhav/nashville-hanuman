import React from "react";
import { Building2, Users, HeartHandshake, Baby, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const halls = [
  {
    name: "Sita Ram Hall – Celebrating Memories",
    image: "/images/halls/sita-ram-hall.jpg",
    description: `Sita Ram Hall is a warm and welcoming space for community gatherings, celebrations, and cultural programs.
It serves as a hub for spiritual, social, and educational activities — nurturing fellowship and unity.`,
    features: [
      "Spiritual Gatherings & Pujas",
      "Cultural Events & Festivals",
      "Educational Programs & Youth Classes",
      "Charity Events & Health Camps",
    ],
    icon: <Building2 className="text-[#7b1113]" />,
  },
  {
    name: "Hanuman Hall – Celebrating Motherhood",
    image: "/images/halls/hanuman-hall.jpg",
    description: `Hanuman Hall honors the sacred journey of motherhood.
From baby showers and godh-bharai ceremonies to intimate family functions, it provides a serene setting filled with love and joy.`,
    features: [
      "Godh Bharai / Seemantham Ceremonies",
      "Baby Showers & Family Gatherings",
      "Community Women’s Programs",
      "Dedicated Space for Mothers & Children",
    ],
    icon: <Baby className="text-[#7b1113]" />,
  },
];

const Halls: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <motion.h1
        className="text-3xl font-bold text-center text-[#7b1113] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Community Halls
      </motion.h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        The Nashville Hanuman Temple provides modern, sacred halls for cultural,
        spiritual, and community events — designed to strengthen togetherness
        and preserve our rich heritage.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {halls.map((hall, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-yellow-100"
          >
            <img
              src={hall.image}
              alt={hall.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                {hall.icon}
                <h2 className="ml-2 text-2xl font-semibold text-[#7b1113]">
                  {hall.name}
                </h2>
              </div>
              <p className="text-gray-700 mb-4">{hall.description}</p>
              <ul className="space-y-2">
                {hall.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Sparkles size={16} className="mr-2 text-yellow-600" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-[#fdf5e6] p-8 rounded-xl shadow-inner text-center">
        <Users className="inline-block text-[#7b1113]" size={24} />
        <h2 className="text-xl font-semibold text-[#7b1113] mt-2">
          Book Our Halls
        </h2>
        <p className="text-gray-700 mt-2">
          For reservations or event details, please contact the temple office
          or email 
          <a
            href="mailto:events@nashvillehanuman.org"
            className="text-[#7b1113] font-medium"
          >
            events@nashvillehanuman.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default Halls;
