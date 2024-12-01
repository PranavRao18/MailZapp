import React from "react";

const Campaigns = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center sm:text-left">
        Your Campaigns
      </h1>
      <div className="flex justify-center sm:justify-start">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
          Create New Campaign
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Replace with dynamic data */}
        <CampaignCard
          title="Holiday Promotion"
          status="Sent"
          analytics="Open Rate: 35%, Click Rate: 12%"
        />
        <CampaignCard
          title="New Product Launch"
          status="Scheduled"
          analytics="Open Rate: - , Click Rate: -"
        />
        <CampaignCard
          title="Flash Sale Campaign"
          status="Draft"
          analytics="Open Rate: -, Click Rate: -"
        />
      </div>
    </div>
  );
};

const CampaignCard = ({ title, status, analytics }) => (
  <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-1">Status: {status}</p>
    <p className="text-gray-600 mt-1">{analytics}</p>
  </div>
);

export default Campaigns;
