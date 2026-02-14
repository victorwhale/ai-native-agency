"use client";

import dynamic from "next/dynamic";

const ScrollScene = dynamic(() => import("@/components/ScrollScene"), {
  ssr: false,
});

export function ScrollSceneLoader({
  variant,
}: {
  variant: "torusKnot" | "orbitingCubes" | "morphing" | "particles";
}) {
  return <ScrollScene variant={variant} />;
}
