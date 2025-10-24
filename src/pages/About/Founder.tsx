import React from "react";
import { User } from "lucide-react";

const Founder: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold text-[#ff9933] mb-6">Our Founder</h1>
      <img
        src="/images/founders/founder.jpg"
        alt="Founder"
        className="w-48 h-48 object-cover mx-auto rounded-full shadow-md mb-4"
      />
      <p className="text-gray-700 max-w-2xl mx-auto">
        Our founder envisioned a sacred space in Nashville where devotion,
        service, and knowledge converge — a temple that brings Sanatana Dharma
        to every home and heart. Through his leadership and dedication, the
        Nashville Hanuman Temple became a reality.
      </p>
    </div>
  );
};

export default Founder;
