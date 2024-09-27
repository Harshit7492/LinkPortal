import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would send the formData to the backend API here
    // For now, let's log it and show a success toast
    console.log("Form Data Submitted: ", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {/* Contact Form */}
      <section className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
        <div className="flex justify-center space-x-6">
        <a href="https://github.com/Harshit7492" target="_blank" rel="noopener noreferrer">
  <img className="w-6 mr-2" src="/svg/github.svg" alt="GitHub" />
</a>
  <a href="https://www.linkedin.com/in/harshit-singh8/">

        <img className="w-6 mr-2" src="/svg/lnkdn.svg" alt="" />
  </a>
  <a href="https://dev.to/harshit7492">

        <img className="w-6 mr-2" src="/svg/instagram.svg" alt="" />
  </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
