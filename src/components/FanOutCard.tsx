"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export function FanOutCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const rotateX = useTransform(smoothProgress, [0, 1], [8, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [0.92, 1]);
  const translateY = useTransform(smoothProgress, [0, 1], [30, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0.7, 1]);

  return (
    <div ref={ref} style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateX, scale, translateY, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}
