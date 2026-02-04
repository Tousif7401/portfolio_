"use client";

interface MagneticTextProps {
  text: string;
  className?: string;
}

export function MagneticText({ text, className = "" }: MagneticTextProps) {
  return (
    <span className={`bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {text}
    </span>
  );
}