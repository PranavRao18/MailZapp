import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import { HiOutlineMail, HiLockClosed, HiServer, HiShieldCheck } from "react-icons/hi";

const EmailSettings = () => {
    const [formData, setFormData] = useState({
        smtpEmail: "",
        smtpPassword: "",
        smtpHost: "smtp.gmail.com", // Default
        smtpPort: 587, // Default
    });

    const [message, setMessage] = useState("");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axiosInstance.get("/users/email-settings", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach token in Authorization header
                    },
                });
                if (response.data) {
                    setFormData(response.data.emailSettings);
                }
            } catch (error) {
                console.error("Error fetching email settings:", error);
            }
        };

        fetchSettings();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/users/email-settings", formData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Attach token in Authorization header
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error("Error saving email settings:", error);
            setMessage("Failed to save settings.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black flex items-center justify-center">
            <div className="w-full max-w-md bg-gray-700 shadow-lg rounded-lg p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Email Settings</h2>

                {message && (
                    <p
                        className={`text-center text-sm font-medium mb-4 ${
                            message.includes("Failed") ? "text-red-500" : "text-green-500"
                        }`}
                    >
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="smtpEmail"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            <HiOutlineMail className="inline mr-2 text-lg text-indigo-500" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="smtpEmail"
                            id="smtpEmail"
                            value={formData.smtpEmail}
                            onChange={handleChange}
                            required
                            className="w-full border-2 border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="smtpPassword"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            <HiLockClosed className="inline mr-2 text-lg text-indigo-500" />
                            Password
                        </label>
                        <input
                            type="password"
                            name="smtpPassword"
                            id="smtpPassword"
                            value={formData.smtpPassword}
                            onChange={handleChange}
                            required
                            className="w-full border-2 border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* SMTP Host */}
                    <div>
                        <label
                            htmlFor="smtpHost"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            <HiServer className="inline mr-2 text-lg text-indigo-500" />
                            SMTP Host
                        </label>
                        <input
                            type="text"
                            name="smtpHost"
                            id="smtpHost"
                            value={formData.smtpHost}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* SMTP Port */}
                    <div>
                        <label
                            htmlFor="smtpPort"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            <HiShieldCheck className="inline mr-2 text-lg text-indigo-500" />
                            SMTP Port
                        </label>
                        <input
                            type="number"
                            name="smtpPort"
                            id="smtpPort"
                            value={formData.smtpPort}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white rounded-md px-4 py-3 hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Save Settings
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmailSettings;
