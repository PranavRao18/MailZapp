import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance"; // Assuming you have an Axios instance configured

const Dashboard = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const token = localStorage.getItem("token");
        if(!token){
            navigate('/auth')
        }
        const response = await axiosInstance.get("/campaigns", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in Authorization header
          },
        });
        setCampaigns(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch campaigns. Please try again later.");
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">MailZapp Dashboard</h1>
          <button
            onClick={() => navigate("/settings")}
            className="bg-white text-blue-600 px-3 py-2 rounded shadow hover:bg-gray-200 text-sm md:text-base"
          >
            Settings
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-0">
            Your Campaigns
          </h2>
          <button
            onClick={() => navigate("/create-campaign")}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            + New Campaign
          </button>
        </div>

        {/* Campaign List */}
        <div className="bg-white shadow rounded-lg p-4">
          {loading ? (
            <p className="text-gray-500 text-center">Loading campaigns...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : campaigns.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="text-left bg-gray-200">
                    <th className="p-3 text-sm md:text-base">Campaign Name</th>
                    <th className="p-3 text-sm md:text-base">Status</th>
                    <th className="p-3 text-sm md:text-base">Sent Date</th>
                    <th className="p-3 text-sm md:text-base">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-t">
                      <td className="p-3 text-sm md:text-base">{campaign.name}</td>
                      <td className="p-3 text-sm md:text-base">
                        <span
                          className={`px-2 py-1 rounded ${
                            campaign.status === "Scheduled"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {campaign.status}
                        </span>
                      </td>
                      <td className="p-3 text-sm md:text-base">
                        {campaign.sentDate}
                      </td>
                      <td className="p-3 text-sm md:text-base flex flex-wrap gap-2">
                        {/* <button
                          onClick={() => navigate(`/campaign/${campaign._id}`)}
                          className="bg-blue-600 text-white px-2 py-1 rounded shadow hover:bg-blue-700"
                        >
                          View
                        </button> */}
                        {/* <button
                          onClick={() =>
                            alert("Rescheduling not implemented yet!")
                          }
                          className="bg-yellow-500 text-white px-2 py-1 rounded shadow hover:bg-yellow-600"
                        >
                          Reschedule
                        </button> */}
                        <button
                          onClick={() => alert("Campaign deleted!")}
                          className="bg-red-500 text-white px-2 py-1 rounded shadow hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              No campaigns found. Start by creating a new campaign!
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
