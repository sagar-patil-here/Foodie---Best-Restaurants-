import React, { useRef } from 'react';

export default function MagneticButton({ children, className = '', ...props }) {
  const btnRef = useRef();

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = 'translate(0,0) scale(1)';
  };

  return (
    <button
      ref={btnRef}
      className={`button-modern ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
} 