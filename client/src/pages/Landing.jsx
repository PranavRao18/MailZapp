import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { FaRobot, FaDollarSign, FaChartLine, FaEnvelopeOpen, FaBolt, FaGlobe } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#111] text-white relative overflow-hidden">
      <div className="bgimg z-10">
        {/* <div className="absolute text-yellow-500 opacity-80"> */}
          {/* <img src="/MAILZAPP.png" className="bgimg"/> */}
        {/* </div> */}
        {/* <div className="absolute top-[700px] right-[500px] text-pink-500 opacity-80">
          <FaBolt size={50} />
        </div>
        <div className="absolute top-60 right-[400px] text-yellow-500 opacity-80">
          <FaGlobe size={50} />
        </div> */}
      </div>

      {/* Navbar */}
      <header className="p-4 sticky top-0 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">MailZapp</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-indigo-200 transition duration-200">
              Features
            </a>
            <Link to="/pricing" className="hover:text-indigo-200 transition duration-200">
              View Pricing
            </Link>
            <Link to="/contact-us" className="hover:text-indigo-200 transition duration-200">
              Contact Us
            </Link>
          </nav>
          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={scrollToFeatures} className="text-white">
              <FaArrowDown size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3">MailZapp</h1>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Revolutionize Your Email Campaigns with AI</h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10">
          Unlock the power of AI to create personalized, professional email campaigns. Automate workflows, track results, and engage your audience like never before!
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/auth">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-3 px-8 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-200">
              Get Started Now
            </button>
          </Link>
          <button className="bg-white text-gray-800 py-3 px-8 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-200">
            <Link to="/about">Learn More</Link>
          </button>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToFeatures}
          className="fixed right-5 bottom-20 flex items-center justify-center text-white text-2xl bg-yellow-500 hover:bg-yellow-400 p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <FaArrowDown />
        </button>
      </main>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-16 px-8 bg-black">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Simplified Email Marketing for Small Businesses</h1>
          <p className="text-lg text-white/80 mb-12">
            Create, automate, and analyze email campaigns with ease, all powered by AI.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Generated Emails"
              description="Generate professional email content instantly with AI."
              icon={<FaRobot size={60} className="text-yellow-500" />}
            />
            <FeatureCard
              title="Pay-Per-Use"
              description="Affordable and transparent pricing. Only pay for what you use."
              icon={<FaDollarSign size={60} className="text-yellow-500" />}
            />
            <FeatureCard
              title="Actionable Insights"
              description="Get real-time tips and insights to improve your campaigns."
              icon={<FaChartLine size={60} className="text-yellow-500" />}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-center py-8">
        <p className="text-sm text-gray-400">&copy; 2024 MailZapp. Built for small businesses.</p>
      </footer>
    </div>
  );
};

// FeatureCard Component with Scroll Animation
const FeatureCard = ({ title, description, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`p-6 bg-white text-gray-900 rounded-lg shadow-md transform transition duration-300 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Landing;
