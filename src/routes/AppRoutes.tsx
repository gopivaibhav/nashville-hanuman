import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

// 🏠 Main Pages
import Home from "../pages/Home/Home";
import Deities from "../pages/Deities/Deities";

// 🕉️ Religious
import PujaSchedule from "../pages/Religious/PujaSchedule";


// 📘 Education
import HVS from "../pages/Education/HVS";

// 🏛️ Community
import Halls from "../pages/Community/Halls";

// 🍛 Ram Ki Bandi
import RamKiBandi from "../pages/RamKiBandi/RamKiBandi";

// 🎭 Cultural
import Cultural from "../pages/Cultural/Cultural";

// 💰 Donation
import Donate from "../pages/Donate/Donate";

// 🧑‍🏫 About
import History from "../pages/About/History";
import Founder from "../pages/About/Founder";
import Gurus from "../pages/About/Gurus";
import Volunteer from "../pages/About/Volunteer";
import Contact from "../pages/About/Contact";

// ⚠️ 404
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* 🏠 Home */}
          <Route path="/" element={<Home />} />

          {/* 🕉️ Religious */}
          <Route path="/deities" element={<Deities />} />
          <Route path="/religious/puja-schedule" element={<PujaSchedule />} />
         

          {/* 📘 Education */}
          <Route path="/education/hvs" element={<HVS />} />

          {/* 🏛️ Community */}
          <Route path="/community/halls" element={<Halls />} />

          {/* 🍛 Ram Ki Bandi */}
          <Route path="/ramkibandi" element={<RamKiBandi />} />

          {/* 🎭 Cultural */}
          <Route path="/cultural" element={<Cultural />} />

          {/* 💰 Donate */}
          <Route path="/donate" element={<Donate />} />

          {/* 🧑‍🏫 About */}
          <Route path="/about/history" element={<History />} />
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/gurus" element={<Gurus />} />
          <Route path="/about/volunteer" element={<Volunteer />} />
          <Route path="/about/contact" element={<Contact />} />

          {/* ⚠️ Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
