"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to get a response?",
    answer: "I typically respond within 24-48 hours. If it's urgent, please mention it in your message.",
  },
  {
    question: "Can I contact you for collaborations?",
    answer: "Yes! I'm open to collaborations, freelance projects, and exciting tech opportunities.",
  },
  {
    question: "Do you offer technical support?",
    answer: "I can help with general guidance, but for in-depth support, let's discuss details first.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8 border-t border-gray-700 pt-6">
      <h2 className="text-2xl font-semibold text-white mb-4 font-satoshi">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4 bg-[#1A1A1A]">
            <button
              className="flex justify-between items-center w-full text-white font-semibold text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-blue-400">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-400 transition-opacity duration-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
