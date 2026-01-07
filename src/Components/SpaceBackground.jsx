import React from 'react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-0 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_70%)]" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-20 animate-pulse-slow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default SpaceBackground;