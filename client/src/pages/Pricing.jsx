import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { Link } from "react-router-dom"; // Import Link for navigation

const Pricing = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Affordable Pricing for Small Businesses</h1>
      <p className="text-lg mb-12 text-center text-white/80 max-w-2xl">
        We believe in supporting small businesses with affordable pricing plans that help you grow.
        Choose the plan that fits your needs and scale as you go.
      </p>

      {/* Pricing Options Section */}
      <div className="flex flex-wrap justify-center gap-8">
        <PricingCard
          title="Basic"
          price="$10/month"
          features={["Up to 100 emails/month", "Basic templates", "Email automation"]}
          buttonText="Start Free Trial"
          animationDelay={0}
        />
        <PricingCard
          title="Pro"
          price="$25/month"
          features={["Up to 1000 emails/month", "Advanced templates", "AI-powered insights", "Priority support"]}
          buttonText="Get Started"
          animationDelay={0.3}
        />
        <PricingCard
          title="Enterprise"
          price="$50/month"
          features={["Unlimited emails", "Custom templates", "Dedicated account manager", "Advanced analytics"]}
          buttonText="Contact Us"
          animationDelay={0.6}
        />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, features, buttonText, animationDelay }) => {
  return (
    <motion.div
      className="bg-white text-gray-900 rounded-lg shadow-lg p-6 w-72 flex flex-col items-center justify-between transform transition duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-3xl font-extrabold text-yellow-500 mb-6">{price}</p>
      <ul className="mb-6 text-sm text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2 text-yellow-500">•</span> {feature}
          </li>
        ))}
      </ul>
      {/* Wrap the button inside the Link component */}
      {title === "Enterprise" ? (
        <Link to="/contact-us">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-200">
            {buttonText}
          </button>
        </Link>
      ) : (
        <Link to="/auth">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-200">
            {buttonText}
          </button>
        </Link>
      )}
    </motion.div>
  );
};

export default Pricing;
