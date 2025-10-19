import React, { useState } from "react";
import { Heart, CreditCard, Mail, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const Donate: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", amount: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
        className="text-3xl font-bold text-center text-[#7b1113] mb-6"
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
          className="bg-white shadow-md rounded-xl p-8 border border-yellow-100"
        >
          <Heart className="text-[#7b1113] mb-4 mx-auto" size={36} />
          <h2 className="text-xl font-semibold text-[#7b1113] mb-4 text-center">
            Make a Donation
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-3 border rounded-md px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-3 border rounded-md px-3 py-2"
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (USD)"
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full mb-3 border rounded-md px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-[#7b1113] text-yellow-100 py-2 rounded-md hover:bg-[#a0181b] transition"
          >
            Donate Now
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            (Secure online payment integration coming soon)
          </p>
        </form>

        {/* Donation Info */}
        <div className="bg-[#fdf5e6] p-8 rounded-xl shadow-inner text-center">
          <CreditCard className="text-[#7b1113] mx-auto mb-4" size={36} />
          <h2 className="text-xl font-semibold text-[#7b1113] mb-2">
            Other Ways to Donate
          </h2>
          <p className="text-gray-700 mb-4">
            You can also contribute via check or bank transfer to:
          </p>
          <div className="text-sm text-gray-800">
            <Building2 className="inline mr-2 text-[#7b1113]" />
            <strong>Nashville Hanuman Temple</strong>
            <br />
            Bank of Tennessee<br />
            Routing #: 123456789<br />
            Account #: 987654321
          </div>

          <div className="mt-6">
            <Mail className="inline mr-2 text-[#7b1113]" />
            <p className="inline">
              For donation receipts, email{" "}
              <a
                href="mailto:donate@nashvillehanuman.org"
                className="text-[#7b1113] font-medium"
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
