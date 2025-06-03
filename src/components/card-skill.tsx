import React from "react";
import { Laptop, Smartphone } from "lucide-react";

// Service data
const services = [
  {
    title: "Web Development",
    description:
      "I build responsive, high-performance, and scalable web applications using modern technologies to bring your ideas to life.",
    startingPrice: "Let's Discuss",
    icon: (
      <div className="p-3 border border-gray-500 rounded-lg inline-flex items-center justify-center bg-[#1a1a1a] shadow-[0_0_8px_rgba(255,255,255,0.2)]">
        <Laptop key="laptop" size={32} className="text-white" />
      </div>
    ), 
    link: "/services/web",
  },
  {
    title: "Mobile Development",
    description:
      "I develop fast, intuitive, and cross-platform mobile apps that provide seamless experiences for users on both iOS and Android.",
    startingPrice: "Let's Discuss",
    icon: (
      <div className="p-3 border border-gray-500 rounded-lg inline-flex items-center justify-center bg-[#1a1a1a] shadow-[0_0_8px_rgba(255,255,255,0.2)]">
        <Smartphone key="smartphone" size={32} className="text-white" />
      </div>
    ), 
    link: "/services/mobile",
  },
];

const CardSkill: React.FC = React.memo(() => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-700 shadow-md transition-all duration-300 hover:shadow-xl hover:border-gray-500 hover:scale-105"
        >
          {/* Starting Price */}
          <div className="inline-flex items-center font-sans text-gray-400 text-sm mb-4 border border-gray-700 py-1.5 px-3 rounded-md">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse shadow-green-400"></div>
            {service.startingPrice}
          </div>

          {/* Icon */}
          <div className="flex justify-start">{service.icon}</div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-white font-satoshi mt-2">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mt-3 mb-8 font-sans">
            {service.description}
          </p>

          {/* Call to Actions */}
          <div className="flex gap-2">
            <a
              href="/contact"
              className="text-black px-4 py-2.5 rounded-md bg-[#F6F6F6] font-semibold font-sans text-sm border border-gray-700
                        hover:bg-[#1a1a1a] hover:text-white hover:border-gray-500 transition duration-300 ease-in-out"
            >
              Get In Touch
            </a>
          </div>
        </div>
      ))}
    </section>
  );
});

CardSkill.displayName = "CardSkill";

export default CardSkill;
