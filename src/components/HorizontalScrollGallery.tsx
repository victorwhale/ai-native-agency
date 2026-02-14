"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HorizontalScrollGallery({
  children,
}: {
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <>
      {/* Desktop: horizontal scroll driven by vertical scroll */}
      <div ref={outerRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div
            className="flex gap-6 pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
            style={{ translateX }}
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* Mobile: standard vertical stack */}
      <div className="md:hidden grid gap-6 px-6">{children}</div>
    </>
  );
}

export function HorizontalScrollCard({
  children,
  isLarge = false,
}: {
  children: ReactNode;
  isLarge?: boolean;
}) {
  return (
    <div
      className={`flex-shrink-0 ${isLarge ? "w-[min(500px,85vw)] md:w-[560px]" : "w-[min(360px,85vw)] md:w-[400px]"}`}
    >
      {children}
    </div>
  );
}
