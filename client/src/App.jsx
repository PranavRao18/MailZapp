import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Insights from "./pages/Insights";
import Landing from "./pages/Landing";
import AuthPage from "./pages/AuthPage";
import About from "./pages/About";

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
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
