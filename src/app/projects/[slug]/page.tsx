"use client";

import { useParams, notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Image from "next/image";

// Complete project data
const projectsData = {
  "kasir-kita": {
    title: "Kasir Kita",
    description: "Point of sale application with frontend and backend systems. Built with JavaScript.",
    fullDescription: `Kasir Kita is my point of sale management system designed for small to medium businesses. 
      It serves as a comprehensive solution for tracking sales, managing inventory, and generating real-time reports.`,
    features: [
      "Intuitive and user-friendly interface with minimal learning curve",
      "Complete inventory management with stock alerts and tracking",
      "Transaction recording with customizable receipt generation",
      "Daily, weekly, and monthly sales reports with visual data presentation",
      "User management system with role-based access control"
    ],
    technologies: ["JavaScript", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    techStack: {
      frontend: ["JavaScript", "Vite", "Tailwind CSS", "HTML5"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      tools: ["Git", "Postman"]
    },
    developmentStatus: [
      "✅ User authentication and authorization",
      "✅ Product management features",
      "✅ Sales processing and receipt generation",
      "✅ Basic reporting functionalities",
      "⏳ Advanced analytics dashboard",
      "⏳ Inventory management improvements" 
    ],
    challenges: "The main challenge in building this application was creating an easy-to-use system while maintaining comprehensive features for business needs.",
    image: "/images/kasirkita.png",
    images: ["/images/kasirkita.png", "/images/kasirkita.png", "/images/kasirkita.png"],
    tags: ["JavaScript", "Frontend", "Backend"],
    githubUrl: "https://github.com/azerusezhar/kasir-uuk",
    liveUrl: ""
  },
  "monexa": {
    title: "Monexa",
    description: "Flutter application for personal finance management with multi-platform support.",
    fullDescription: `Monexa is my personal finance management application built with Flutter.
      It serves as a comprehensive solution for tracking expenses, managing budgets, and gaining insights into spending habits.`,
    features: [
      "Expense Tracking: Log and categorize your daily expenses",
      "Budget Management: Set and monitor spending budgets",
      "Financial Dashboard: View spending patterns with intuitive charts",
      "Transaction History: Complete history of all financial transactions",
      "User Profiles: Personalized user experience",
      "Secure Authentication: Login via Google or email",
      "Expense Categories: Organize transactions with customizable categories",
      "Expense Analysis: Get detailed insights with spending analytics",
      "Dark Mode: Eye-friendly dark theme support"
    ],
    technologies: ["Flutter", "Dart", "Supabase", "fl_chart"],
    techStack: {
      frontend: ["Flutter (Dart)"],
      backend: ["Supabase"],
      authentication: ["Google Sign-In", "Email"],
      dataVisualization: ["fl_chart"],
      database: ["Supabase (PostgreSQL migration planned)"]
    },
    developmentStatus: [
      "✅ Project setup and configuration",
      "✅ Authentication implementation",
      "✅ Basic UI components",
      "✅ Core expense tracking functionality",
      "⏳ Budget management features",
      "⏳ Financial analytics dashboard",
      "⏳ Data export capabilities"
    ],
    roadmap: [
      "Migrate database to PostgreSQL",
      "Implement BLoC pattern for state management",
      "Add multi-currency support",
      "Implement financial goals tracking",
      "Add recurring transactions",
      "Integrate with banking APIs",
      "Export financial reports",
      "Add biometric authentication",
      "Support for offline mode",
      "Cloud backup and restore",
      "Implement machine learning for spending pattern analysis"
    ],
    challenges: "Developing a responsive and consistent UI across various screen sizes and platforms was the main challenge in this project.",
    image: "/images/monexa.png",
    images: ["/images/monexa.png", "/images/monexa.png", "/images/monexa.png"],
    tags: ["Flutter", "Dart", "Mobile App", "Cross-platform"],
    githubUrl: "https://github.com/azerusezhar/monexa",
    liveUrl: "",
    contributors: [
      "Azerus Ezhar Abieza Wicaksana - Main Developer",
      "Cahya Adi Sanjaya - UI/UX Designer"
    ]
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS",
    fullDescription: `This portfolio website is my personal showcase built with Next.js and Tailwind CSS.
      It serves as a central hub for displaying my projects, achievements, and skills in a
      modern, interactive, and visually appealing manner.`,
    features: [
      "Responsive project showcase with dedicated pages for each project",
      "Interactive animations and smooth transitions for enhanced user experience",
      "Dynamic content rendering using React components",
      "Utility-first styling with Tailwind CSS for rapid UI development",
      "Mobile-first design ensuring a seamless experience on all devices"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      tools: ["TypeScript", "VS Code", "Git"],
      deployment: ["Vercel"]
    },
    challenges: "Creating a smooth user experience with optimal performance and fast page load times.",
    image: "/images/portfolio.png",
    images: ["/images/portfolio.png", "/images/portfolio.png", "/images/portfolio.png"],
    tags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLargeImage, setShowLargeImage] = useState(false);

  useEffect(() => {
    // Handle both old and new slug for Kasir Kita
    let projectData;
    if (slug === "kasir-uuk") {
      projectData = projectsData["kasir-kita"];
    } else {
      projectData = projectsData[slug as keyof typeof projectsData];
    }
    
    if (projectData) {
      setProject(projectData);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-row h-screen w-full bg-[#121212] overflow-hidden">
        <main className="flex-1 overflow-y-auto w-full">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-green-400 rounded-full animate-spin"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-row h-screen w-full bg-[#121212] overflow-hidden">
      <main className="flex-1 overflow-y-auto w-full">
        <section className="w-full bg-[#121212] shadow-md p-8 md:p-16 lg:p-22">
          {/* Header with Back Button and Badge */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="relative w-6 h-6 overflow-hidden">
                <ArrowLeft size={18} className="absolute inset-0 transform transition-transform group-hover:-translate-x-1" />
              </span>
              <span className="relative">
                Back to All Projects
                <span className="absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full opacity-50"></span>
              </span>
            </Link>
            
            <div className="inline-flex items-center bg-[#242424] text-white text-sm font-sans font-medium px-4 py-2 rounded-xl shadow-lg w-auto">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2 animate-pulse shadow-green-400"></div>
              Project Details
            </div>
          </div>

          {/* Hero Section */}
          <section className="w-full">
            <div className="flex flex-col-reverse md:flex-row gap-10">
              {/* Left column: Title, desc, tags */}
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 font-satoshi">
                  {project.title}
                </h1>
                <p className="text-gray-400 mb-6 font-sans max-w-3xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag: string, index: number) => (
                    <span 
                      key={index} 
                      className="text-sm bg-[#242424] text-gray-300 px-3 py-1 rounded-md
                        hover:bg-gray-700 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mb-6">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black px-4 py-2.5 rounded-md bg-[#F6F6F6] font-semibold font-sans text-sm border 
                      hover:bg-black hover:text-white transition duration-300 ease-in-out"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white px-4 py-2.5 rounded-md bg-transparent font-semibold font-sans text-sm border border-gray-600 
                        hover:border-white transition duration-300 ease-in-out"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              {/* Right column: Image */}
              <div 
                className="md:w-1/2 h-64 md:h-80 bg-gray-800 rounded-xl overflow-hidden relative group cursor-pointer"
                onClick={() => setShowLargeImage(true)}
              >
                <Image 
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium px-3 py-1.5 bg-black bg-opacity-70 rounded-md">
                    Click to Enlarge
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-700 my-12"></div>

            {/* Content in style similar to the README */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left: Project Overview */}
              <div className="md:w-2/3">
                <h2 className="text-3xl text-white font-bold mb-6 font-satoshi">
                  Project Overview
                </h2>
                <div className="text-gray-400 space-y-6">
                  <p className="text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl text-white font-medium mb-4">✨ Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gray-500 mr-2">{feature.includes(":") ? "" : "•"}</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.appStructure && (
                    <div className="mt-8">
                      <h3 className="text-xl text-white font-medium mb-4">📂 App Structure</h3>
                      {Array.isArray(project.appStructure) ? (
                        <div className="bg-[#191919] rounded-md p-4 font-mono text-sm">
                          {project.appStructure.map((line: string, index: number) => (
                            <div key={index} className="whitespace-pre">{line}</div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          {Object.entries(project.appStructure).map(([section, lines]) => (
                            <div key={section} className="mb-4">
                              <h4 className="text-white text-lg mb-2 capitalize">{section}</h4>
                              <div className="bg-[#191919] rounded-md p-4 font-mono text-sm">
                                {(lines as string[]).map((line: string, i: number) => (
                                  <div key={i} className="whitespace-pre">{line}</div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {project.developmentStatus && (
                    <div className="mt-8">
                      <h3 className="text-xl text-white font-medium mb-4">⚙️ Development Status</h3>
                      <ul className="space-y-2">
                        {project.developmentStatus.map((status: string, idx: number) => (
                          <li key={idx} className="flex items-center">
                            <span className="mr-2">{status.includes("✅") ? "" : ""}</span>
                            <span>{status}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.roadmap && (
                    <div className="mt-8">
                      <h3 className="text-xl text-white font-medium mb-4">📋 Roadmap</h3>
                      <ul className="space-y-2">
                        {project.roadmap.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gray-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.contributors && (
                    <div className="mt-8">
                      <h3 className="text-xl text-white font-medium mb-4">👥 Contributors</h3>
                      <ul className="space-y-2">
                        {project.contributors.map((contributor: string, idx: number) => (
                          <li key={idx}>{contributor}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.challenges && (
                    <div className="mt-8">
                      <p className="leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Tech Stack */}
              <div className="md:w-1/3">
                <div className="bg-[#141414] rounded-lg p-6 border border-gray-800">
                  <h3 className="text-2xl text-white font-bold mb-6 font-satoshi">
                    🛠️ Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack && Object.entries(project.techStack).map(([category, techs]) => (
                      <div key={category} className="w-full mb-4">
                        <h4 className="text-white capitalize mb-2 text-sm opacity-70">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {(techs as string[]).map((tech: string, idx: number) => (
                            <span 
                              key={idx}
                              className="text-sm bg-[#242424] text-gray-300 px-3 py-1 rounded-md
                                hover:bg-gray-700 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="mt-6 flex w-full items-center justify-center gap-2 text-black px-4 py-2.5 rounded-md bg-white font-medium text-sm
                      hover:bg-gray-100 transition duration-300 ease-in-out"
                  >
                    Visit Project <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
        
        {/* Footer */}
        <Footer />
      </main>

      {/* Add this modal at the end of the component */}
      {showLargeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLargeImage(false)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowLargeImage(false);
              }}
            >
              <X size={20} />
            </button>
            <div className="relative h-[80vh]">
              <Image 
                src={project.image}
                alt={`${project.title} screenshot - large view`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 