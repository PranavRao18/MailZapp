import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { FaCog, FaPlus, FaTrash, FaEye, FaHome } from "react-icons/fa";
import { GiCheckMark, GiSandsOfTime } from "react-icons/gi";

const Dashboard = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/auth");
        }
        const response = await axiosInstance.get("/campaigns", {
          headers: {
            Authorization: `Bearer ${token}`,
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
    <div
      className="min-h-screen bg-black text-gray-200 flex flex-col"
      style={{
        backgroundImage: "none",
        backgroundColor: "#000000",
      }}
    >
      {/* Header */}
      <header className="bg-gray-900 py-4 shadow-lg sticky top-0 z-40 border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Home Icon */}
            <Link to="/" className="text-2xl text-gray-300 hover:text-blue-400">
              <FaHome />
            </Link>

            <h1 className="text-3xl font-extrabold tracking-wide flex items-center">
              <span className="text-blue-400 ml-2">MailZapp</span> Dashboard
            </h1>
          </div>

          <button
            onClick={() => navigate("/settings")}
            className="flex items-center gap-2 bg-gray-800 text-gray-300 px-3 py-2 rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition duration-200"
          >
            <FaCog />
            Settings
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 flex items-center gap-2">
            📋 Your Campaigns
          </h2>
          <button
            onClick={() => navigate("/create-campaign")}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-200"
          >
            <FaPlus />
            New Campaign
          </button>
        </div>

        {/* Campaign List */}
        <div className="bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-700">
          {loading ? (
            <p className="text-gray-400 text-center animate-pulse">
              ⏳ Loading campaigns...
            </p>
          ) : error ? (
            <p className="text-red-400 text-center">❌ {error}</p>
          ) : campaigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-gray-200 border border-gray-700"
                >
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    🎯 <span className="text-blue-400">{campaign.name}</span>
                  </h3>
                  <p
                    className={`text-sm mb-4 px-2 py-1 rounded flex items-center gap-2 ${
                      campaign.status === "Scheduled"
                        ? "bg-yellow-500 bg-opacity-20 text-yellow-300"
                        : "bg-green-500 bg-opacity-20 text-green-300"
                    }`}
                  >
                    {campaign.status === "Scheduled" ? (
                      <GiSandsOfTime />
                    ) : (
                      <GiCheckMark />
                    )}
                    {campaign.status}
                  </p>
                  <p className="text-sm mb-2">
                    📅 Sent Date:{" "}
                    <span className="font-medium text-gray-300">
                      {campaign.sentDate || "N/A"}
                    </span>
                  </p>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => alert("View functionality coming soon!")}
                      className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition duration-200"
                    >
                      <FaEye />
                      View
                    </button>
                    <button
                      onClick={() => alert("Campaign deleted!")}
                      className="flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition duration-200"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">
              🤔 No campaigns found. Start by creating a new campaign!
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
