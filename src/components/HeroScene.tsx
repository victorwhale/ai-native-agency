"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Build connected node network geometry
  const { nodes, edges } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const edgeList: [number, number][] = [];

    // Icosahedron vertices as base positions
    const ico = new THREE.IcosahedronGeometry(2.2, 1);
    const pos = ico.getAttribute("position");
    for (let i = 0; i < pos.count; i++) {
      pts.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)));
    }
    ico.dispose();

    // Connect nearby nodes
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 2.0) {
          edgeList.push([i, j]);
        }
      }
    }

    return { nodes: pts, edges: edgeList };
  }, []);

  // Edge lines geometry
  const linesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];
    for (const [a, b] of edges) {
      positions.push(nodes[a].x, nodes[a].y, nodes[a].z);
      positions.push(nodes[b].x, nodes[b].y, nodes[b].z);
    }
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    return geo;
  }, [nodes, edges]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;

    // Subtle mouse follow
    groupRef.current.position.x +=
      (mouseRef.current.x * 0.3 - groupRef.current.position.x) * 0.02;
    groupRef.current.position.y +=
      (mouseRef.current.y * 0.3 - groupRef.current.position.y) * 0.02;
  });

  // Track mouse globally
  useMemo(() => {
    if (typeof window === "undefined") return;
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <group ref={groupRef}>
      {/* Wireframe edges */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>

      {/* Node spheres */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#6366f1" : "#10b981"}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Central glow sphere */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div
      className="absolute inset-0 hidden md:block"
      style={{ opacity: 0.6 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ pointerEvents: "none" }}
        gl={{ antialias: true, alpha: true }}
      >
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
