import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers reduced motion or small mobile screens to save CPU & battery
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || isReducedMotion) {
      return;
    }

    let isMounted = true;
    let animationFrameId;
    let cleanupFn = () => {};

    // Dynamic import to prevent three.js from blocking initial critical path
    import("three").then((THREE) => {
      if (!isMounted || !container) return;

      // Scene Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 25;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // Particle Stars Cloud (Reduced count for maximum FPS)
      const particleCount = 350;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const palette = [
        new THREE.Color("#3b82f6"),
        new THREE.Color("#8b5cf6"),
        new THREE.Color("#06b6d4"),
      ];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 60;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

        const color = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, particleMaterial);
      scene.add(particles);

      // Wireframe Icosahedron
      const geoIcosahedron = new THREE.IcosahedronGeometry(7, 1);
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const icosahedron = new THREE.Mesh(geoIcosahedron, wireframeMaterial);
      icosahedron.position.set(8, -2, -5);
      scene.add(icosahedron);

      // Mouse Interaction Variables
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize, { passive: true });

      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        particles.rotation.y = elapsedTime * 0.02 + targetX * 0.15;
        particles.rotation.x = elapsedTime * 0.01 + targetY * 0.15;

        icosahedron.rotation.x = elapsedTime * 0.12;
        icosahedron.rotation.y = elapsedTime * 0.15 + targetX * 0.2;

        renderer.render(scene, camera);
      };

      animate();

      cleanupFn = () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        particleMaterial.dispose();
        geoIcosahedron.dispose();
        wireframeMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      isMounted = false;
      cleanupFn();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-70 overflow-hidden"
    />
  );
}
