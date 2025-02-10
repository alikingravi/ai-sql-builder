"use client";

import { useTheme } from "@/context/ThemeContext";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-navbar bg-cover shadow-lg shadow-black/10 dark:shadow-black/40 rounded-full px-6 py-3 flex items-center justify-between w-[320px] sm:w-[420px] md:w-[500px] transition-all duration-500 opacity-0 animate-fadeIn hover:scale-[1.03] hover:shadow-xl">
      <h1 className="text-lg font-bold tracking-wide transition-colors duration-300 hover:text-accent">
        SQL Builder
      </h1>

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
