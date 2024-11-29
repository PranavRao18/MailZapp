import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Simplified Email Marketing for Small Businesses</h1>
        <p className="mt-4 text-lg text-gray-600">
          Create, automate, and analyze email campaigns with ease.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <FeatureCard
          title="AI-Generated Emails"
          description="Generate professional content with AI."
        />
        <FeatureCard
          title="Pay-Per-Use"
          description="Affordable and transparent pricing."
        />
        <FeatureCard
          title="Actionable Insights"
          description="Get tips to improve your campaigns."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default Home;
