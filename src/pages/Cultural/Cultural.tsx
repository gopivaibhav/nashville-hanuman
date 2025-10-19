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
    icon: <Flower2 className="text-[#7b1113]" />,
  },
  {
    title: "Sri Rama Navami & Sita Kalyanam",
    date: "March – April",
    image: "/images/events/ramanavami.jpg",
    description:
      "The birth of Lord Rama is celebrated with devotion and bhajans. The divine wedding ceremony of Sita and Rama is performed with grandeur.",
    icon: <Sparkles className="text-[#7b1113]" />,
  },
  {
    title: "Deepavali & Annakut",
    date: "October – November",
    image: "/images/events/deepavali.jpg",
    description:
      "The festival of lights celebrates Lord Rama’s return to Ayodhya. Devotees light lamps, offer sweets, and perform Lakshmi puja.",
    icon: <CalendarDays className="text-[#7b1113]" />,
  },
  {
    title: "Bhajans & Cultural Performances",
    date: "Every Weekend",
    image: "/images/events/bhajans.jpg",
    description:
      "Melodious bhajans, classical dance, and music performances fill the temple with devotion and joy every weekend.",
    icon: <Music className="text-[#7b1113]" />,
  },
];

const Cultural: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <motion.h1
        className="text-3xl font-bold text-center text-[#7b1113] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Cultural Events & Festivals
      </motion.h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        The Nashville Hanuman Temple celebrates our timeless traditions through
        music, dance, and devotion — fostering unity and joy in every festival.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {culturalEvents.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-yellow-100"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center mb-2">
                {event.icon}
                <h2 className="ml-2 text-xl font-semibold text-[#7b1113]">
                  {event.title}
                </h2>
              </div>
              <p className="text-sm text-gray-700 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cultural;
