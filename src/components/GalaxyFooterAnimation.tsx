'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const GalaxyFooterAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 300 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Update dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: 300,
        });
      }
    };

    // Initial dimensions
    updateDimensions();

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Set canvas to fill container
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    // Colors based on theme
    const primaryColor = theme === 'dark' ? 0x8b5cf6 : 0x7c3aed; // Violet shades
    const secondaryColor = theme === 'dark' ? 0xc4b5fd : 0xa78bfa; // Lighter violet
    const backgroundColor = theme === 'dark' ? 0x0f172a : 0xf1f5f9; // Slate-900 or Slate-100

    // Create swirl effect with particles
    const particleCount = window.innerWidth < 768 ? 300 : 600; // Reduced count for mobile
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3); // For dynamic movement
    const particleRadii = new Float32Array(particleCount); // For varying radii

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 5 + Math.random() * 15; // Random radius between 5 and 20
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 10;

      particlePositions[i3] = Math.cos(angle) * radius;
      particlePositions[i3 + 1] = height;
      particlePositions[i3 + 2] = Math.sin(angle) * radius;

      // Store initial radius for animation
      particleRadii[i] = radius;

      // Initial velocities for subtle drift
      particleVelocities[i3] = 0; // Will be updated in animation
      particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.02; // Vertical drift
      particleVelocities[i3 + 2] = 0;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: secondaryColor,
      size: 0.06,
      transparent: true,
      opacity: theme === 'dark' ? 0.7 : 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Position camera
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 0, 0);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Handle resize
    const handleResize = () => {
      updateDimensions();
      camera.aspect = dimensions.width / dimensions.height;
      camera.updateProjectionMatrix();
      renderer.setSize(dimensions.width, dimensions.height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const positions = particleGeometry.attributes.position.array as Float32Array;

      // Update particle positions for swirl effect
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = particleRadii[i];

        // Calculate angle based on time and radius for varied speeds
        const speed = 0.2 * (20 - radius) * 0.05; // Smaller radii move faster
        const angle = elapsedTime * speed + (i * Math.PI * 2) / particleCount;

        // Update position in a circular path
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 2] = Math.sin(angle) * radius;

        // Add subtle vertical drift
        positions[i3 + 1] += particleVelocities[i3 + 1];

        // Boundary check for vertical drift
        if (positions[i3 + 1] > 5) {
          positions[i3 + 1] = 5;
          particleVelocities[i3 + 1] *= -1; // Reverse direction
        } else if (positions[i3 + 1] < -5) {
          positions[i3 + 1] = -5;
          particleVelocities[i3 + 1] *= -1;
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;

      // Subtle wave motion for the entire particle system
      const waveAmplitude = 0.1;
      const waveFrequency = 0.5;
      particles.position.y = Math.sin(elapsedTime * waveFrequency) * waveAmplitude;

      // Rotate particles for a dynamic swirl effect
      particles.rotation.y = elapsedTime * 0.05;

      // Render
      renderer.render(scene, camera);

      // Call animate again on the next frame
      window.requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Clean up particles
      scene.remove(particles);
      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();
    };
  }, [theme, dimensions.width, dimensions.height]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-72 overflow-hidden pointer-events-none"
      style={{ zIndex: 10 }}
      aria-hidden="true"
    />
  );
};

export default GalaxyFooterAnimation;
