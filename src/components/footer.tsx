import Link from "next/link";
import { footerLinks } from "@/data/footer";
import { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  
  // Fungsi untuk update waktu
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#121212] text-white p-8 md:p-12 border-t border-[#3D3D3D]">
      <div className="flex justify-around max-w-7xl mx-auto border-b border-[#3D3D3D] pb-8 flex-wrap">
        {footerLinks.map((section) => (
          <div key={section.title} className="w-full md:w-auto mb-8 md:mb-0 px-4 md:px-0">
            <h3 className="text-lg font-semibold mb-3 font-satoshi">{section.title}</h3>
            <ul className="space-y-2 font-sans">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between md:flex-row items-center justify-between mt-8 text-gray-400 text-sm text-center md:text-left font-satoshi">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <span className="font-semibold text-white">Currently</span>
          <span className="text-blue-400 my-2">😴</span>
          <Link 
            href="/contact" 
            className="underline hover:text-white transition-colors duration-200"
          >
            Reach out →
          </Link>
        </div>
        <div className="text-2xl md:text-4xl font-bold text-gray-300 ">
          {currentTime || "Loading..."}
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-gray-500 text-xs border-t border-[#3D3D3D] pt-4 "> 
        <div className="text-center md:text-left md:mb-0">
          Copyright © {new Date().getFullYear()} Azerus
        </div>
        <div className="flex items-center space-x-4">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
