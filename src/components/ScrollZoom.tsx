"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export function ScrollZoom({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [0.5, 1]);
  const rotateX = useTransform(smoothProgress, [0, 1], [6, 0]);
  const translateY = useTransform(smoothProgress, [0, 1], [40, 0]);

  return (
    <div ref={ref} style={{ perspective: 1200 }}>
      <motion.div style={{ scale, opacity, rotateX, translateY }}>
        {children}
      </motion.div>
    </div>
  );
}
