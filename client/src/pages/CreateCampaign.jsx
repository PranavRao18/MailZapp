import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { FaRegSmile, FaRocket, FaEnvelope, FaClock, FaListAlt } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const CreateCampaign = () => {
  const [campaignName, setCampaignName] = useState("");
  const [recipients, setRecipients] = useState("");
  const [ccRecipients, setCcRecipients] = useState("");
  const [bccRecipients, setBccRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [scheduleDateTime, setScheduleDateTime] = useState("");
  const [useAI, setUseAI] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const navigate = useNavigate();

  const generateEmailContent = async () => {
    if (!aiPrompt) {
      alert("Please provide a prompt for the AI to generate content. 🤖");
      return;
    }

    setIsGenerating(true);
    try {
      const response = await axiosInstance.post("/ai/generate", {
        prompt: aiPrompt,
      });
      setEmailContent(response.data.content);
    } catch (error) {
      console.error("Error generating email content:", error);
      alert("Failed to generate email content.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!campaignName || !recipients || !emailContent || !subject || !scheduleDateTime) {
      alert("🚨 Please fill out all required fields.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("User not authenticated. 🔒");
      return;
    }

    try {
      await axiosInstance.post(
        "/campaigns",
        {
          name: campaignName,
          recipients: recipients.split(","),
          cc: ccRecipients.split(","),
          bcc: bccRecipients.split(","),
          subject,
          content: emailContent,
          scheduleDateTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("🎉 Campaign created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("Failed to create campaign.");
    }
  };

  // Function to get the current IST time in 'yyyy-mm-ddThh:mm' format
  const getISTTime = () => {
    const date = new Date();
    const options = { timeZone: "Asia/Kolkata", hour12: false };
    const ISTDate = new Intl.DateTimeFormat("en-GB", options).format(date);
    const [day, month, year] = ISTDate.split("/"); // Day, Month, Year
    const time = date.toLocaleTimeString("en-GB", options); // Get time in IST
    const [hours, minutes] = time.split(":");
    
    // Return the datetime string in the 'yyyy-mm-ddThh:mm' format
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6 flex items-center justify-center gap-2">
          <MdOutlineCampaign size={30} /> Create a New Campaign
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Campaign Name */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="campaignName">
              <MdOutlineCampaign size={20} className="text-blue-400" /> Campaign Name
            </label>
            <input
              id="campaignName"
              type="text"
              className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white"
              placeholder="Enter campaign name"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </div>

          {/* Recipients */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="recipients">
              <FaEnvelope size={20} className="text-blue-400" /> To (Recipients)
            </label>
            <textarea
              id="recipients"
              className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white"
              placeholder="e.g., user1@example.com, user2@example.com"
              rows="3"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            />
          </div>

          {/* CC Recipients */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="ccRecipients">
              <FaListAlt size={20} className="text-blue-400" /> CC (Optional)
            </label>
            <textarea
              id="ccRecipients"
              className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white"
              placeholder="e.g., cc1@example.com, cc2@example.com"
              rows="2"
              value={ccRecipients}
              onChange={(e) => setCcRecipients(e.target.value)}
            />
          </div>

          {/* BCC Recipients */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="bccRecipients">
              <FaListAlt size={20} className="text-blue-400" /> BCC (Optional)
            </label>
            <textarea
              id="bccRecipients"
              className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white"
              placeholder="e.g., bcc1@example.com, bcc2@example.com"
              rows="2"
              value={bccRecipients}
              onChange={(e) => setBccRecipients(e.target.value)}
            />
          </div>

          {/* Email Subject */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="subject">
              <FaRegSmile size={20} className="text-blue-400" /> Email Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white"
              placeholder="Enter the email subject line"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* AI Content Generator Toggle */}
          {!useAI ? (
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setUseAI(true)}
                className="w-full bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <FaRocket size={20} /> Generate Email Content with AI
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="aiPrompt">
                  <FaRocket size={20} className="text-blue-400" /> AI Prompt
                </label>
                <textarea
                  id="aiPrompt"
                  className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white"
                  placeholder="Provide a detailed prompt for AI"
                  rows="4"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                />
                <button
                  type="button"
                  onClick={generateEmailContent}
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 flex items-center gap-2"
                  disabled={isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate with AI"}
                </button>
              </div>
            </>
          )}

          {/* Email Content */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="emailContent">
              <FiMail size={20} className="text-blue-400" /> Email Content
            </label>
            <textarea
              id="emailContent"
              className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white"
              placeholder="Write the email content here"
              rows="6"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />
          </div>

          {/* Schedule Date and Time */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 flex items-center gap-2" htmlFor="scheduleDateTime">
              <FaClock size={20} className="text-blue-400" /> Schedule Date & Time
            </label>
            <div className="flex items-center gap-2">
              <input
                id="scheduleDateTime"
                type="datetime-local"
                className="w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={scheduleDateTime}
                onChange={(e) => setScheduleDateTime(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setScheduleDateTime(getISTTime())}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 text-sm focus:outline-none"
              >
                Now
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700"
            >
              Create Campaign
            </button>
          </div>
          <div className="mb-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-full bg-gray-600 text-white py-2 rounded-lg shadow hover:bg-gray-700"
            >
              Back to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
