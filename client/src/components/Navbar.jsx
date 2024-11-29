import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MailZapp</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/campaigns" className="hover:underline">Campaigns</Link>
          <Link to="/insights" className="hover:underline">Insights</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
