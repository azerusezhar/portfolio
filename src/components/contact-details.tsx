"use client"

import { Copy, Mail, Phone, Github, Instagram } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { toast } from "sonner";

export default function ContactSection() {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />, 
      label: "Email", 
      value: "azerusezhar05@gmail.com", 
      copyable: true
    },
    {
      icon: <Phone className="w-5 h-5" />, 
      label: "Phone", 
      value: "+62 851 4250 5388", 
      copyable: true
    },
    {
      icon: <Instagram className="w-5 h-5" />, 
      label: "Instagram", 
      value: "@azerus.e", 
      link: "https://www.instagram.com/azerus.e", 
      external: true
    },
    {
      icon: <Github className="w-5 h-5" />, 
      label: "Github", 
      value: "@azerusezhar", 
      link: "https://github.com/azerusezhar", 
      external: true
    },
    {
      icon: <FaDiscord className="w-5 h-5" />, 
      label: "Discord", 
      value: "Azerus", 
      link: "https://discord.com/Azerus", 
      external: true
    }
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div className="w-full mx-auto p-4 space-y-4">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center rounded-lg px-4 py-2 text-gray-200 border border-gray-800 transition-all duration-300 hover:bg-gray-700 hover:border-gray-600 hover:shadow-lg cursor-pointer"
          onClick={() => item.copyable ? copyToClipboard(item.value, item.label) : item.external && window.open(item.link, "_blank")}
        >
          <div className="flex items-center flex-1">
            <span className="text-gray-400 mr-4">{item.icon}</span>
            <div className="flex gap-8 text-justify">
              <span className="text-gray-200 font-satoshi">{item.label}</span>
              <span className="text-gray-400 font-sans">{item.value}</span>
            </div>
          </div>

          {item.copyable && (
            <button
              onClick={(e) => { e.stopPropagation(); copyToClipboard(item.value, item.label); }}
              className="p-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
              aria-label={`Copy ${item.label}`}
            >
              <Copy className="w-5 h-5 text-gray-400" />
            </button>
          )}

          {item.external && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
              aria-label={`Visit ${item.label}`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}