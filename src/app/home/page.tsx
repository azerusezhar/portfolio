"use client";

import Footer from "@/components/footer";
import { ArrowDownRight, ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    // Featured projects data
    const featuredProjects = [
        {
            id: 1,
            title: "Kasir Kita",
            description: "Aplikasi kasir dengan sistem frontend dan backend. Dibangun dengan JavaScript.",
            image: "/images/kasirkita.png",
            tags: ["JavaScript", "Frontend", "Backend"],
            githubUrl: "https://github.com/azerusezhar/kasir-uuk",
            slug: "kasir-kita"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Personal portfolio website built with Next.js and Tailwind CSS",
            image: "/images/portfolio.png",
            tags: ["Next.js", "React", "Tailwind CSS"],
            githubUrl: "#",
            slug: "portfolio-website"
        }
    ];

    return (
        <div className="flex flex-row h-screen w-full bg-[#121212] overflow-hidden">
            {/* Main Content - This will be scrollable */}
            <main className="flex-1 overflow-y-auto w-full">
                <section className="w-full bg-[#121212] shadow-md p-8 md:p-16 lg:p-22">
                    {/* Hero Section */}
                    <section id="Hero-Section" className="w-full">
                        <div className="inline-flex items-center bg-[#242424] text-white text-sm font-sans font-medium px-4 py-2 rounded-xl shadow-lg w-auto">
                            <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse shadow-green-400"></div>
                            Aspiring Web & Mobile Developer | Open to Collaboration
                        </div>
                        <h1 className="text-5xl text-white font-bold mb-4 mt-8 font-satoshi">
                            Hey, I'm Azerus.
                        </h1>
                        <h1 className="text-5xl text-white font-bold mb-4 font-satoshi">
                            I'm a Web & Mobile Developer
                        </h1>
                        <p className="text-gray-400 mb-4 font-sans max-w-xl">
                            I craft innovative web and mobile applications that deliver
                            seamless user experiences. Let's collaborate and build something
                            amazing together!
                        </p>
                        <div className="flex gap-4 mb-4">
                            <a
                                href=""
                                className="text-black px-4 py-2.5 rounded-md bg-[#F6F6F6] font-semibold font-sans text-sm border 
                                hover:bg-black hover:text-white transition duration-400 ease-in-out"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#Featured-Project"
                                className="relative text-white cursor-pointer flex items-center gap-2 font-sans group"
                            >
                                About Me
                                <span className="relative w-4 h-4">
                                    <ArrowDownRight className="absolute inset-0 w-4 h-4 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-90" />
                                    <ArrowRight className="absolute inset-0 w-4 h-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100" />
                                </span>
                                <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out w-full group-hover:w-1/2" />
                            </a>
                        </div>
                        <div className="w-full border-t border-gray-700 my-12"></div>
                    </section>
                    
                    {/* Featured Projects Section */}
                    <section id="Featured-Project" className="mb-16">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-white text-3xl font-satoshi font-medium">Selected Projects</h1>
                            <Link
                                href="/projects"
                                className="relative text-white cursor-pointer flex items-center gap-2 font-sans group"
                            >
                                All Projects
                                <span className="relative w-4 h-4">
                                    <ArrowDownRight className="absolute inset-0 w-4 h-4 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-90" />
                                    <ArrowRight className="absolute inset-0 w-4 h-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100" />
                                </span>
                                <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out w-full group-hover:w-1/2" />
                            </Link>
                        </div>
                        
                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredProjects.map((project) => (
                                <div key={project.id} className="bg-[#1a1a1a] rounded-xl border border-gray-700 overflow-hidden hover:border-gray-500 transition-all duration-300">
                                    <div className="h-48 bg-gray-800 relative">
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
                                            <a href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors" 
                                                target="_blank" rel="noopener noreferrer">
                                                <Github size={20} />
                                            </a>
                                            <Link 
                                                href={`/projects/${project.slug}`}
                                                className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                                            >
                                                Lihat Selengkapnya <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
}
