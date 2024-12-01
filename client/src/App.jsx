import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Insights from "./pages/Insights";
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import CreateCampaign from "./pages/CreateCampaign";
import Pricing from "./pages/Pricing"; 
import About from "./pages/About";
import EmailSettings from "./pages/Settings";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page without Navbar */}
        <Route path="/" element={<Landing />} />

        {/* Pages with Navbar */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-gray-50 text-gray-900">
               {/* <Navbar /> */} 
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/settings" element={<EmailSettings />} />
                <Route path="/contact-us" element={<ContactUs />} />

              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
