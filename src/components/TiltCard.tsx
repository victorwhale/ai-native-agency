"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TiltCard({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each card tilts at a different Y angle for variety
  const rotateYOffsets = [-3, 0, 3];
  const rotateYRange = rotateYOffsets[index % 3] ?? 0;

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-rotateYRange, 0, rotateYRange]
  );
  const translateZ = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 20, 20, 0]
  );

  return (
    <div ref={ref} style={{ perspective: 1000 }}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateZ,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
