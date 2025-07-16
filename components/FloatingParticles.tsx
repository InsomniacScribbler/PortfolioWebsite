import React from 'react';

const FloatingParticles = ({ count }: { count: number }) => {
  const particles = Array.from({ length: count });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1; // 1px to 4px
        const duration = Math.random() * 20 + 15; // 15s to 35s
        const delay = Math.random() * 15; // 0s to 15s delay
        const left = Math.random() * 100; // 0% to 100%

        const style = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        };

        return (
          <div
            key={i}
            className="absolute bg-gold/50 rounded-full bottom-0 animate-float"
            style={style}
          />
        );
      })}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingParticles;