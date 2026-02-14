"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollRevealLine({
  gradient = "from-accent via-cyan to-emerald",
}: {
  gradient?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 50%"],
  });

  const rawScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useSpring(rawScaleX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6">
      <motion.div
        className={`h-px bg-gradient-to-r ${gradient} origin-left`}
        style={{ scaleX, opacity: scaleX }}
      />
    </div>
  );
}
