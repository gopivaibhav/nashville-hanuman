import React from "react";
import { HeartHandshake, Users, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const Volunteer: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-[#fffaf3] via-[#fffdf8] to-[#fff7ec]">
      {/* Header */}
      <motion.div
        className="text-center container mx-auto px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-[#b45309] mb-4 font-['Playfair_Display',serif]">
          Volunteer With Us
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-[1.05rem] leading-relaxed">
          The <strong>Nashville Hanuman Temple</strong> thrives through the
          devotion and service of volunteers. By giving your time and effort,
          you help sustain a sacred space for our community — where seva
          (selfless service) becomes worship.
        </p>
      </motion.div>

      {/* Main Section */}
      <div className="mt-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Volunteering Info */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 border border-yellow-200"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-4">
            <HeartHandshake className="text-[#b45309]" size={40} />
          </div>
          <h2 className="text-2xl font-semibold text-[#ff9933] mb-3 text-center">
            Why Volunteer?
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Volunteering connects you with fellow devotees, builds friendships,
            and strengthens the temple community. Most activities in the temple
            — from daily pujas to cultural events — are carried out by dedicated
            volunteers who serve with devotion.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When you volunteer, you help expand the temple’s services, share
            your talents, and experience the joy of giving. It’s an opportunity
            to cultivate humility, compassion, and inner peace.
          </p>
        </motion.div>

        {/* Committee Info */}
        <motion.div
          className="bg-[#fdf5e6] shadow-inner rounded-2xl p-8 border border-yellow-100"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-4">
            <Users className="text-[#b45309]" size={40} />
          </div>
          <h2 className="text-2xl font-semibold text-[#ff9933] mb-3 text-center">
            Where You Can Help
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            We welcome volunteers in the following committees:
          </p>
          <ul className="text-gray-800 text-left list-disc list-inside space-y-2">
            <li>Religious Services</li>
            <li>Kitchen and Prasadam Preparation</li>
            <li>Cultural and Festival Events</li>
            <li>Maintenance and Gardening</li>
            <li>Public Relations and Youth Programs</li>
          </ul>
          <p className="text-gray-700 mt-4 text-sm italic">
            For details about each committee, contact the temple office to get
            the name and phone number of the respective coordinator.
          </p>
        </motion.div>
      </div>

      {/* Extra Info Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white rounded-2xl p-8 border border-yellow-200 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-3">
            <Sparkles className="text-[#b45309]" size={36} />
          </div>
          <h3 className="text-xl font-semibold text-[#ff9933] mb-3 text-center">
            Benefits of Volunteering
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
            <li>Meet new people and form lasting friendships</li>
            <li>Serve the community and contribute to temple growth</li>
            <li>Gain a sense of inner satisfaction and peace</li>
            <li>Strengthen your spiritual practice through seva</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-[#fff7e5] rounded-2xl p-8 border border-yellow-200 shadow-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-3">
            <Leaf className="text-[#b45309]" size={36} />
          </div>
          <h3 className="text-xl font-semibold text-[#ff9933] mb-3 text-center">
            Student Volunteers (Ages 12+)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Students aged 12 years and above can apply their volunteer time
            towards <strong>Student Service Learning (SSL)</strong> hours by:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1 text-left">
            <li>Helping prepare sandwiches and meals (Youth Service)</li>
            <li>Assisting with gardening and temple maintenance</li>
          </ul>
          <p className="text-sm text-gray-600 mt-3 italic">
            Thank you for inspiring the next generation of seva-minded youth.
          </p>
        </motion.div>
      </div>

      {/* Signup CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-[#ff9933] mb-4">
          Ready to Serve?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Volunteering is easier than ever! Sign up, bring your family and
          friends, and make a difference in our temple’s journey.
        </p>
        <a
          href="mailto:volunteer@nashvillehanuman.org"
          className="inline-block bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Sign Up to Volunteer
        </a>
      </motion.div>
    </div>
  );
};

export default Volunteer;
