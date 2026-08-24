import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

export default function Pattern() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Spring physics for "gravity" feel
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15, mass: 0.8 });

  const orbX = useTransform(springX, (val) => val - 300);
  const orbY = useTransform(springY, (val) => val - 300);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#020617]"
    >
      <style>
        {`
          @keyframes hueCycle {
            0% { filter: blur(7em) brightness(3) hue-rotate(0deg); }
            100% { filter: blur(7em) brightness(3) hue-rotate(1turn); }
          }
          @keyframes blobsMove {
            0% {
              background-position: 271px 478px, 62px 291px, 67px 861px, 553px 413px, 36px 392px, 1077px 226px, 400px 799px, 7px 264px;
            }
            100% {
              background-position: -14975px -2978px, 31112px 11187px, -20081px 8981px, 11609px -3952px, -12760px 12492px, -9354px 2946px, 9553px 21574px, 946px 9057px;
            }
          }
          .animated-blobs-layer {
            position: absolute;
            inset: -8em;
            background-color: #020617;
            background-image: 
              radial-gradient(ellipse 66px 50px at 50% 50%, #0f0 0%, transparent 100%),
              radial-gradient(ellipse 77px 60px at 50% 50%, #0f0 0%, transparent 100%),
              radial-gradient(ellipse 78px 100px at 50% 50%, #0f0 0%, transparent 100%),
              radial-gradient(ellipse 73px 96px at 50% 50%, #0f0 0%, transparent 100%),
              radial-gradient(ellipse 76px 77px at 50% 50%, #0f0 0%, transparent 100%),
              radial-gradient(ellipse 66px 51px at 50% 50%, #0f0 0%, transparent 100%),
              radial-gradient(ellipse 90px 57px at 50% 50%, #0f0 0%, transparent 100%),
              radial-gradient(ellipse 89px 93px at 50% 50%, #0f0 0%, transparent 100%);
            background-size: 726px 576px, 1242px 454px, 876px 1160px, 691px 873px, 914px 550px, 1159px 340px, 1017px 831px, 313px 977px;
            animation: blobsMove 150s linear infinite, hueCycle 8s linear infinite;
            opacity: 0.5;
            z-index: 0;
          }
        `}
      </style>

      {/* 1. Animated Blobs (Idle Animation) */}
      <div className="animated-blobs-layer" />

      {/* 2. Base Dots (Static Background Mesh) */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.25] z-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, #94a3b8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 3. Highlighted Dots (Revealed by Mouse) */}
      <motion.div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: "radial-gradient(circle at center, #d8a660 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          "--x": useMotionTemplate`${springX}px`,
          "--y": useMotionTemplate`${springY}px`,
          WebkitMaskImage: "radial-gradient(450px circle at var(--x, -1000px) var(--y, -1000px), black, transparent)",
          maskImage: "radial-gradient(450px circle at var(--x, -1000px) var(--y, -1000px), black, transparent)",
        } as any}
      />

      {/* 4. Glowing Orb Tracking the Mouse (Gravity Effect) */}
      <motion.div
        className="absolute top-0 left-0 rounded-full blur-[100px] opacity-40 pointer-events-none z-0"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(15, 118, 110, 0.8) 0%, rgba(216, 166, 96, 0.3) 50%, transparent 100%)",
          x: orbX,
          y: orbY,
        }}
      />
    </div>
  );
}
