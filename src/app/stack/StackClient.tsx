"use client";
import Footer from "@/components/footer";
import { allTools } from '@/data/tools'
import React from "react";

export default function AboutClient() {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-[#121212] overflow-hidden">
            <main className="flex-1 overflow-y-auto w-full">
                <section className="w-full bg-[#121212] p-12 md:p-10 lg:p-22">
                    {/* About Section */}
                    <section id="About-Section" className="w-full pt-16 md:pt-22 lg:pt-0">
                        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 font-satoshi">
                            Stack
                        </h1>
                        <p className="text-gray-400 mb-4 font-sans">Tools, resources, and software I use daily</p>

                        {Object.entries(allTools).map(([category, tools]) => (
                            <div key={category} className="mt-8 border border-[#3D3D3D] p-6 rounded-xl">
                                {/* Judul kategori */}
                                <h2 className="text-xl md:text-2xl font-semibold text-white p-3 rounded-lg inline-block font-satoshi">
                                    {category}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {tools.map((tool) => (
                                        <div key={tool.name} className="flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.02]">
                                            <div className="p-3 border border-gray-600 rounded-lg inline-flex items-center justify-center bg-[#1a1a1a] shadow-[0_0_6px_rgba(255,255,255,0.15)] ">
                                                {React.createElement(tool.icon, { size: 24, className: "text-white" })}
                                            </div>
                                            <div>
                                                <p className="text-lg font-medium text-white font-satoshi">{tool.name}</p>
                                                <p className="text-gray-400 text-sm font-sans">{tool.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
}
