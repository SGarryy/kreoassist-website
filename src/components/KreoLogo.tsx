import React from 'react';

const KreoLogo = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
      <g transform="translate(28, 20)">
        <line x1="0" y1="10" x2="0" y2="50" stroke="currentColor" strokeWidth="2" />
        <rect x="-3" y="50" width="6" height="6" stroke="currentColor" strokeWidth="2" />
        <line x1="0" y1="30" x2="30" y2="0" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="0" r="3" fill="currentColor" />
        <line x1="0" y1="30" x2="30" y2="60" stroke="currentColor" strokeWidth="2" />
        <rect x="27" y="57" width="6" height="6" stroke="currentColor" strokeWidth="2" />
        <path d="M 25 30 L 15 24 L 15 36 Z" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
};
export default KreoLogo;