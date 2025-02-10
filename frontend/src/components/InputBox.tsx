"use client";

import { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

export default function InputBox() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-6 bg-navbar rounded-lg shadow-lg transition-all">
      <label className="text-lg font-semibold text-foreground mb-2">
        Explain your desired query:
      </label>

      <textarea
        className="w-full min-h-[120px] p-3 rounded-md bg-background border border-gray-500 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-200 text-foreground placeholder-gray-400 resize-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Explain what your query should do ..."
      />

      <div className="flex justify-between w-full mt-3">
        <button
          className="btn btn-submit flex items-center"
          onClick={() => console.log("Submit Query:", query)}
        >
          <FaPaperPlane className="mr-2" /> Submit
        </button>

        <button
          className="btn btn-clear flex items-center"
          onClick={() => setQuery("")}
        >
          <FaTimes className="mr-2" /> Clear
        </button>
      </div>
    </div>
  );
}
