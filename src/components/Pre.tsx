"use client";

import { useRef, useState } from "react";

export function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = preRef.current?.textContent || "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs font-mono px-2 py-1 rounded border border-white/20 bg-black/40 text-white/70 opacity-70 hover:opacity-100 transition-opacity"
      >
        {copied ? "copied" : "copy"}
      </button>
      <pre ref={preRef} {...props} />
    </div>
  );
}