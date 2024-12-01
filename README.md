# 📧 **MailZapp**: Revolutionizing Email Campaigns with AI and Automation 🚀

Welcome to **MailZapp**, a cutting-edge AI-driven email marketing platform that helps small businesses and marketers elevate their email campaigns. MailZapp enables users to effortlessly create personalized email campaigns, automate workflows, and gain actionable insights, all powered by artificial intelligence (AI) and automation. 💡

This documentation will guide you through MailZapp's features, setup instructions, and how to leverage AI and automation to enhance your email marketing efforts. ✨

---

## 📜 Table of Contents


1. [Introduction](#Introduction)
2. [Features](#Features)
   - [AI-Generated Emails](#ai-generated-emails)
   - [Pay-Per-Use Pricing](#pay-per-use-pricing)
   - [Actionable Insights](#actionable-insights)
   - [Automation with Kestra](#automation-with-kestra)
3. [Tech Stack](#tech-stack)
4. [How to Run the Project](#how-to-run-the-project)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
5. [Screenshots](#screenshots)
6. [Video](#video)
7. [The Team](#the-team)
---

## Introduction

Running a small business comes with countless responsibilities, leaving little time for crafting impactful email marketing campaigns. Traditional tools are often too complex, time-consuming, or expensive for small-scale business owners. That’s where MailZapp comes in, transforming email marketing into a simple, stress-free, and highly effective experience. 🚀

MailZapp is an AI-powered email marketing platform specifically designed to meet the needs of small-scale businesses and independent marketers. By combining the power of artificial intelligence, workflow automation, and real-time analytics, MailZapp empowers users to create professional email campaigns without needing specialized marketing skills or large budgets. 💡

What makes MailZapp different?
1. Effortless Campaign Creation:
Small business owners don’t have time to write emails from scratch. MailZapp’s AI-driven email generator creates personalized, professional emails in seconds, tailored to your audience’s preferences and behavior.

2. Flexible Pay-Per-Use Pricing:
Forget costly subscriptions. MailZapp offers an affordable pay-per-use model, so you only pay for what you use—ideal for small businesses operating on tight budgets. 💰

3. Automated Workflows for Time Savings:
Automation powered by Kestra takes care of repetitive tasks like email scheduling, list segmentation, and reporting. This allows you to focus on running your business while MailZapp handles the heavy lifting. ⏱️

4. User-Friendly Interface:
MailZapp is built for simplicity, ensuring anyone—regardless of technical skill—can use it. With an intuitive drag-and-drop editor and pre-designed templates, creating stunning email campaigns has never been easier. 🎨

Take the stress out of email marketing with MailZapp and focus on what you do best: growing your business. 🌟

---

## Features

- ### **AI-Generated Emails**
MailZapp uses **AI** to generate personalized, professional email content instantly. Our AI algorithms understand your audience's preferences and create compelling emails that are more likely to generate engagement. 📈

- **Generate Emails Instantly**: No need to spend time writing email content—our AI handles it for you. ✍️
- **Personalization**: Automatically customize emails based on user-specific data like name, location, purchase history, and more. 💌
- **Optimized for Engagement**: AI creates subject lines and email body content designed to boost open and click-through rates. 📊

- ### **Pay-Per-Use Pricing**
MailZapp offers a **flexible pay-per-use** pricing model, allowing businesses to pay only for the emails they send. This eliminates expensive subscriptions and offers a more scalable solution for growing businesses. 💡

- **Affordable for Small Businesses**: Pay only for the credits you use with no upfront costs. 💰
- **Flexible**: Scale your campaigns as needed with additional credits available for purchase. 🔄

- ### **Actionable Insights**
Track the success of your campaigns with **real-time analytics** and **actionable insights**. 📈

- **Open & Click Rates**: Monitor how many recipients are opening and interacting with your emails. 📩
- **A/B Testing**: Run experiments with different subject lines, email content, or strategies to optimize your campaigns. 🔬
- **Performance Insights**: Receive suggestions on how to improve your future email campaigns based on data-driven performance metrics. 🎯

- ### **Automation with Kestra**
**Kestra** is integrated into MailZapp to automate workflows and enhance the efficiency of your email campaigns. With Kestra, you can automate tasks like email scheduling, list segmentation, and reporting, allowing you to focus on strategy and creativity while automation handles the repetitive tasks. 🛠️

- **Automated Email Scheduling**: Set up email campaigns to be sent automatically at specific times or intervals, ensuring consistent engagement with your audience. ⏰
- **Seamless Workflow Integration**: Integrate Kestra with your existing tools and services to streamline your email marketing efforts. 🔗
- **Efficient Data Processing**: Automate data cleaning, list management, and segmentation, ensuring that your emails are sent to the right audience at the right time. 🧹

---

## Tech Stack

MailZapp is built with modern, reliable technologies that ensure scalability, performance, and ease of use. 🖥️

- **Frontend**: React.js, Tailwind CSS 🌐
- **Backend**: Node.js, Express.js 🔧
- **Database**: MongoDB 💾
- **Authentication**: JSON Web Tokens (JWT) 🔐
- **AI Integration**: LLAMA 🤖
- **Automation**: **Kestra** (for workflow automation) ⚙️

---

## How to Run the Project

### Prerequisites

Before running **MailZapp** locally, make sure you have the following installed on your machine: 

- **Node.js** (v14 or higher) 🔑
- **npm** (Node Package Manager) 📦
- **MongoDB** (for local development) or use a cloud-based MongoDB service like MongoDB Atlas. 🌐
- **Kestra Setup** (for automating workflows and managing tasks) 🔄

---

### Installation

1. **Clone the Repository**  
   First, clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/MailZapp.git
   cd MailZapp

2. **Install Dependencies**
   Inside the project folder, install the required dependencies for both the frontend and backend:
   ```bash
   npm install
   cd client
   npm install
   
  3. **Set Up Environment Variables**
     Create a .env file in the root directory and configure the following environment variables:
     ```env
     MONGODB_URI=<your_mongo_db_connection_string>
     JWT_SECRET=<your_jwt_secret_key>

---

### Running the Project

1. **Start the Backend**
   This will start the Express server at http://localhost:5000.
   Run the following command in the root directory:
   ```bash
   npm run dev

2. **Start the Frontend**
   Navigate to the client directory and run:
   ```bash
   npm start
This React app will run at http://localhost:3000.

3 **Start Kestra Automation**
Ensure your Kestra instance is running and properly configured. Refer to the [Kestra Documentation](https://kestra.io/) for setup details.

---

## Screenshots
![Screenshot (327)](https://github.com/user-attachments/assets/7088b1bb-6fba-47dc-94b1-6724fab38fd5)
![Screenshot (328)](https://github.com/user-attachments/assets/b687583c-69d9-4351-a077-71b39aa5e9d9)
[Screenshot (329)](https://github.com/user-attachments/assets/d6234f91-8ddc-4e92-96a8-14c3e9d59be2)
![Screenshot (330)](https://github.com/user-attachments/assets/70dd1257-59a9-4d92-b749-246664f82e22)
![Screenshot (331)](https://github.com/user-attachments/assets/ac5faa9a-5329-487d-bcf9-b76c36e0fcb2)
![Screenshot (332)](https://github.com/user-attachments/assets/a80aeff4-30fb-4aab-84d0-d57769463e11)
![Screenshot (333)](https://github.com/user-attachments/assets/77a0bc05-f63e-4d07-9620-74ac495c107b)
![Screenshot (334)](https://github.com/user-attachments/assets/92f0a1e9-8ede-421d-9c8c-5d448442b229)
![Screenshot (335)](https://github.com/user-attachments/assets/f9c8f286-5e7d-4fae-af99-da86d599479f)
![Screenshot (336)](https://github.com/user-attachments/assets/773506f0-c189-4137-94a7-75a169366618)
![Screenshot (337)](https://github.com/user-attachments/assets/aaf2bdc7-25ee-4908-b9e9-ad30cd97d141)
![Screenshot (339)](https://github.com/user-attachments/assets/204e494c-b30a-4aa4-8c51-5c10ad48ce4a)
![Screenshot (340)](https://github.com/user-attachments/assets/e7a6529b-d6ea-44f2-b616-096ca202f9a8)
![Screenshot (341)](https://github.com/user-attachments/assets/0680c1c9-1ef1-4559-95bc-b4e438d9c0a0)

## Video
[Submission video](https://www.youtube.com/watch?v=ai3feOKX9j0)

## The Team!


### 1. [**Pranav Rao**](https://github.com/PranavRao18)
   - **Role**: Backend Developer  
   - **Skills**: Node.js, Express.js, MongoDB, AI Integration
   - **About**: Pranav is a backend developer focused on building robust and scalable server-side applications.
   - [GitHub Profile](https://github.com/PranavRao18)  
   - [LinkedIn Profile](https://www.linkedin.com/in/pranav-rao-b00926223/)

### 2. [**Athmika S**](https://github.com/athmika26)
   - **Role**: Frontend Developer 
   - **Skills**: React.js, Tailwind CSS
   - **About**: Athmika is passionate about creating engaging, user-friendly web experiences.
   - [GitHub Profile](https://github.com/athmika26)  
   - [LinkedIn Profile](https://www.linkedin.com/in/athmika-s-807617271/)






