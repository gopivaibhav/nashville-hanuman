import React from "react";
import { User } from "lucide-react";
import img1 from "../../../public/founder.jpg"

const Founder: React.FC = () => {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold text-[#ff9933] mb-6">Our Founder</h1>
      <img
        src={img1}
        alt="Founder"
        className="w-48 h-48 object-cover mx-auto rounded-full shadow-md mb-4"
      />
     <p className="text-gray-700 leading-relaxed mb-4">
  In the year 2021, the divine journey of our temple began with the sacred vision received by our Founder in Bharat (India) — a calling that his son should serve the community and spread the light of devotion. Guided by the grace of Lord Hanuman, this humble vision gave birth to Hanuman Vayu Sena (HVS).
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  Over time, hearts across Tennessee were touched by this divine mission. What started as a spark of faith soon became a united movement of love and service. Together, devotees joined hands to create a holy abode for Lord Hanuman — a space filled with <em>bhakti</em>, <em>seva</em>, and blessings for all. Thus, <strong>Nashville Hanuman</strong>, a Non-Profit 501 ©️(3) Organization, was established.
</p>

<p className="text-gray-700 leading-relaxed">
  Today, the Founder’s vision continues to inspire hundreds to walk the path of devotion — to serve selflessly, to chant <strong>“JAI SHRI RAM”</strong>, and to keep His divine presence alive in our lives and community.
</p>
    </div>
  );
};

export default Founder;
