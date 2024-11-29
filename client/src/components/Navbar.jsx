import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Hide Navbar on Landing Page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MailZapp</h1>
        <nav className="space-x-4">
          <a href="/home" className="hover:underline">
            Home
          </a>
          <a href="/campaigns" className="hover:underline">
            Campaigns
          </a>
          <a href="/insights" className="hover:underline">
            Insights
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
