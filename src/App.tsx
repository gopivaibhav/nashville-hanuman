import { Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";

/* Lazy loaded pages */
const Home = lazy(() => import("./pages/Home/Home"));
const Deities = lazy(() => import("./pages/Deities/Deities"));
const PujaSchedule = lazy(() => import("./pages/Religious/PujaSchedule"));
const HVS = lazy(() => import("./pages/Education/HVS"));
const Halls = lazy(() => import("./pages/Community/Halls"));
const RamKiBandi = lazy(() => import("./pages/RamKiBandi/RamKiBandi"));
const Cultural = lazy(() => import("./pages/Cultural/Cultural"));
const Donate = lazy(() => import("./pages/Donate/Donate"));
const History = lazy(() => import("./pages/About/History"));
const Founder = lazy(() => import("./pages/About/Founder"));
const Gurus = lazy(() => import("./pages/About/Gurus"));
const Volunteer = lazy(() => import("./pages/About/Volunteer"));
const Contact = lazy(() => import("./pages/About/Contact"));

/*  Diya Loader Component */
const LoadingDiya = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white">
    <svg
      width="120"
      height="120"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Diya base */}
      <ellipse cx="32" cy="50" rx="20" ry="6" fill="#7b1113" />
      <path
        d="M12 50 C20 40, 44 40, 52 50 Z"
        fill="#a52a2a"
        stroke="#7b1113"
        strokeWidth="1.5"
      />

      {/* Flame */}
      <g transform="translate(0,2)">
        <path
          d="M32 18C34.5 25 36.5 30 32 34C27.5 30 29.5 25 32 18Z"
          fill="#ffb347"
          className="animate-flame"
        />
      </g>

      <style>{`
        @keyframes flicker {
          0%, 100% { transform: scaleY(1) translateY(0); opacity: 1; }
          50% { transform: scaleY(1.2) translateY(-2px); opacity: 0.9; }
        }
        .animate-flame {
          transform-origin: center bottom;
          animation: flicker 0.5s infinite ease-in-out alternate;
          filter: drop-shadow(0 0 10px rgba(255, 200, 80, 0.7));
        }
      `}</style>
    </svg>

    <p className="mt-6 text-[#7b1113] font-semibold text-lg tracking-wide animate-pulse">
      Lighting the Diya...
    </p>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingDiya />}>
      <Routes>
        {/* 🏠 Main Layout Wrapper */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          {/* Home */}
          <Route index element={<Home />} />

          {/*  Religious */}
          <Route path="deities" element={<Deities />} />
          <Route path="religious/puja-schedule" element={<PujaSchedule />} />

          {/* Education */}
          <Route path="education/hvs" element={<HVS />} />

          {/*  Community */}
          <Route path="community/halls" element={<Halls />} />

          {/*  Ram Ki Bandi */}
          <Route path="ramkibandi" element={<RamKiBandi />} />

          {/*  Cultural */}
          <Route path="cultural" element={<Cultural />} />

          {/*  Donate */}
          <Route path="donate" element={<Donate />} />

          {/*  About */}
          <Route path="about/history" element={<History />} />
          <Route path="about/founder" element={<Founder />} />
          <Route path="about/gurus" element={<Gurus />} />
          <Route path="about/volunteer" element={<Volunteer />} />
          <Route path="about/contact" element={<Contact />} />
        </Route>

        {/*  Not Found */}
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
