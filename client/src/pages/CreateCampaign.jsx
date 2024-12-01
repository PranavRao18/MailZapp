import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
// import { decode } from "jwt-decode";


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
      alert("Please provide a prompt for the AI to generate content.");
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

    // Check if required fields are filled
    if (
      !campaignName ||
      !recipients ||
      !emailContent ||
      !subject ||
      !scheduleDateTime
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    // Get the token from localStorage
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("User not authenticated.");
      return;
    }

    // Decode the token to get user information (e.g., userId)
    // const decodedToken = decode(token);
    // const userId = decodedToken.userId; // Assuming userId is in the token

    try {
      // Send the token in the headers
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
          userId, // Include the user ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in Authorization header
          },
        }
      );

      alert("Campaign created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("Failed to create campaign.");
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create a New Campaign
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Campaign Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="campaignName">
              Campaign Name
            </label>
            <input
              id="campaignName"
              type="text"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Enter campaign name"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </div>

          {/* Recipients */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="recipients">
              To (Recipients - comma-separated emails)
            </label>
            <textarea
              id="recipients"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="e.g., user1@example.com, user2@example.com"
              rows="3"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            />
          </div>

          {/* CC Recipients */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="ccRecipients">
              CC (Optional - comma-separated emails)
            </label>
            <textarea
              id="ccRecipients"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="e.g., cc1@example.com, cc2@example.com"
              rows="2"
              value={ccRecipients}
              onChange={(e) => setCcRecipients(e.target.value)}
            />
          </div>

          {/* BCC Recipients */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bccRecipients">
              BCC (Optional - comma-separated emails)
            </label>
            <textarea
              id="bccRecipients"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="e.g., bcc1@example.com, bcc2@example.com"
              rows="2"
              value={bccRecipients}
              onChange={(e) => setBccRecipients(e.target.value)}
            />
          </div>

          {/* Email Subject */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subject">
              Email Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
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
                className="w-full bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700"
              >
                Generate Email Content with AI
              </button>
            </div>
          ) : (
            <>
              {/* AI Prompt */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="aiPrompt">
                  AI Prompt
                </label>
                <textarea
                  id="aiPrompt"
                  className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                  placeholder="Provide a detailed prompt for AI"
                  rows="4"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                />
                <button
                  type="button"
                  onClick={generateEmailContent}
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                  disabled={isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate with AI"}
                </button>
              </div>
            </>
          )}

          {/* Email Content */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="emailContent">
              Email Content
            </label>
            <textarea
              id="emailContent"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="Write your email content here or generate with AI"
              rows="6"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />
          </div>

          {/* Schedule Date and Time */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="scheduleDateTime">
              Schedule Date and Time
            </label>
            <input
              id="scheduleDateTime"
              type="datetime-local"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              value={scheduleDateTime}
              onChange={(e) => setScheduleDateTime(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700"
          >
            Create Campaign
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-600 hover:underline"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
