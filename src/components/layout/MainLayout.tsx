import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import audio from "../../../public/Shri Ram Jay Ram Jay Jay Ram - 1Hour Ram Naam Jap - Gondavalekar Maharaj _ श्री राम जय राम जय जय राम [4G7T8OPkePg].mp3";


interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // ✅ Play after first user interaction (bypasses browser autoplay restrictions)
    const audio = document.getElementById("temple-audio") as HTMLAudioElement | null;
    const handleUserInteraction = () => {
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    return () => window.removeEventListener("click", handleUserInteraction);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fdf9f3] text-gray-800">
      <Navbar />

      {/* 🎶 Global Background Audio */}
      <audio
        id="temple-audio"
        src={audio} 
        autoPlay
        loop
        preload="auto"
        controls={false} // hidden player
      />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
