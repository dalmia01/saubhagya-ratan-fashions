"use client";

import { useState } from "react";

export default function ContactPage({ color = "black" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            Have a question or need assistance? Send us a message and we’ll get
            back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-500 h-32 resize-none"
              required
            />
            <button
              type="submit"
              className={`inline-block px-6 py-3 rounded border-2 font-semibold
        border-${color}-600 text-${color}-600
        hover:bg-${color}-600 hover:text-${color} cursor-pointer
        transition-colors`}
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-gray-700 space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:support@yourshop.com"
                className="text-green-600 hover:underline"
              >
                support@yourshop.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919876543210"
                className="text-green-600 hover:underline"
              >
                +91 98765 43210
              </a>
            </p>
            <p>Address: 123 Main Street, City, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
