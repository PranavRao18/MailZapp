import React from "react";

const Insights = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Campaign Insights</h1>
      <p className="text-gray-600">
        Analyze your campaigns with clear and actionable insights.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <InsightCard title="Open Rate" value="42%" />
        <InsightCard title="Click Rate" value="15%" />
        <InsightCard title="Total Emails Sent" value="1,200" />
        <InsightCard title="Conversions" value="128" />
      </div>
    </div>
  );
};

const InsightCard = ({ title, value }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-2xl font-bold text-blue-600">{value}</p>
  </div>
);

export default Insights;
