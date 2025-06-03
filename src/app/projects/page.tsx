"use client";

import Footer from "@/components/footer";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  // Real projects data
  const projects = [
    {
      id: 1,
      title: "Kasir Kita",
      description: "Point of sale application with frontend and backend systems. Built with JavaScript.",
      image: "/images/kasirkita.png",
      tags: ["JavaScript", "Frontend", "Backend"],
      githubUrl: "https://github.com/azerusezhar/kasir-uuk",
      liveUrl: "",
      slug: "kasir-kita"
    },
    {
      id: 2,
      title: "Monexa",
      description: "Flutter application for personal finance management with multi-platform support.",
      image: "/images/monexa.png",
      tags: ["Flutter", "Dart", "Mobile App", "Cross-platform"],
      githubUrl: "https://github.com/azerusezhar/monexa",
      liveUrl: "",
      slug: "monexa"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/images/portfolio.png",
      tags: ["Next.js", "React", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      slug: "portfolio-website"
    }
  ];

  return (
    <div className="flex flex-row h-screen w-full bg-[#121212] overflow-hidden">
      {/* Main Content - This will be scrollable */}
      <main className="flex-1 overflow-y-auto w-full">
        <section className="w-full bg-[#121212] shadow-md p-8 md:p-16 lg:p-22">
          {/* Hero Section */}
          <section id="projects-hero" className="w-full">
            <div className="inline-flex items-center bg-[#242424] text-white text-sm font-sans font-medium px-4 py-2 rounded-xl shadow-lg w-auto">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse shadow-green-400"></div>
              Portfolio Showcase
            </div>
            <h1 className="text-5xl text-white font-bold mb-4 mt-8 font-satoshi">
              My Projects
            </h1>
            <p className="text-gray-400 mb-8 font-sans max-w-xl">
              Explore my recent works and projects that showcase my skills and experience
              in web and mobile development.
            </p>
            <div className="w-full border-t border-gray-700 my-12"></div>
          </section>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-[#1a1a1a] rounded-xl border border-gray-700 overflow-hidden hover:border-gray-500 transition-all duration-300">
                <div className="h-48 bg-gray-800 relative">
                  {/* Use Image component instead of placeholder text */}
                  <Image 
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-satoshi font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-[#242424] text-gray-300 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-3">
                      <a href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors" 
                        target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-gray-400 hover:text-white transition-colors" 
                          target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      See More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
          
          {/* Contact CTA */}
          <section className="mt-16 bg-[#1a1a1a] p-8 rounded-2xl border border-gray-700 text-center">
            <h2 className="text-2xl font-satoshi font-bold text-white mb-4">Interested in working together?</h2>
            <p className="text-gray-400 mb-6">I&apos;m always open to discussing new projects and opportunities.</p>
            <Link 
              href="/contact"
              className="text-black px-6 py-3 rounded-md bg-[#F6F6F6] font-semibold font-sans text-sm border 
                hover:bg-black hover:text-white transition duration-400 ease-in-out inline-flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
          </section>
        </section>
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
} 