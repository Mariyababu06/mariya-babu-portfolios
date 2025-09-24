import React, { useEffect, useRef } from 'react';

interface Parallax3DProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  rotationSpeed?: number;
}

const Parallax3D: React.FC<Parallax3DProps> = ({ 
  children, 
  className = "",
  speed = 0.5,
  rotationSpeed = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationId: number;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      const rotation = scrolled * rotationSpeed;
      
      element.style.transform = `
        perspective(1000px) 
        translateY(${parallax}px) 
        rotateX(${rotation}deg) 
        rotateY(${rotation * 0.5}deg)
        translateZ(20px)
      `;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      
      element.style.transform += ` rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      element.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, rotationSpeed]);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu transition-all duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

export default Parallax3D;