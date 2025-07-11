
import React from 'react';

interface Float3DProps {
  children: React.ReactNode;
  delay?: number;
  intensity?: number;
  className?: string;
}

const Float3D: React.FC<Float3DProps> = ({ 
  children, 
  delay = 0, 
  intensity = 1,
  className = "" 
}) => {
  return (
    <div
      className={`transform-gpu transition-all duration-300 hover:scale-105 ${className}`}
      style={{
        animation: `float3d ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: `perspective(1000px) rotateX(${intensity * 5}deg) rotateY(${intensity * 3}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default Float3D;
