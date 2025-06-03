import React from "react";
import { MessageCircle } from "lucide-react";

const experienceData = {
  totalProjects: "5+",
  experienceYears: "1+ years",
  location: "Malang, Indonesia",
};

const ProjectExperienceCard: React.FC = React.memo(() => {
  return (
    <section className="bg-[#1a1a1a] mt-12 p-8 rounded-2xl border border-gray-700 shadow-md text-white">
      <div className="flex flex-col md:flex-row justify-between items-center text-center w-full">
        {/* Location */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold">Based In</h3>
          <p className="text-gray-400">{experienceData.location}</p>
        </div>
        
        <div className="hidden md:block border-r border-gray-600 h-12"></div>
        
        {/* Experience */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold">{experienceData.experienceYears}</h3>
          <p className="text-gray-400">Years of Experience</p>
        </div>
        
        <div className="hidden md:block border-r border-gray-600 h-12"></div>
        
        {/* Total Projects */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold">{experienceData.totalProjects}</h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 mt-6 text-center">
        I&apos;m always open to new opportunities, collaborations, and discussions.
      </p>
      
      {/* Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <a
          href="/contact"
          className="flex items-center gap-2 text-black px-4 py-2.5 rounded-md bg-[#F6F6F6] font-semibold font-sans text-sm border border-gray-700 hover:bg-[#1a1a1a] hover:text-white hover:border-gray-500 transition duration-300 ease-in-out"
        >
          <MessageCircle size={20} /> Contact Me
        </a>
      </div>
    </section>
  );
});

ProjectExperienceCard.displayName = "ProjectExperienceCard";

export default ProjectExperienceCard;
