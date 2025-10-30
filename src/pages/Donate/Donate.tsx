import React, { useState } from "react";
import { Heart, CreditCard, Mail, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const Donate: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", amount: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your generous donation! 🙏 Jai Hanuman!");
    setForm({ name: "", email: "", amount: "" });
  };

  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <motion.h1
        className="text-3xl font-bold text-center text-[#ff9933] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Support the Temple
      </motion.h1>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        Your contribution helps sustain temple operations, pujas, education
        programs, and community service initiatives. Every donation, big or
        small, makes a divine difference. 🙏
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Donation Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-8 border border-[#ffe6b3]"
        >
          <Heart className="text-[#ff9933] mb-4 mx-auto" size={36} />
          <h2 className="text-xl font-semibold text-[#ff9933] mb-4 text-center">
            Make a Donation
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffcc80]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffcc80]"
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (USD)"
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full mb-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffcc80]"
          />

          <button
            type="submit"
            className="w-full bg-[#ff9933] text-white py-2 rounded-md hover:bg-[#e67a00] transition"
          >
            Donate Now
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            (Secure online payment integration coming soon)
          </p>
        </form>

        {/* Donation Info */}
        <div className="bg-gradient-to-b from-[#fffaf0] to-[#fff3d9] p-8 rounded-xl shadow-inner text-center border border-[#ffebcc]">
          <CreditCard className="text-[#ff9933] mx-auto mb-4" size={36} />
          <h2 className="text-xl font-semibold text-[#ff9933] mb-2">
            Other Ways to Donate
          </h2>
          <p className="text-gray-700 mb-4">
            You can also contribute via check or bank transfer to:
          </p>

          <div className="text-sm text-gray-800">
            <Building2 className="inline mr-2 text-[#ff9933]" />
            <strong>Nashville Hanuman Temple</strong>
            <br />
            Bank of Tennessee<br />
            Routing #: xxxxxxxxx<br />
            Account #: xxxxxxxxx
          </div>

          <div className="mt-6">
            <Mail className="inline mr-2 text-[#ff9933]" />
            <p className="inline">
              For donation receipts, email{" "}
              <a
                href="mailto:donate@nashvillehanuman.org"
                className="text-[#ff9933] font-medium hover:text-[#e67a00]"
              >
                donate@nashvillehanuman.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
