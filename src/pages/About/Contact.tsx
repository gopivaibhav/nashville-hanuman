import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);


  // Backend URL from .env
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //  Frontend validation (extra layer before backend)
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      setFeedback(null);

      const response = await fetch(`${API_BASE_URL}/api/temple/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log("Sending to:", `${API_BASE_URL}/api/temple/contact`);

       setShowPopup(true);
setForm({ name: "", email: "", message: "" });

      } else {
        setFeedback(" Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setFeedback(" Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-[#ff9933] mb-8">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center">
            <MapPin className="text-[#ff9933] mr-2" />
            123 Hanuman Avenue, Nashville, TN 37209
          </p>
          <p className="flex items-center">
            <Phone className="text-[#ff9933] mr-2" /> (615) 555-1080
          </p>
          <p className="flex items-center">
            <Mail className="text-[#ff9933] mr-2" /> info@nashvillehanuman.org
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md border border-[#ffe6b3]"
        >
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
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full mb-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffcc80]"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-[#ff9933] text-white py-2 rounded-md hover:bg-[#e67a00] transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Success Popup */}
{showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg">
      <h2 className="text-2xl font-bold text-[#ff9933] mb-3">
        Message Sent 🙏
      </h2>

      <p className="text-gray-700 mb-6">
        Thank you for contacting us.
        <br />
        Your message has been sent successfully.
        <br />
        <span className="font-semibold">Jai Hanuman!</span>
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="bg-[#ff9933] text-white px-6 py-2 rounded-md hover:bg-[#e67a00] transition"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Contact;
