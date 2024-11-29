import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Insights from "./pages/Insights";
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
