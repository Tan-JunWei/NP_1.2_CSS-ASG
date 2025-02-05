'use client'; // Ensures this component runs in the browser

import { useState } from 'react';

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <button onClick={copyToClipboard} style={{ padding: "10px", cursor: "pointer" }}>
      {copied ? "Copied!" : "Copy Recipe"}
    </button>
  );
}
