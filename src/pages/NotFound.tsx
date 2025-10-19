import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="pt-32 text-center">
      <h1 className="text-6xl font-bold text-[#7b1113] mb-4">404</h1>
      <p className="text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-[#7b1113] text-yellow-100 px-4 py-2 rounded-md hover:bg-[#a0181b] transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
