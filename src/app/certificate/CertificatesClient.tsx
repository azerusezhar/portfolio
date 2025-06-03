"use client";
import React from "react";
import Footer from "@/components/footer";
import CertificateCard from "@/components/CertificateCard";
import { certificates } from "@/data/certificates";

const CertificatesPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#121212] overflow-hidden">
      <main className="flex-1 overflow-y-auto w-full">
        <section className="w-full bg-[#121212] shadow-md p-12  md:p-10 lg:p-22">
          {/* Certificate Section */}
          <section id="Certificate-Section" className="w-full pt-16 md:pt-22 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 font-satoshi">
              Certificates
            </h1>
            <p className="text-gray-400 mb-4 font-sans max-w-xl">
              Here are some of the certifications I have received, including skills certifications and competition achievements.
            </p>
            <div className="w-full border-t border-[#3D3D3D] my-8"></div>
          </section>

          {/* Certificate Section */}
          <section id="Certificate-Section" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  title={cert.title}
                  as={cert.as}
                  category={cert.description}
                  imageUrl={cert.imageUrl}
                  fileUrl={cert.fileUrl}
                />
              ))}
            </div>
          </section>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default CertificatesPage;
