import React from 'react';

const WaveAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="wave-container">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="wave"
            style={{
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1 - i * 0.02,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaveAnimation;