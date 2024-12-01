import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or email service)
    console.log(formData);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6">Contact Us</h1>
        <p className="text-sm text-gray-300 mb-6 z-10">
          We love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-md font-semibold mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
