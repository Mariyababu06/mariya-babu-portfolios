
import React, { useEffect, useRef } from 'react';

const AnimatedSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = sphere.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    };

    const animate = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (sphere) {
        sphere.style.transform = `
          perspective(1000px) 
          rotateX(${targetY * 30}deg) 
          rotateY(${targetX * 30}deg)
          rotateZ(${Math.sin(Date.now() * 0.001) * 10}deg)
        `;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-80 h-80 mx-auto mb-8">
      <div
        ref={sphereRef}
        className="w-full h-full relative transform-gpu transition-transform duration-100 ease-out"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer sphere rings */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-purple-400/30"
            style={{
              transform: `rotateX(${i * 22.5}deg) rotateY(${i * 45}deg) translateZ(${i * 10}px)`,
              animation: `rotate3d ${10 + i * 2}s linear infinite`,
              borderColor: `hsl(${270 + i * 15}, 70%, ${60 - i * 5}%)`,
            }}
          />
        ))}
        
        {/* Inner sphere core */}
        <div
          className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
          style={{
            transform: 'translateZ(50px)',
            animation: 'pulse3d 4s ease-in-out infinite',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotateX(${i * 30}deg) rotateY(${i * 30}deg) translateZ(${100 + Math.sin(i) * 50}px)`,
              animation: `orbit3d ${8 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedSphere;
