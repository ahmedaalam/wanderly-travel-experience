import React from 'react';

interface WanderlyLogoMarkProps {
  size?: number;
  className?: string;
  /** 'dark' = dark circle with white mountain | 'light' = white circle with dark mountain */
  variant?: 'dark' | 'light';
  strokeWidth?: number;
}

export default function WanderlyLogoMark({
  size = 36,
  className = '',
  variant = 'dark',
  strokeWidth = 4.5,
}: WanderlyLogoMarkProps) {
  const bg = variant === 'dark' ? '#1c1917' : '#ffffff';
  const strokeColor = variant === 'dark' ? '#ffffff' : '#1c1917';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wanderly mountain logo"
    >
      {/* Circle background with subtle shadow styling */}
      <circle cx="50" cy="50" r="50" fill={bg} />

      {/* 
        Exact minimal mountain line-art matching reference:
        Ascending left slope -> stepped ridge notch -> tall apex summit -> descending valley -> secondary right peak -> descending base
      */}
      <polyline
        points="20,68 38,45 42,49 50,30 63,58 70,47 80,68"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
