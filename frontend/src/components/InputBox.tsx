"use client";

import { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { generateSqlQuery } from "@/api/generateSql";

export default function InputBox({
  setQuery,
}: {
  setQuery: (query: string) => void;
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!input.trim()) {
      setError("Please enter a valid query.");
      return;
    }

    setLoading(true);
    try {
      const response = await generateSqlQuery(input);
      setQuery(response.sql_query);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.detail || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-6 bg-navbar rounded-lg shadow-lg transition-all">
      <label className="text-lg font-semibold text-foreground mb-2">
        Explain your desired query:
      </label>

      <textarea
        className="w-full min-h-[120px] p-3 rounded-md bg-background border border-gray-500 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-200 text-foreground placeholder-gray-400 resize-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Explain what your query should do ..."
      />

      <div className="flex justify-between w-full mt-3">
        <button
          className="btn btn-submit flex items-center"
          onClick={handleSubmit}
          disabled={loading}
        >
          <FaPaperPlane className="mr-2" />{" "}
          {loading ? "Generating ..." : "Submit"}
        </button>

        <button
          className="btn btn-clear flex items-center"
          onClick={() => {
            setInput("");
            setQuery("");
            setError(null);
          }}
        >
          <FaTimes className="mr-2" /> Clear
        </button>
      </div>

      {error && (
        <div className="mt-4 p-2 bg-red-500 text-white rounded-md">{error}</div>
      )}
    </div>
  );
}
