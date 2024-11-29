import React from "react";

const Campaigns = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Campaigns</h1>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Create New Campaign
      </button>
      <div className="mt-6">
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
      </div>
    </div>
  );
};

const CampaignCard = ({ title, status, analytics }) => (
  <div className="p-6 bg-white rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">Status: {status}</p>
    <p className="text-gray-600">{analytics}</p>
  </div>
);

export default Campaigns;
