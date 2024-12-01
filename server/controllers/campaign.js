const Campaign = require("../models/Campaign");
const axios = require('axios');

async function triggerKestraFlow(inputData) {
    const kestraUrl = 'http://localhost:8080';

    try {
        const response = await axios.post(`${kestraUrl}/api/v1/executions/io.kestra.example/python-example`, inputData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Kestra flow triggered successfully:', response.data);
    } catch (error) {
        console.error('Error triggering Kestra flow:', error);
        throw error;
    }
}

const createCampaign = async (req, res) => {
    try {
        const { name, recipients, subject, content, scheduleDateTime } = req.body;

        if (!name || !recipients || !subject || !content || !scheduleDateTime) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        const user = req.user;

        const newCampaign = new Campaign({
            name,
            recipients,
            subject,
            content,
            scheduleDateTime,
            user: req.user._id,
        });
        await newCampaign.save();

        const scheduleDate = new Date(scheduleDateTime);
        const currentDate = new Date();
        const delayInSeconds = Math.floor((scheduleDate - currentDate) / 1000);

        const kestraInputData = {
            smtp_email: user.emailSettings.smtpEmail,
            smtp_password: user.emailSettings.smtpPassword,
            recipient: recipients.join(", "),
            subject,
            body: "Dear all, We are excited to invite you to participate in our upcoming hackathon, a 24-hour coding marathon where you will have the opportunity to showcase your skills, learn from others, and win exciting prizes.",
            delay: delayInSeconds,
            campaign_id: newCampaign._id.toString()
        };

        await triggerKestraFlow(kestraInputData);

        res.status(201).json({ message: "Campaign created successfully.", campaign: newCampaign });
    } catch (error) {
        console.error("Error creating campaign:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find({ user: req.user._id });
        return res.status(200).json(campaigns);
    } catch (error) {
        console.error("Error fetching campaigns:", error);
        if (!res.headersSent) {
            return res.status(500).json({ message: "Internal server error." });
        }

        console.warn("Attempted to send response after headers sent.");
    }
};


const generateAIContent = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "AI prompt is required." });
        }

        const groqResponse = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                messages: [
                    {
                        "role": "system",
                        "content": "Provide only the body of an email for given prompts. Dont give anything else. Only the body of an email. Dont enclose them in inverted commas. You can only use commas and no other special characters."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }],
                model: "llama3-8b-8192"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`, 
                },
            }
        );
        const generatedContent = groqResponse.data.choices[0].message.content;
        res.status(200).json({ content: generatedContent });

    } catch (error) {
        console.error("Error generating AI content:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = generateAIContent;


module.exports = { createCampaign, getAllCampaigns, generateAIContent };
