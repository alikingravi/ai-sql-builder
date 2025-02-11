"use client";

import { useState } from "react";
import InputBox from "@/components/InputBox";
import OutputBox from "@/components/OutputBox";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <InputBox setQuery={setQuery} />
      <OutputBox query={query} />
    </main>
  );
}
