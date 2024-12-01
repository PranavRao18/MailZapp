import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const url = isLogin
      ? "http://localhost:3000/auth/login"
      : "http://localhost:3000/auth/register";

    const body = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" },
      });

      const data = response.data;

      if (isLogin) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert("Registration successful! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 blur-xl opacity-30 rounded-lg"></div>
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {isLogin ? "Welcome Back to MailZapp!" : "Join the MailZapp Community"}
        </h2>

        {error && (
          <p className="text-red-500 text-center bg-red-900 bg-opacity-20 py-2 px-4 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="relative">
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700 text-gray-200 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
                placeholder="Your Name"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
              placeholder="Your Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-lg hover:bg-purple-700 transform transition duration-150 ease-in-out hover:scale-105"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-6 relative">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:text-purple-300 hover:underline transition"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
