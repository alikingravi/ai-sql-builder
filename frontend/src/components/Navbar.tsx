"use client";

import { useTheme } from "@/context/ThemeContext";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Ensure fade-in animation runs only once
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-navbar bg-cover border-2 border-navbarBorderGlow shadow-lg shadow-black/10 dark:shadow-black/40 rounded-full px-6 py-3 flex items-center justify-between w-[320px] sm:w-[420px] md:w-[500px] transition-transform duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } hover:scale-[1.03] hover:shadow-xl hover:animate-glowing`}
    >
      {/* Left: App Name with Animated Underline */}
      <h1 className="relative text-lg font-bold tracking-wide transition-colors duration-300 hover:text-accent">
        SQL Builder
        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-accent scale-x-0 transition-transform duration-300 ease-in-out origin-right hover:scale-x-100"></span>
      </h1>

      {/* Right: Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="focus:outline-none hover:scale-110 transition-transform duration-200"
      >
        {theme === "light" ? (
          <IoSunnySharp className="text-yellow-400 text-2xl transition-all duration-300 hover:text-yellow-300" />
        ) : (
          <IoMoonSharp className="text-white text-2xl transition-all duration-300 hover:text-gray-300" />
        )}
      </button>
    </nav>
  );
}
