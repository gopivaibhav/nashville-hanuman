import React from "react";
import { CalendarDays, Music, Sparkles, Flower2 } from "lucide-react";
import { motion } from "framer-motion";

const culturalEvents = [
  {
    title: "Navaratri & Vijaya Dashami",
    date: "September – October",
    image: "/images/events/navaratri.jpg",
    description:
      "Nine nights of devotion dedicated to Goddess Durga, Lakshmi, and Saraswathi. The tenth day, Vijaya Dashami, marks victory of good over evil.",
    icon: <Flower2 className="text-[#f97316]" />,
  },
  {
    title: "Sri Rama Navami & Sita Kalyanam",
    date: "March – April",
    image: "/images/events/ramanavami.jpg",
    description:
      "The birth of Lord Rama is celebrated with devotion and bhajans. The divine wedding ceremony of Sita and Rama is performed with grandeur.",
    icon: <Sparkles className="text-[#f97316]" />,
  },
  {
    title: "Deepavali & Annakut",
    date: "October – November",
    image: "/images/events/deepavali.jpg",
    description:
      "The festival of lights celebrates Lord Rama’s return to Ayodhya. Devotees light lamps, offer sweets, and perform Lakshmi puja.",
    icon: <CalendarDays className="text-[#f97316]" />,
  },
  {
    title: "Bhajans & Cultural Performances",
    date: "Every Weekend",
    image: "/images/events/bhajans.jpg",
    description:
      "Melodious bhajans, classical dance, and music performances fill the temple with devotion and joy every weekend.",
    icon: <Music className="text-[#f97316]" />,
  },
];

const Cultural: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#fff7e0] via-[#fff3cc] to-[#ffedb3]">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Cultural Events & Festivals
      </motion.h1>

      <p className="text-center text-[#5a1d1d] max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
        The Nashville Hanuman Temple celebrates our timeless traditions through{" "}
        <span className="text-[#f97316] font-medium">music</span>,{" "}
        <span className="text-[#f97316] font-medium">dance</span>, and{" "}
        <span className="text-[#f97316] font-medium">devotion</span> — fostering
        unity and joy in every festival.
      </p>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {culturalEvents.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(249,115,22,0.35)",
            }}
            className="bg-[#fffaf3] rounded-2xl shadow-md overflow-hidden border border-[#facc15]/50 transition-all duration-500"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center mb-2">
                {event.icon}
                <h2 className="ml-2 text-xl font-semibold bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent">
                  {event.title}
                </h2>
              </div>
              <p className="text-sm text-[#7b1113] mb-2 font-medium">
                {event.date}
              </p>
              <p className="text-[#5a1d1d] leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cultural;
