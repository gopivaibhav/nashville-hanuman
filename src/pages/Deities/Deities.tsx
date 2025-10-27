import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Gift, Sparkles, Quote } from "lucide-react";
import img1 from "../../../public/ganesha.jpeg";
import img2 from  "../../../public/hanuman.jpg";
import img3 from "../../../public/rama.jpg";
import img4 from "../../../public/saraswathi.jpeg";
import img5 from "../../../public/navagraha1.webp";
import img6 from "../../../public/images.jpeg"
const deities = [
  {
    name: "Sri Ganesha",
    image: img1,
    description:
      "Son of Parvati and Siva. Remover of obstacles, worshipped first before any religious function. Associated with Siddhi (achievement), Buddhi (intellect), and Riddhi (prosperity).",
    sloka:
      "Vakratunda Mahakaya Surya Koti Sama Prabha, Nirvighnam Kuru Me Deva Sarva Karyesu Sarvada",
    meaning:
      "O Lord Ganesha with the curved trunk and mighty body, whose brilliance is equal to a million suns, please remove all obstacles from my endeavors, always.",
    auspiciousDays:
      "Chathurti, Sankatahara Chathurti, Ganesha Chathurthi (Bhaadrapadha month)",
    offerings:
      "Modhaka, Durva grass garlands, Ganapathi Homam, decorations with vibuthi, turmeric, and sandalwood.",
    gayathri:
      "Thath Purushyaaya Vidhmahe Vakrathundaaya Dheemahi Thanno Dhandhi Prachodayaath",
    gayathriMeaning:
      "We worship that supreme person; salutations to that Lord with a bent trunk. May that Lord with a tusk stimulate our creative faculties.",
  },
  {
    name: "Sri Siva",
    image: img6,
    description:
      "One of the Hindu Trinity, Lord of destruction and regeneration. Embodies simplicity, renunciation, and auspiciousness. Also called Mruthyunjaya — the conqueror of death.",
    sloka:
      "Namaste Astu Bhagwan Vishweshwaraya Mahadevaaya Trayambakaya Trikagni Kalaaya Kalagni Rudraya Nilakanthaya Mrityunjayaya Sarveshwaraya Sadashivaya Shriman Mahadevaaya Namaha",
    meaning:
      "Salutations to Lord Siva — the three-eyed One, the destroyer of the three cities, blue-throated, conqueror of death, the eternal and auspicious Great Lord.",
    auspiciousDays:
      "Mondays, Maha Sivaratri, days with Aardha star, Pradosham puja",
    offerings:
      "Bilva leaves, white flowers, Rudra Abhishekam, Rudra Homam, Mrithyunjaya Homam.",
    gayathri:
      "Tathpurushaaya Vidhmahe Mahadevaaya Dheemahi Thanno Rudrah Prachodayaath",
    gayathriMeaning:
      "We worship that ultimate being. Salutations to the Great Lord. May that Rudra stimulate our faculties.",
  },
  {
    name: "Sri Saraswathi",
    image: img4,
    description:
      "Goddess of learning, wisdom, and speech; dressed in white, seated on a lotus with a swan as her vehicle. Consort of Brahma, called Vaani or Shaarada.",
    sloka:
      "Saraswathi Namasthubhyam Varadhe Kaama Roopini Vidhya-Arambham Karishyaami Siddhir Bhavathu Me Sadhaa",
    meaning:
      "Salutations to you, Saraswathi, the giver of boons and delight. With your blessings, I start my studies — may success always crown my efforts.",
    auspiciousDays: "Wednesdays, Fridays, last three days of Navaratri",
    offerings:
      "Turmeric abhishekam, lentil-based dishes, paayasam, vada, Vidhyaarambham ritual for children.",
    gayathri:
      "Maha Dhevyai Cha Vidmahe Brahma Pathnai Cha Dheemahi Thanno Vaani Prachodayaath",
    gayathriMeaning:
      "We worship the Supreme Goddess; salutations to the consort of Brahma. May that Goddess Vaani stimulate our intellect.",
  },
  {
    name: "Sri Hanuman",
    image: img2,
    description:
      "Son of Vaayu, the Wind God. Devotee of Lord Rama. Embodies strength, courage, devotion, humility, and service.",
    sloka:
      "Manojavam Maarutha Tulya Vegam Jithendriyam Budhimatham Varishtam Vaathaatmajam Vaanara Yoodha Mukhyam Sree Raama-Dhootham Sirasaa Namaami",
    meaning:
      "I bow to Hanuman, the messenger of Rama, who travels as fast as the wind, master of his senses, intelligent, and commander of the monkey army.",
    auspiciousDays:
      "Tuesdays and Saturdays, Hanuman Jayanti (varies by region and calendar).",
    offerings:
      "Butter, vada garlands, betel leaves, thulasi; recitation of Hanuman Chalisa and Rama Nama.",
    gayathri:
      "Thath Purushyaaya Vidhmahe Vaayu Puthraaya Dheemahi Thanno Hanumath Prachodayaath",
    gayathriMeaning:
      "We worship that supreme being; salutations to the son of Vaayu. May Lord Hanuman inspire our strength and devotion.",
  },
  {
    name: "Sri Rama",
    image: img3,
    description:
      "Eighth avatar of Vishnu; embodiment of righteousness and dharma. Husband of Sita and ideal king of Ayodhya.",
    sloka:
      "Raamaaya Raama Bhadhraaya Raamachandraaya Vedhase Raghu Naathaya Naathaaya Seethaaya Pathaye Namaha",
    meaning:
      "I bow to Rama, the Lord of the Raghu dynasty, the knower of all, and the husband of Sita.",
    auspiciousDays:
      "Mondays, Saturdays, Rama Navami (birthday of Rama), Navarathri, Deepavali.",
    offerings:
      "Flowers, fruits, jaggery drink, buttermilk, recitation of Sundara Kanda, Sita Kalyanam rituals.",
    gayathri:
      "Dhaasaradhaaya Vidhmahe Seetha Vallabaaya Dheemahi Thanno Raama Prachodhayaath",
    gayathriMeaning:
      "We meditate on Rama, the son of Dasharatha and beloved of Sita. May Lord Rama guide our intellect toward righteousness.",
  },
  {
    name: "Sri Navagrahas",
    image: img5,
    description:
      "Nine celestial deities representing the planets: Surya, Chandra, Mangala, Budha, Guru, Sukra, Sani, Rahu, and Ketu. They govern various aspects of life and destiny.",
    sloka:
      "Aadhithyaaya Cha Somaaya Mangalaaya Budhaaya Cha Guru Sukra Sanibhyascha Raahave Kethave Namaha",
    meaning:
      "Salutations to the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — the nine planetary deities.",
    auspiciousDays:
      "Days of the week corresponding to each planet; special occasions during planetary shifts or Graha Shanthi pujas.",
    offerings:
      "Navagraha Homam, sesame lamps on Saturdays, offerings of rice, sesame seeds, or nine grains.",
  },
];

