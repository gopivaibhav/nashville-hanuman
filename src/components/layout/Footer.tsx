import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7b1113] text-yellow-100 pt-10 pb-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          
          {/* 🛕 Temple Timings */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3 text-yellow-200">
              Temple Timings
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <strong>Monday – Friday:</strong> 10:00 AM – 12:30 PM, 5:30 PM – 8:30 PM
              </li>
              <li>
                <strong>Saturday – Sunday:</strong> 8:30 AM – 8:30 PM
              </li>
              <li>
                <strong>Maha Prasad:</strong> Weekends & Holidays, 10:30 AM – 7:30 PM
              </li>
            </ul>
          </div>

          {/* 🧭 Quick Links — divided 4 & 4 */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3 text-yellow-200">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-10 text-sm text-center md:text-left">
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-yellow-300 transition-colors">Home</a></li>
                <li><a href="/deities" className="hover:text-yellow-300 transition-colors">Deities</a></li>
                <li><a href="/religious/puja-schedule" className="hover:text-yellow-300 transition-colors">Puja Schedule</a></li>
                <li><a href="/education/hvs" className="hover:text-yellow-300 transition-colors">HVS Classes</a></li>
              </ul>

              <ul className="space-y-2">
                <li><a href="/community/halls" className="hover:text-yellow-300 transition-colors">Community Halls</a></li>
                <li><a href="/ramkibandi" className="hover:text-yellow-300 transition-colors">Ram Ki Bandi</a></li>
                <li><a href="/donate" className="hover:text-yellow-300 transition-colors">Donate</a></li>
                <li><a href="/about/contact" className="hover:text-yellow-300 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* 📧 Contact & Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3 text-yellow-200">
              Connect with Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@nashvillehanuman.org" aria-label="Email" className="hover:text-yellow-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-yellow-100">📍 Nashville, Tennessee</p>
            <p className="text-sm">info@nashvillehanuman.org</p>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-yellow-300 mt-10 pt-4 text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Nashville Hanuman Temple</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
