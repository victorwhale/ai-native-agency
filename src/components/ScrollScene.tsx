"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Shared scroll progress ref — updated once, consumed by all shapes
const scrollRef = { current: 0 };

if (typeof window !== "undefined") {
  const update = () => {
    scrollRef.current =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ─── Variant: Torus knot wireframe (Why Now section) ─── */
function TorusKnotShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const s = scrollRef.current;
    meshRef.current.rotation.x = t * 0.12 + s * Math.PI * 2;
    meshRef.current.rotation.y = t * 0.08 + s * Math.PI;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05);
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.4, 0.4, 128, 16, 2, 3]} />
      <meshBasicMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

/* ─── Variant: Orbiting cubes ring (Advantages section) ─── */
function OrbitingCubes() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 12;

  const positions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      return new THREE.Vector3(
        Math.cos(angle) * 2.2,
        Math.sin(angle) * 2.2,
        0,
      );
    });
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    const s = scrollRef.current;
    groupRef.current.rotation.z = t * 0.1 + s * Math.PI * 3;
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.3 + s * 0.5;
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = t * 0.4 + i * 0.5;
      child.rotation.y = t * 0.3 + i * 0.3;
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#10b981" : "#6366f1"}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Variant: Morphing dodecahedron (Contact section) ─── */
function MorphingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const s = scrollRef.current;
    meshRef.current.rotation.x = t * 0.1 + s * Math.PI * 2;
    meshRef.current.rotation.y = t * 0.15 + s * Math.PI;
    const breathe = 1 + Math.sin(t * 0.6) * 0.08;
    meshRef.current.scale.setScalar(breathe);
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1.8, 0]} />
      <meshBasicMaterial
        color="#f97316"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

/* ─── Variant: Floating particles field (Verticals section) ─── */
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 80;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    const s = scrollRef.current;
    pointsRef.current.rotation.y = t * 0.05 + s * Math.PI;
    pointsRef.current.rotation.x = Math.sin(t * 0.08) * 0.2;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#6366f1"
        size={0.04}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Main wrapper ─── */
type Variant = "torusKnot" | "orbitingCubes" | "morphing" | "particles";

const variantMap: Record<Variant, React.FC> = {
  torusKnot: TorusKnotShape,
  orbitingCubes: OrbitingCubes,
  morphing: MorphingShape,
  particles: ParticleField,
};

export default function ScrollScene({ variant }: { variant: Variant }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Shape = variantMap[variant];

  // Pause rendering when not visible
  const visibleRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 hidden md:block pointer-events-none"
      style={{ opacity: 0.6 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ pointerEvents: "none" }}
        gl={{ antialias: true, alpha: true }}
        frameloop="always"
      >
        <Shape />
      </Canvas>
    </div>
  );
}
