"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const depthConfigs = [
  { y: [40, -40], scale: [0.95, 1.05] }, // close — fast
  { y: [20, -20], scale: [0.97, 1.03] }, // medium
  { y: [10, -10], scale: [0.98, 1.02] }, // far — slow
];

export function ParallaxCard({
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

  const config = depthConfigs[index % depthConfigs.length]!;

  const y = useTransform(scrollYProgress, [0, 1], config.y);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [
    config.scale[0],
    config.scale[1],
    config.scale[0],
  ]);

  return (
    <motion.div ref={ref} style={{ y, scale }}>
      {children}
    </motion.div>
  );
}
