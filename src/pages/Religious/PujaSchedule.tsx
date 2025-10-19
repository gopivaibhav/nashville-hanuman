import React from "react";
import { Clock, Sun, Flame, Bell } from "lucide-react";

const pujaTimings = [
  {
    title: "Temple Opening Hours",
    icon: <Sun className="text-[#7b1113]" />,
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
    icon: <Flame className="text-[#7b1113]" />,
    schedule: [
      { day: "Tuesday", time: "Hanuman Abhishekam – 10:00 AM" },
      { day: "Thursday", time: "Siva Abhishekam – 10:30 AM" },
      { day: "Friday", time: "Saraswathi Abhishekam – 10:30 AM" },
      { day: "Saturday", time: "Rama Abhishekam – 10:30 AM" },
    ],
  },
  {
    title: "Evening Aarathi Timings",
    icon: <Bell className="text-[#7b1113]" />,
    schedule: [
      { day: "Weekdays", time: "7:00 PM – Aarathi and Bhajans" },
      { day: "Weekends", time: "6:30 PM – Aarathi followed by Maha Prasad" },
    ],
  },
];

const PujaSchedule: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-[#7b1113] mb-10">
        Puja Schedule
      </h1>

      {/* Schedule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pujaTimings.map((section, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#7b1113]/20 rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="ml-3 text-xl font-semibold text-[#7b1113]">
                {section.title}
              </h2>
            </div>

            <ul className="space-y-3">
              {section.schedule.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-gray-100 pb-3 last:border-none"
                >
                  <p className="text-base font-semibold text-gray-800">
                    {item.day}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.time}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Maha Prasad Section */}
      <div className="mt-12 bg-[#fff8f5] p-6 rounded-2xl shadow-inner text-center border border-[#7b1113]/20">
        <Clock className="inline-block text-[#7b1113]" size={28} />
        <h2 className="text-xl font-semibold mt-3 text-[#7b1113]">
          Maha Prasad Timings
        </h2>
        <p className="mt-3 text-gray-700">
          Available on <strong>weekends and special holidays</strong> from{" "}
          <strong>10:30 AM to 7:30 PM</strong> at the temple cafeteria.
        </p>
      </div>
    </div>
  );
};

export default PujaSchedule;