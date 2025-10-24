import React from "react";
import { Clock, Sun, Flame, Bell } from "lucide-react";

const pujaTimings = [
  {
    title: "Temple Opening Hours",
    icon: <Sun className="text-[#ff9933]" />,
    schedule: [
      {
        day: "Monday – Friday",
        time: "10:00 AM – 12:30 PM, 5:30 PM – 8:30 PM",
      },
      { day: "Saturday – Sunday", time: "8:30 AM – 8:30 PM" },
    ],
  },
  {
    title: "Abhishekam Schedule",
    icon: <Flame className="text-[#ff9933]" />,
    schedule: [
      { day: "Tuesday", time: "Hanuman Abhishekam – 10:00 AM" },
      { day: "Thursday", time: "Siva Abhishekam – 10:30 AM" },
      { day: "Friday", time: "Saraswathi Abhishekam – 10:30 AM" },
      { day: "Saturday", time: "Rama Abhishekam – 10:30 AM" },
    ],
  },
  {
    title: "Evening Aarathi Timings",
    icon: <Bell className="text-[#ff9933]" />,
    schedule: [
      { day: "Weekdays", time: "7:00 PM – Aarathi and Bhajans" },
      { day: "Weekends", time: "6:30 PM – Aarathi followed by Maha Prasad" },
    ],
  },
];

const PujaSchedule: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#fff3cc] via-[#ffe8a3] to-[#fff1cc]">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#eab308] to-[#f97316] bg-clip-text text-transparent">
          Puja Schedule
        </h1>

        <p className="text-center text-[#7b1113] max-w-3xl mx-auto mb-10 text-lg leading-relaxed font-medium">
          Explore the sacred daily rituals, abhishekams, and Aarathi timings of
          the temple — each designed to uplift the soul and invoke divine
          blessings.
        </p>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujaTimings.map((section, index) => (
            <div
              key={index}
              className="bg-[#fffaf3] border border-[#7b1113]/20 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(123,17,19,0.25)] transition-all duration-500 p-6"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="ml-3 text-xl font-semibold bg-gradient-to-r from-[#eab308] to-[#f97316] bg-clip-text text-transparent">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-3">
                {section.schedule.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-[#7b1113]/10 pb-3 last:border-none"
                  >
                    <p className="text-base font-semibold text-[#ff9933]">
                      {item.day}
                    </p>
                    <p className="text-sm text-[#5a1d1d] mt-1">{item.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Maha Prasad Section */}
        <div className="mt-12 bg-gradient-to-r from-[#ffeb99] to-[#fff4cc] p-8 rounded-2xl shadow-inner text-center border border-[#7b1113]/30">
          <Clock className="inline-block text-[#7b1113]" size={32} />
          <h2 className="text-2xl font-semibold mt-3 bg-gradient-to-r from-[#eab308] to-[#f97316] bg-clip-text text-transparent">
            Maha Prasad Timings
          </h2>
          <p className="mt-3 text-[#ff9933] max-w-xl mx-auto leading-relaxed">
            Available on{" "}
            <strong className="text-[#ff9933]">
              weekends and special holidays
            </strong>{" "}
            from{" "}
            <strong className="text-[#ff9933]">
              10:30 AM to 7:30 PM
            </strong>{" "}
            at the temple cafeteria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PujaSchedule;
