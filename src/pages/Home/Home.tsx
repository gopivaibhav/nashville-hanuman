import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  Heart,
  BookOpen,
  Calendar,
  Sparkles,
  Flame,
} from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../../../public/founder.jpg";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("daily");

  return (
    
<div className="pt-14 overflow-x-hidden relative">
      
<motion.div
  className="relative bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] text-[#fff8e1] py-3 overflow-hidden border-t-2 border-b-2 border-[#fff3c4] shadow-md"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Subtle Shine Effect Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

  
  <motion.div
    className="whitespace-nowrap text-base sm:text-lg font-semibold tracking-wide flex"
    animate={{ x: ["100%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 40, 
      ease: "linear",
    }}
  >
    <span className="mx-12">
      🪔 <span className="text-white font-bold">Welcome to Nashville Hanuman Temple</span> — Join us daily for pujas,
      seva, and community prayers. Experience the divine blessings of Lord Hanuman! 🙏
    </span>
    <span className="mx-12">
      🌸 <span className="text-white font-bold">Upcoming:</span> Navarathri – Sep 22 to Oct 31 |
      Diwali – Oct 20 | Karthika Masam – Nov 1 to Nov 30 🌼
    </span>
  </motion.div>
</motion.div>



      <section className="relative text-center py-20 bg-gradient-to-br from-[#ff9933] via-[#ffa733] to-[#ffc266] text-[#4a1c1c]">
        <motion.h1
          className="text-4xl md:text-5xl text-[#7b1113] font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nashville Hanuman Temple
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A sacred home where devotion, knowledge, and unity come together under
          the grace of Lord Hanuman.
        </motion.p>
        <Link
          to="/deities"
          className="inline-block bg-yellow-300 text-[#7b1113] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          Explore Our Deities
        </Link>

        <img
          src="/images/deities/hanuman.jpg"
          alt="Hanuman"
          className="absolute inset-0 opacity-10 w-full h-full object-cover -z-10"
        />
      </section>

      {/* 🕉️ Vision & Mission */}
      <section className="py-16 bg-[#fffdf6] text-center">
        <h2 className="text-3xl font-bold text-[#7b1113] mb-10">
          Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white shadow-md p-8 rounded-xl border border-yellow-100">
            <h3 className="text-xl font-semibold text-[#7b1113] mb-3">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To build a sacred and serene Hanuman Temple that serves as a
              beacon of devotion, knowledge, and unity — where Sanatana Dharma
              is practiced, preserved, and passed on to future generations.
            </p>
          </div>

          <div className="bg-white shadow-md p-8 rounded-xl border border-yellow-100">
            <h3 className="text-xl font-semibold text-[#7b1113] mb-3">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To promote Hindu dharma and values through pujas, education,
              service (seva), and cultural celebration — inspiring compassion,
              respect, and selfless service to humanity.
            </p>
          </div>
        </div>
      </section>

      {/* 📿 Quick Links */}
      <section className="py-16 bg-[#fdf5e6] text-center">
        <h2 className="text-3xl font-bold text-[#7b1113] mb-10">
          Explore the Temple
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-6">
          {[
            { to: "/deities", label: "Deities", icon: <Flame size={28} /> },
            { to: "/religious/puja-schedule", label: "Puja Schedule", icon: <Calendar size={28} /> },
            { to: "/education/hvs", label: "HVS School", icon: <BookOpen size={28} /> },
            { to: "/community/halls", label: "Halls", icon: <Landmark size={28} /> },
            { to: "/ramkibandi", label: "Ram Ki Bandi", icon: <Heart size={28} /> },
            { to: "/cultural", label: "Cultural", icon: <Sparkles size={28} /> },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <div className="text-[#7b1113]">{item.icon}</div>
              <span className="mt-2 font-semibold text-sm text-[#7b1113]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 🏛️ Temple History Section */}
      <section className="py-20 bg-[#fffaf3]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/temple-history.jpg"
              alt="Temple History"
              className="rounded-xl shadow-lg border-4 border-yellow-200"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-left"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#7b1113] mb-4">
              Temple History
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in <strong>2021</strong> by a visionary devotee, the
              Nashville Hanuman Temple began as a humble place of worship built
              on faith and devotion. Over the years, it has grown into a sacred
              center for the community.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By <strong>2025</strong>, community leaders formed the{" "}
              <strong>Nashville Hanuman Non-Profit Organization</strong> — a
              collective dedicated to uniting Hindus in America through
              devotion, education, and service.
            </p>
            <p className="text-gray-700 italic">
              “A temple not just of stone and idols — but of faith, family, and
              future generations.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🙇‍♂️ Our Founder Section */}
      <section className="py-20 bg-[#fdf5e6]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 px-6">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={img1}
              alt="Our Founder"
              className="rounded-xl shadow-lg border-4 border-yellow-200"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#7b1113] mb-4">
              Our Founder
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The temple’s journey began with a single devotee’s dream — to
              create a divine space for all. His vision of a temple dedicated to
              Lord Hanuman inspired hundreds to come together in devotion and
              service.
            </p>
            <p className="text-gray-700 italic">
              “Faith is the foundation, and service is the path.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🙏 Our Priest Section */}
<section className="py-20 bg-gradient-to-b from-[#fffaf3] via-[#fffdf6] to-[#fff7ec]">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
    {/* Priest Image */}
    <motion.div
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/images/priest.jpg" // ✅ Replace with actual priest image
        alt="Temple Priest"
        className="rounded-2xl shadow-lg border-4 border-yellow-200 object-cover w-full h-[420px]"
      />
    </motion.div>

    {/* Priest Description */}
    <motion.div
      className="w-full md:w-1/2 text-left"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-[#7b1113] mb-4 font-['Playfair_Display',serif]">
        Our Priest
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our Priest is a <strong>Smartha Vaidhika priest</strong> with over 20 years of experience 
        performing <em>Apasthambam</em> and <em>Veda Parayanam</em>. He is certified in 
        <strong> Krishna Yajur Veda</strong> and was born into a traditional Vaidhika Brahmin family. 
        He studied under <strong>Shivram Maharaj Dixit</strong> & <strong>Ganesh Maharaj Dixit</strong> 
        in Srirangam, Tiruchirappalli (Tamil Nadu) and Zaheerabad (Telangana, India).
      </p>

      <div className="bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] border border-yellow-200 rounded-xl shadow-inner p-5 mb-4">
        <h3 className="text-[#b45309] font-semibold text-lg mb-2">
          Trained in Vaidhika Samskaras including:
        </h3>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>Marriage Ceremonies</li>
          <li>Gruhapravesam (rituals for moving into a new home)</li>
          <li>Satyanarayana Vratham</li>
          <li>Rudra Abhishekam and Homam</li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed">
        He is multilingual, speaking <strong>Hindi, Kannada, Telugu, English</strong>, 
        and has an understanding of <strong>Marathi</strong>.
      </p>
    </motion.div>
  </div>
</section>


      {/* 🌅 Today's Panchangam Section */}
      {/* (Your full Panchangam code remains here as-is, unchanged) */}

      {/* 🌅 Today's Panchangam Section */}
<section className="py-16 bg-[#fffaf3] text-center relative overflow-hidden">
  <h2 className="text-3xl font-bold text-[#ff9933] mb-10 relative">
    Today’s Panchangam
    <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    {/* 🪔 Special Events */}
    <div className="bg-white rounded-lg shadow-md border border-yellow-200 overflow-hidden">
      <div className="bg-[#7b1113] text-[#ff9933] font-semibold py-2 uppercase tracking-wide">
        Special Events
      </div>
      <div className="bg-[url('/images/pattern-light.png')] bg-opacity-5 bg-cover bg-center p-5 text-left text-gray-800">
        {[
          { title: "Navagraha and Nagadevi Prathista", date: "Mar 08 – Oct 31" },
          { title: "Navarathri – 2025", date: "Sep 22 – Oct 31" },
          { title: "Diwali Celebrations – 2025", date: "Oct 20" },
          { title: "Karthika Masam – 2025", date: "Nov 01 – Nov 30" },
        ].map((item, i) => (
          <div key={i} className="border-b border-yellow-100 py-3 last:border-none">
            <h3 className="text-[#ff9933] font-semibold text-lg">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
    {/* 🕉️ Temple Schedules */}
    <div className="bg-white rounded-lg shadow-md border border-yellow-200 overflow-hidden">
      <div className="bg-[#7b1113] text-[#ff9933] font-semibold py-2 uppercase tracking-wide">
        Temple Schedules
      </div>
      <div className="flex justify-center space-x-2 mt-3">
        {["daily", "weekly", "monthly"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            // FIX: Template literal was missing the surrounding backticks (`...`)
            className={`px-4 py-1 rounded-t-md text-sm font-medium border transition ${
              activeTab === tab
                ? "bg-[#7b1113] text-[#ff9933] border-[#7b1113]"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="bg-[url('/images/pattern-light.png')] bg-opacity-5 bg-cover bg-center text-left text-gray-800 p-5 space-y-4">
        {activeTab === "daily" && (
          <>
            <div className="border-b border-yellow-100 pb-2">
              <p className="font-semibold text-[#ff9933]">Temple Opens</p>
              <p className="text-sm text-gray-700">9:00 AM</p>
            </div>
            <div className="border-b border-yellow-100 pb-2">
              <p className="font-semibold text-[#ff9933]">Rudrabhishekam</p>
              <p className="text-sm text-gray-700">7:00 AM – 8:00 AM</p>
            </div>
            <div className="border-b border-yellow-100 pb-2">
              <p className="font-semibold text-[#ff9933]">Evening Aarati</p>
              <p className="text-sm text-gray-700">7:30 PM</p>
            </div>
            <div>
              <p className="font-semibold text-[#ff9933]">Temple Closes</p>
              <p className="text-sm text-gray-700">9:00 PM</p>
            </div>
          </>
        )}
        {activeTab === "weekly" && (
          <>
            <p className="font-semibold text-[#ff9933]">Hanuman Abhishekam – Tuesday</p>
            <p className="font-semibold text-[#ff9933]">Siva Abhishekam – Thursday</p>
            <p className="font-semibold text-[#ff9933]">Saraswathi Abhishekam – Friday</p>
            <p className="font-semibold text-[#ff9933]">Rama Abhishekam – Saturday</p>
          </>
        )}
        {activeTab === "monthly" && (
          <>
            <p className="font-semibold text-[#ff9933]">Pournami Puja – Every Full Moon</p>
            <p className="font-semibold text-[#ff9933]">Amavasya Puja – Every New Moon</p>
            <p className="font-semibold text-[#ff9933]">Sankatahara Chathurthi – Monthly</p>
          </>
        )}
      </div>
    </div>
    {/* 🎉 Upcoming Events */}
    <div className="bg-white rounded-lg shadow-md border border-yellow-200 overflow-hidden">
      <div className="bg-[#7b1113] text-[#ff9933] font-semibold py-2 uppercase tracking-wide">
        Upcoming Events
      </div>
      <div className="bg-[url('/images/pattern-light.png')] bg-opacity-5 bg-cover bg-center p-5 text-left text-gray-800 space-y-4">
        {[
          { img: "/images/deities/hanuman.jpg", title: "Navagraha and Nagadevi Prathista", date: "Mar 08 – Dec 31" },
          { img: "/images/deities/siva.jpg", title: "Navarathri – 2025", date: "Sep 22 – Oct 31" },
          { img: "/images/deities/saraswathi.jpg", title: "Diwali Celebrations – 2025", date: "Oct 20" },
          { img: "/images/deities/rama.jpg", title: "Karthika Masam – 2025", date: "Nov 01 – Nov 30" },
        ].map((event, i) => (
          <div key={i} className="flex items-center space-x-4 border-b border-yellow-100 pb-3 last:border-none">
            <img src={event.img} alt={event.title} className="w-12 h-12 rounded-md object-cover border border-yellow-200" />
            <div>
              <h3 className="text-[#ff9933] font-semibold text-sm">{event.title}</h3>
              <p className="text-xs text-gray-600">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 🛕 Visit Temple CTA */}
     <section className="py-16 bg-[#ff9933] text-white text-center">
  <motion.h2
    className="text-3xl text-white font-bold mb-4"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    Visit the Temple
  </motion.h2>
  <p className="max-w-2xl mx-auto text-lg mb-6 text-[#fff8e1]">
    Join us for daily pujas, festivals, and community gatherings.  
    Experience the divine grace of Lord Hanuman and our beautiful temple atmosphere.
  </p>
  <Link
    to="/about/contact"
    className="inline-block bg-white text-[#ff9933] font-semibold px-6 py-3 rounded-lg hover:bg-[#fff4e6] transition"
  >
    Get Directions
  </Link>
</section>

    </div>
  );
};

export default Home;
