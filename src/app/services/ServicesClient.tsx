"use client";
import React from "react";
import Footer from "@/components/footer";
import CardSkill from "@/components/card-skill";
import ProjectExperienceCard from "@/components/project-experience";

const ServicesClient = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#121212] overflow-hidden">
      <main className="flex-1 overflow-y-auto w-full">
        <section className="w-full bg-[#121212] p-12 md:p-10 lg:p-22">
          {/* Services Section */}
          <section
            id="Services-Section"
            className="w-full pt-16 md:pt-22 lg:pt-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 font-satoshi">
              Skill & Expertise
            </h1>
            <p className="text-gray-400 mb-4 font-sans max-w-xl">
              I possess diverse capabilities, skills, and expertise that I can
              provide for you.
            </p>
            <div className="w-full border-t border-gray-700 my-6 md:my-8"></div>
            <CardSkill />
            <ProjectExperienceCard />
          </section>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ServicesClient;