const Deities: React.FC = () => {
  const [selectedDeity, setSelectedDeity] = useState<any>(null);
  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setRadius(140);
      else if (width < 768) setRadius(160);
      else setRadius(180);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const positions = useMemo(() => {
    const total = deities.length;
    const baseRotation = -Math.PI / 2; // top starting point
    return deities.map((deity, i) => {
      const angle = (i / total) * 2 * Math.PI + baseRotation;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return { ...deity, x, y };
    });
  }, [radius]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7e6] to-[#ffedd5] flex flex-col items-center justify-center overflow-hidden relative">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#ff9933] mb-10 text-center">
        Divine Circle of Deities
      </h1>

     {/* Circle with all deities */}
<motion.div
  className="relative flex items-center justify-center"
  style={{ width: radius * 3.4, height: radius * 3.4 }}
  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    ease: "linear",
    duration: 60,
  }}
>
  {positions.map((deity) => (
    <div
      key={deity.name}
      className="absolute"
      style={{
        top: "50%",
        left: "50%",
        transform: `translate(calc(-50% + ${deity.x}px), calc(-50% + ${deity.y}px))`,
      }}
    >
      {/* 👇 Counter-rotate only the image itself */}
      <motion.img
        src={deity.image}
        alt={deity.name}
        onClick={() => setSelectedDeity(deity)}
        className={`w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 ${
          deity.name === "Sri Hanuman"
            ? "border-[#ff9933]"
            : "border-[#fff8e1]"
        } shadow-lg cursor-pointer object-cover bg-[#fffaf3]`}
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
        whileHover={{
          scale: 1.25,
          boxShadow: "0 0 25px 5px #ffcc80",
        }}
      />
    </div>
  ))}
