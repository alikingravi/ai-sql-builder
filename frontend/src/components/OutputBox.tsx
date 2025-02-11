"use client";

import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "@/context/ThemeContext";
import sql from "react-syntax-highlighter/dist/esm/languages/hljs/sql";

SyntaxHighlighter.registerLanguage("sql", sql);

export default function OutputBox({ query }: { query: string }) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(query);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto mt-5 p-6 bg-navbar rounded-lg shadow-lg transition-all">
      <h2 className="text-lg font-semibold text-foreground mb-2">
        Generated SQL Query:
      </h2>

      <div className="relative w-full border border-gray-500 rounded-md p-3">
        <SyntaxHighlighter
          language="sql"
          style={theme === "light" ? docco : dracula}
          customStyle={{
            background: "transparent",
            fontSize: "14px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            maxWidth: "100%",
          }}
        >
          {query || "-- Your SQL query will appear here..."}
        </SyntaxHighlighter>

        <button
          className="absolute top-2 right-2 text-foreground bg-gray-700/50 hover:bg-gray-600 p-2 rounded-md transition-all"
          onClick={handleCopy}
        >
          {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
        </button>
      </div>
    </div>
  );
}
