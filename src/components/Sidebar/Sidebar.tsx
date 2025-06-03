"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    Home,
    User,
    Briefcase,
    Mail,
    Award,
    Layers,
    Settings,
    Github,
    Linkedin,
} from "lucide-react";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle screen resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setCollapsed(true);
            }
        };

        checkMobile();

        // Add resize listener
        window.addEventListener("resize", checkMobile);

        // Cleanup
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { name: "Home", icon: <Home size={20} />, href: "/" },
        { name: "About", icon: <User size={20} />, href: "/about" },
        { name: "Services", icon: <Settings size={20} />, href: "/services" },
        { name: "Projects", icon: <Briefcase size={20} />, href: "/projects" },
        { name: "Contact", icon: <Mail size={20} />, href: "/contact" },
    ];

    const resourceItems = [
        { name: "Certificate", icon: <Award size={20} />, href: "/certificate" },
        { name: "Stack", icon: <Layers size={20} />, href: "/stack" },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github size={18} />,
            href: "https://github.com/azerusezhar",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={18} />,
            href: "https://linkedin.com/in/azerus-ezhar",
        },
    ];

    return (
        <>
            {/* Mobile Header */}
            {isMobile && (
                <div className="fixed top-0 left-0 right-0 h-16 bg-gray-900 z-50 flex items-center justify-between px-4">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                            <Image
                                src="/Logo.svg"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />


                        </div>
                        <span className="text-white font-semibold">Azerus Ezhar</span>
                    </div>
                    <button className="text-white p-2" onClick={toggleMobileMenu}>
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`
          ${isMobile ? "fixed pt-16 z-40" : "relative"} 
          ${collapsed && !mobileOpen ? (isMobile ? "hidden" : "w-17") : "w-64"} 
          ${isMobile && mobileOpen ? "block" : ""}
          ${isMobile && !mobileOpen ? "hidden" : ""}
          h-screen transition-all duration-300 ease-in-out bg-[#121212] text-white border-r border-gray-700
        `}
            >
                {/* Toggle Button - visible only on desktop */}
                {!isMobile && (
                    <button
                        className="absolute -right-3 top-12 bg-indigo-600 rounded-full p-1 shadow-lg hover:bg-indigo-700 transition-colors z-10"
                        onClick={toggleSidebar}
                    >
                        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                    </button>
                )}

                {/* Profile Section - aligned horizontally when expanded */}
                {!collapsed || mobileOpen ? (
                    <div className="flex items-center p-4 mt-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                            <Image
                                src="/Logo.svg"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />


                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold">Azerus Ezhar</h3>
                            <p className="text-xs text-gray-400">Full Stack Developer</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center p-4 mt-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                            <Image
                                src="/Logo.svg"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </div>
                )}

                {/* Navigation Menu */}
                <nav className="mt-6">
                    <div className="px-4 py-2 text-xs uppercase text-gray-500 font-semibold">
                        {!collapsed || mobileOpen ? "Main Menu" : ""}
                    </div>
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-lg mx-2 group"
                                >
                                    <span className="relative">
                                        {item.icon}
                                        {collapsed && !mobileOpen && (
                                            <span className="absolute left-full ml-2 w-auto p-2 min-w-max rounded-md shadow-md text-xs bg-gray-800 text-white scale-0 group-hover:scale-100 transition-all duration-100 origin-left z-50">
                                                {item.name}
                                            </span>
                                        )}
                                    </span>
                                    {(!collapsed || mobileOpen) && (
                                        <span className="ml-3">{item.name}</span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Resources Section */}
                    <div className="mt-8 px-4 py-2 text-xs uppercase text-gray-500 font-semibold">
                        {!collapsed || mobileOpen ? "Resources" : ""}
                    </div>
                    <ul className="space-y-1">
                        {resourceItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-lg mx-2 group"
                                >
                                    <span className="relative">
                                        {item.icon}
                                        {collapsed && !mobileOpen && (
                                            <span className="absolute left-full ml-2 w-auto p-2 min-w-max rounded-md shadow-md text-xs bg-gray-800 text-white scale-0 group-hover:scale-100 transition-all duration-100 origin-left z-50">
                                                {item.name}
                                            </span>
                                        )}
                                    </span>
                                    {(!collapsed || mobileOpen) && (
                                        <span className="ml-3">{item.name}</span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Links Section - Fixed positioning */}
                <div className="absolute bottom-8 left-0 right-0">
                    {!collapsed || mobileOpen ? (
                        <div className="border-t border-gray-700 mx-4 pt-4 mb-2">
                            <div className="px-4 text-xs uppercase text-gray-500 font-semibold mb-3">
                                Connect
                            </div>
                            <div className="flex justify-around px-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                        title={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-white transition-colors group relative"
                                    title={link.name}
                                >
                                    {link.icon}
                                    <span className="absolute left-full ml-2 w-auto p-2 min-w-max rounded-md shadow-md text-xs bg-gray-800 text-white scale-0 group-hover:scale-100 transition-all duration-100 origin-left z-50">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;