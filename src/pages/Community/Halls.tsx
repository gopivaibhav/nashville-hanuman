import React from "react";
import {
  Building2,
  Users,
  HeartHandshake,
  Baby,
  Sparkles,
  IndianRupee,
} from "lucide-react";
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
    type: "paid",
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
    type: "free",
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
        {halls.map((hall, index) => {
          const isFree = hall.type === "free";
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden border ${
                isFree
                  ? "bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] border-yellow-200 shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
                  : "bg-white border-[#f3d9c1] shadow-[0_4px_20px_rgba(123,17,19,0.15)]"
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full shadow ${
                  isFree
                    ? "bg-gradient-to-r from-[#facc15] to-[#f59e0b] text-[#5b2e00]"
                    : "bg-gradient-to-r from-[#7b1113] to-[#a33234] text-white"
                }`}
              >
                {isFree ? "Free Hall" : "Paid Hall"}
              </div>

              {/* Image */}
              <img
                src={hall.image}
                alt={hall.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {hall.icon}
                  <h2
                    className={`ml-2 text-2xl font-semibold ${
                      isFree ? "text-[#b45309]" : "text-[#7b1113]"
                    }`}
                  >
                    {hall.name}
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">{hall.description}</p>

                <ul className="space-y-2">
                  {hall.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Sparkles
                        size={16}
                        className={`mr-2 ${
                          isFree ? "text-yellow-600" : "text-[#7b1113]"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Pricing Info */}
                {!isFree && (
                  <div className="mt-4 flex items-center text-[#7b1113] font-medium">
                    <IndianRupee size={18} className="mr-1 text-[#7b1113]" />
                    Booking charges apply – contact temple office.
                  </div>
                )}
              </div>

              {/* Glow effect for Hanuman Hall */}
              {isFree && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-yellow-300 opacity-40"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(245,158,11,0)",
                      "0 0 30px rgba(245,158,11,0.5)",
                      "0 0 0px rgba(245,158,11,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer Section */}
      <div className="mt-12 bg-[#fdf5e6] p-8 rounded-xl shadow-inner text-center">
        <Users className="inline-block text-[#7b1113]" size={24} />
        <h2 className="text-xl font-semibold text-[#7b1113] mt-2">
          Book Our Halls
        </h2>
        <p className="text-gray-700 mt-2">
          For reservations or event details, please contact the temple office or
          email{" "}
          <a
            href="mailto:events@nashvillehanuman.org"
            className="text-[#7b1113] font-medium underline"
          >
            events@nashvillehanuman.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default Halls;
