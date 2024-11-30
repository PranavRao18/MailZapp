import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

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
                console.log(response.data)
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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Email Settings</h2>
                {message && (
                    <p
                        className={`text-center text-sm font-medium mb-4 ${message.includes("Failed") ? "text-red-500" : "text-green-500"
                            }`}
                    >
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="smtpEmail"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="smtpEmail"
                            id="smtpEmail"
                            value={formData.smtpEmail}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="smtpPassword"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="smtpPassword"
                            id="smtpPassword"
                            value={formData.smtpPassword}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="smtpHost"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            SMTP Host
                        </label>
                        <input
                            type="text"
                            name="smtpHost"
                            id="smtpHost"
                            value={formData.smtpHost}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="smtpPort"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            SMTP Port
                        </label>
                        <input
                            type="number"
                            name="smtpPort"
                            id="smtpPort"
                            value={formData.smtpPort}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        Save Settings
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmailSettings;
