"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      toast.success(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-gray-800 p-4 md:p-6 rounded-lg w-full  mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 font-satoshi">Send a Message</h2>
      <p className="text-gray-400 mb-4 font-sans text-sm md:text-base">Feel free to reach out! Fill in the form below, and I will get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4 font-sans space-y-4">
          <div className="w-full md:w-1/2">
            <label className="block text-gray-300 mb-1 text-sm md:text-base">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 bg-[#1A1A1A] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white-500 text-sm md:text-base"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-gray-300 mb-1 text-sm md:text-base">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 bg-[#1A1A1A] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white-500 text-sm md:text-base"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-300 mb-1 text-sm md:text-base">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 bg-[#1A1A1A] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white-500 text-sm md:text-base"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#F6F6F6] text-[#121212] font-semibold font-sans rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#121212] transition-all duration-300 hover:bg-[#121212] hover:text-white hover:border-[#F6F6F6] cursor-pointer text-sm md:text-base"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}