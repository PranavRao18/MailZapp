import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 text-white">
      {/* Navbar */}
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">MailZapp</h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="hover:text-indigo-200 transition duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-indigo-200 transition duration-200"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-200 transition duration-200"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl font-extrabold mb-6 animate-fade-in">
          Revolutionize Your Email Campaigns
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 animate-fade-in-delayed">
          Unlock the power of AI for creating personalized, professional email
          campaigns. Automate workflows, track results, and connect with your
          audience like never before!
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/auth">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-3 px-8 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-200">
              Get Started
            </button>
          </Link>
          <button className="bg-white text-gray-800 py-3 px-8 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-200">
            Learn More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 p-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2024 MailZapp. Built for small businesses.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
