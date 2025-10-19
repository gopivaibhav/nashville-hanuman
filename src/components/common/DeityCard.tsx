import React from "react";
import {
  Calendar,
  Gift,
  Sparkles,
  Quote,
  Star,
} from "lucide-react";

interface DeityCardProps {
  name: string;
  image: string;
  description: string;
  sloka: string;
  meaning?: string;
  auspiciousDays?: string;
  offerings?: string;
  festivals?: string;
  gayathri?: string;
  gayathriMeaning?: string;
}

const DeityCard: React.FC<DeityCardProps> = ({
  name,
  image,
  description,
  sloka,
  meaning,
  auspiciousDays,
  offerings,
  festivals,
  gayathri,
  gayathriMeaning,
}) => {
  return (
    <div className="relative bg-gradient-to-b from-[#fffaf3] via-[#fffdf8] to-[#fff7ec] border border-[#e5c07b]/60 rounded-2xl shadow-[0_4px_16px_rgba(247,186,60,0.2)] hover:shadow-[0_6px_20px_rgba(247,186,60,0.35)] transition-all duration-500 overflow-hidden group">
      {/* Decorative Gradient Border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fcd34d] opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <h2 className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#ffda7b] text-2xl font-bold drop-shadow-lg text-center tracking-wide">
          {name}
        </h2>
      </div>

      {/* Content */}
      <div className="relative p-6 font-['Poppins',sans-serif]">
        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 italic text-center leading-relaxed">
          {description}
        </p>

        {/* Sloka Section */}
        <div className="bg-gradient-to-br from-[#fff7e5] to-[#fff1c7] rounded-xl p-4 border border-[#f8d877] shadow-inner mb-4">
          <div className="flex items-center justify-center mb-2">
            <Quote className="text-[#d97706] w-4 h-4 mr-2" />
            <h3 className="font-semibold text-[#d97706] text-sm uppercase tracking-wide">
              Sloka
            </h3>
          </div>
          <p className="text-center text-gray-800 italic text-sm leading-relaxed">
            “{sloka}”
          </p>
          {meaning && (
            <p className="text-xs text-gray-600 text-center mt-2">
              — {meaning}
            </p>
          )}
        </div>

        {/* Gayathri Section */}
        {gayathri && (
          <div className="bg-gradient-to-br from-[#fff7e5] to-[#fff0c2] rounded-xl p-4 border border-[#f7d97a] mb-4">
            <h4 className="font-semibold text-[#d97706] text-sm flex items-center justify-center">
              <Sparkles className="w-4 h-4 mr-2 text-[#eab308]" /> Gayathri
            </h4>
            <p className="text-sm italic text-center mt-1 text-gray-800">
              {gayathri}
            </p>
            {gayathriMeaning && (
              <p className="text-xs text-gray-600 text-center mt-2">
                — {gayathriMeaning}
              </p>
            )}
          </div>
        )}

        {/* Info Sections */}
        <div className="text-sm text-gray-800 space-y-3">
          {auspiciousDays && (
            <p className="flex items-start">
              <Calendar className="w-4 h-4 mt-[3px] mr-2 text-[#d97706]" />
              <span>
                <span className="font-semibold text-[#b45309]">
                  Auspicious Days:
                </span>{" "}
                {auspiciousDays}
              </span>
            </p>
          )}

          {festivals && (
            <p className="flex items-start">
              <Star className="w-4 h-4 mt-[3px] mr-2 text-[#d97706]" />
              <span>
                <span className="font-semibold text-[#b45309]">Festivals:</span>{" "}
                {festivals}
              </span>
            </p>
          )}

          {offerings && (
            <p className="flex items-start">
              <Gift className="w-4 h-4 mt-[3px] mr-2 text-[#d97706]" />
              <span>
                <span className="font-semibold text-[#b45309]">Offerings:</span>{" "}
                {offerings}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeityCard;
