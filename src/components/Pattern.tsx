import React, { useEffect, useRef, useState } from "react";

export default function Pattern() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#020617]"
    >
      {/* 1. Subtle Base Dots (Faint) */}
      <div
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(148, 163, 184, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2. Highlighted Dots (Revealed by Mouse) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(216, 166, 96, 0.8) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />

      {/* 3. Glowing Orb Tracking the Mouse */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(15, 118, 110, 0.8) 0%, rgba(216, 166, 96, 0.3) 50%, transparent 100%)",
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      />

      {/* 4. Ambient Static Glows (for depth) */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-teal-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-amber-900/10 blur-[120px] pointer-events-none" />
    </div>
  );
}
