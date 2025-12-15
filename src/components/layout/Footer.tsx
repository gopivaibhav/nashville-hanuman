import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ff9933] text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          
          {/* 🛕 Temple Timings */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Temple Timings
            </h3>
            <ul className="text-sm space-y-1 text-[#fff8e1]">
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

          {/* 🧭 Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-10 text-sm text-center md:text-left">
              <ul className="space-y-2 text-[#fff8e1]">
                <li><a href="/" className="text-white transition-colors">Home</a></li>
                <li><a href="/deities" className="text-white transition-colors">Deities</a></li>
                <li><a href="/religious/puja-schedule" className="text-white transition-colors">Puja Schedule</a></li>
                <li><a href="/education/hvs" className="text-white transition-colors">HVS Classes</a></li>
              </ul>

              <ul className="space-y-2 text-[#fff8e1]">
                <li><a href="/community/halls" className="text-white transition-colors">Community Halls</a></li>
                <li><a href="/ramkibandi" className="text-white transition-colors">Ram Ki Bandi</a></li>
                <li><a href="/donate" className="text-white transition-colors">Donate</a></li>
                <li><a href="/about/contact" className="text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* 📧 Contact & Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Connect with Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="text-[#fff8e1] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#fff8e1] transition-colors">
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@nashvillehanuman.org"
                aria-label="Email"
                className="hover:text-[#fff8e1] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-[#fff8e1]">📍 Nashville, Tennessee</p>
            <p className="text-sm text-[#fff8e1]">info@nashvillehanuman.org</p>
          </div>
        </div>

        {/* Divider + Copyright */}
         <div className="border-t border-white/40 mt-10 pt-4 text-center text-sm text-[#fff8e1]">
  © {new Date().getFullYear()}{" "}
  <span className="font-semibold text-white">Nashville Hanuman Temple</span>. All
  rights reserved.
  <br />
   <br />
  
 <div className="border-t border-gray-400 mx-4 sm:mx-8 lg:mx-96"></div>
<div className="pb-4 text-center text-gray-400 mt-5">
<p className="text-sm md:text-lg flex items-center justify-center">
Built with ❤️ by{" "}
<a
href="https://elite8digital.in"
target="_blank"
rel="noopener noreferrer"
className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center ml-1"
> 
Elite8Digital
<img
src="/elite8digital-nav.png"
alt="Elite8 Digital Logo"
className="h-10 md:h-12 ml-2"
/>
</a>
</p>
</div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