</motion.div>

      {/* Modal popup */}
      {selectedDeity && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-gradient-to-b from-[#fffaf3] via-[#fffdf8] to-[#fff7ec] rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg relative text-[#4a1c1c] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="max-h-[70vh] overflow-y-auto p-6">
              <button
                onClick={() => setSelectedDeity(null)}
                className="absolute top-3 right-3 text-[#ff9933] text-2xl font-bold hover:text-[#e67a00]"
              >
                ✕
              </button>

              <img
                src={selectedDeity.image}
                alt={selectedDeity.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-[#ffcc80] shadow-md mb-3 object-cover"
              />

              <h2 className="text-xl sm:text-2xl font-bold text-center text-[#ff9933] mb-3">
                {selectedDeity.name}
              </h2>

              <p className="text-sm text-gray-700 italic text-center mb-4 leading-relaxed">
                {selectedDeity.description}
              </p>

              {/* Sloka */}
              <div className="bg-gradient-to-br from-[#fff7e5] to-[#fff1c7] rounded-xl p-4 border border-[#f8d877] shadow-inner mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Quote className="text-[#d97706] w-4 h-4 mr-2" />
                  <h3 className="font-semibold text-[#d97706] text-sm uppercase tracking-wide">
                    Sloka
                  </h3>
                </div>
                <p className="text-center text-gray-800 italic text-sm leading-relaxed">
                  “{selectedDeity.sloka}”
                </p>
                {selectedDeity.meaning && (
                  <p className="text-xs text-gray-600 text-center mt-2">
                    — {selectedDeity.meaning}
                  </p>
                )}
              </div>

              {/* Gayathri */}
              {selectedDeity.gayathri && (
                <div className="bg-gradient-to-br from-[#fff7e5] to-[#fff0c2] rounded-xl p-4 border border-[#f7d97a] mb-4">
                  <h4 className="font-semibold text-[#d97706] text-sm flex items-center justify-center">
                    <Sparkles className="w-4 h-4 mr-2 text-[#eab308]" /> Gayathri
                  </h4>
                  <p className="text-sm italic text-center mt-1 text-gray-800">
                    {selectedDeity.gayathri}
                  </p>
                  {selectedDeity.gayathriMeaning && (
                    <p className="text-xs text-gray-600 text-center mt-2">
                      — {selectedDeity.gayathriMeaning}
                    </p>
                  )}
                </div>
              )}

              {/* Info */}
              <div className="text-sm text-gray-800 space-y-3 pb-2">
                {selectedDeity.auspiciousDays && (
                  <p className="flex items-start">
                    <Calendar className="w-4 h-4 mt-[3px] mr-2 text-[#d97706]" />
                    <span>
                      <span className="font-semibold text-[#b45309]">
                        Auspicious Days:
                      </span>{" "}
                      {selectedDeity.auspiciousDays}
                    </span>
                  </p>
                )}
                {selectedDeity.offerings && (
                  <p className="flex items-start">
                    <Gift className="w-4 h-4 mt-[3px] mr-2 text-[#d97706]" />
                    <span>
                      <span className="font-semibold text-[#b45309]">
                        Offerings:
                      </span>{" "}
                      {selectedDeity.offerings}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Deities;
