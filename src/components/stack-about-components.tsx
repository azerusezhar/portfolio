"use client";
import { useState, useEffect } from "react";
import { featuredTools } from "@/data/tools";
import React from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function StackAbout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedTools = isMobile
    ? featuredTools.slice(0, 3)
    : featuredTools.slice(0, 6);

  return (
    <div className="text-white mt-[6rem] rounded-lg shadow-md w-full mx-auto">
      <div className="flex justify-between items-center max-w-5xl ">
        <h2 className="font-semibold font-satoshi text-5xl mb-4">Stack</h2>
        <a
          href="#Featured-Project"
          className="relative text-white cursor-pointer flex items-center gap-2 font-sans group"
        >
          View All
          <span className="relative w-4 h-4">
            <ArrowDownRight className="absolute inset-0 w-4 h-4 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-90" />
            <ArrowRight className="absolute inset-0 w-4 h-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100" />
          </span>
          <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out w-full group-hover:w-1/2" />
        </a>
      </div>

      <p className="text-gray-400 text-[1.09rem] mb-4 font-sans">
        A collection of frameworks, libraries, and tools that I rely on daily to
        build, optimize, and enhance my projects.
      </p>
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-4`}>
        {displayedTools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg transition-transform duration-300 hover:scale-110"
          >
            {tool.icon &&
              React.createElement(tool.icon, {
                className:
                  "w-10 h-10 rounded-lg border-2 border-dashed border-gray-500 p-1",
              })}
            <div>
              <p className="text-white font-medium text-base font-satoshi">
                {tool.name}
              </p>
              <p className="text-gray-400 text-xs font-sans">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
