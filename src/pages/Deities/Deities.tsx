import React from "react";
import DeityCard from "../../components/common/DeityCard";

const deities = [
  {
    name: "Sri Ganesha",
    image: "/images/deities/ganesha.jpg",
    description:
      "Son of Parvati and Siva. Remover of obstacles, worshipped first before any religious function. Associated with Siddhi (achievement), Buddhi (intellect), and Riddhi (prosperity).",
    sloka: "Vakratunda Mahakaya Surya Koti Sama Prabha, Nirvighnam Kuru Me Deva Sarva Karyesu Sarvada",
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
    image: "/images/deities/siva.jpg",
    description:
      "One of the Hindu Trinity, Lord of destruction and regeneration. Embodies simplicity, renunciation, and auspiciousness. Also called Mruthyunjaya — the conqueror of death.",
    sloka: "Namaste Astu Bhagwan Vishweshwaraya Mahadevaaya Trayambakaya Trikagni Kalaaya Kalagni Rudraya Nilakanthaya Mrityunjayaya Sarveshwaraya Sadashivaya Shriman Mahadevaaya Namaha",
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
    image: "/images/deities/saraswathi.jpg",
    description:
      "Goddess of learning, wisdom, and speech; dressed in white, seated on a lotus with a swan as her vehicle. Consort of Brahma, called Vaani or Shaarada.",
    sloka: "Saraswathi Namasthubhyam Varadhe Kaama Roopini Vidhya-Arambham Karishyaami Siddhir Bhavathu Me Sadhaa",
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
    image: "/images/deities/hanuman.jpg",
    description:
      "Son of Vaayu, the Wind God. Devotee of Lord Rama. Embodies strength, courage, devotion, humility, and service.",
    sloka: "Manojavam Maarutha Tulya Vegam Jithendriyam Budhimatham Varishtam Vaathaatmajam Vaanara Yoodha Mukhyam Sree Raama-Dhootham Sirasaa Namaami",
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
    image: "/images/deities/rama.jpg",
    description:
      "Eighth avatar of Vishnu; embodiment of righteousness and dharma. Husband of Sita and ideal king of Ayodhya.",
    sloka: "Raamaaya Raama Bhadhraaya Raamachandraaya Vedhase Raghu Naathaya Naathaaya Seethaaya Pathaye Namaha",
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
    image: "/images/deities/navagraha.jpg",
    description:
      "Nine celestial deities representing the planets: Surya, Chandra, Mangala, Budha, Guru, Sukra, Sani, Rahu, and Ketu. They govern various aspects of life and destiny.",
    sloka: "Aadhithyaaya Cha Somaaya Mangalaaya Budhaaya Cha Guru Sukra Sanibhyascha Raahave Kethave Namaha",
    meaning:
      "Salutations to the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — the nine planetary deities.",
    auspiciousDays:
      "Days of the week corresponding to each planet; special occasions during planetary shifts or Graha Shanthi pujas.",
    offerings:
      "Navagraha Homam, sesame lamps on Saturdays, offerings of rice, sesame seeds, or nine grains.",
  },
];

const Deities: React.FC = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-[#7b1113] mb-10">
        Our Deities
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {deities.map((deity) => (
          <DeityCard key={deity.name} {...deity} />
        ))}
      </div>
    </div>
  );
};

export default Deities;
