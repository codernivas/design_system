import React, { useRef, useState, useEffect } from "react";
import "./customCodeSnippet.css";

interface CustomCodeSnippetProps {
  code: string;
}

const CustomCodeSnippet: React.FC<CustomCodeSnippetProps> = ({ code }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = 0;
    }
  }, [code]);

  return (
    <div className="code-container" ref={containerRef}>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
      <button className="copy-button" onClick={handleCopy} title="Copy to clipboard">
        {copied ? "✅" : "📋"}
      </button>
    </div>
  );
};

export default CustomCodeSnippet;
