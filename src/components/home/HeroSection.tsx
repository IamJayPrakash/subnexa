'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as THREE from 'three';

const fragmentShaderCode = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  varying vec2 vUv;

  #define EPSILON 1e-6
  #define PI 3.14159265359
  #define ITERATIONS 8.0

  mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
                sin(angle), cos(angle));
  }

  void main() {
    vec2 uv = (vUv * 2.0 - 1.0) * (u_resolution / max(u_resolution.x, u_resolution.y));
    vec2 u = uv * 0.25;
    vec4 o = vec4(0.5, 1.0, 1.5, 0.0);
    vec4 z = o;
    vec2 v_internal = vec2(0.0);
    float a = 0.6;
    float t = u_time * 0.8;

    for (float i = 0.0; i < ITERATIONS; i++)
    {
      float u_dot = dot(u, u);
      float denom_u = 0.6 - u_dot;
      denom_u += sign(denom_u) * EPSILON;

      vec2 sin_arg = (1.4 * u / denom_u) - (7.0 * u.yx * cos(t*0.2)) + t * 1.1 + v_internal * 0.3;
      vec2 length_arg = (1.0 + i * 0.1 + a * 0.2) * sin(sin_arg);
      float len = length(length_arg);
      float safe_len_divisor = max(len, EPSILON);

      o += (1.0 + sin(z * 0.9 + t * 1.2 + i * 0.1)) / safe_len_divisor * (1.0 + i*0.02);

      v_internal = 0.9 * v_internal + 0.15 * sin(t * 1.5 + u * 4.0 - o.xy * 0.2);
      v_internal = clamp(v_internal, -1.0, 1.0);

      a += 0.035;
      float angle = i * 0.1 + t * 0.05 + a * 0.2;
      mat2 rot_mat = rotate2d(angle);
      u *= rot_mat;

      float o_dot = dot(o.xyz, o.xyz);
      float feedback_scale = 0.5 + 0.5 * sin(o_dot * 0.02 + t * 0.3);

      u += sin(60.0 * dot(u,u) * cos(80.0 * u.yx + t * 1.2)) / 2.5e2
          + 0.15 * a * u * feedback_scale
          + cos(o.xy * 0.5 + t * 1.1 + v_internal * 0.8) / 3.5e2;

      u += rotate2d(v_internal.x * 0.01) * vec2(0.0001, 0.0);
    }

    vec3 base_color = 0.5 + 0.5 * cos(o.xyz * 0.8 + t * 0.15 + vec3(0.0, PI * 0.66, PI * 1.33));
    vec2 detail_coord = u * 5.0 + v_internal * 1.0;
    float detail_pattern = smoothstep(0.3, 0.7, fract(detail_coord.x * cos(t*0.1) + detail_coord.y * sin(t*0.1)));
    vec3 detail_color = vec3(detail_pattern * 0.8 + 0.2);
    float mix_factor = clamp(length(o.xyz) * 0.1 - 0.1, 0.0, 1.0);
    vec3 final_color = mix(base_color, detail_color * base_color, mix_factor);
    final_color.rg += u.xy * 0.05;
    float dist_from_center = length(vUv - 0.5);
    final_color *= pow(1.0 - dist_from_center * 1.2, 2.0);
    gl_FragColor = vec4(clamp(final_color, 0.0, 1.0), 1.0);
  }
`;

const vertexShaderCode = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.OrthographicCamera,
      renderer: THREE.WebGLRenderer,
      mesh: THREE.Mesh,
      material: THREE.ShaderMaterial,
      clock: THREE.Clock;

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2() },
    };

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const geometry = new THREE.PlaneGeometry(2, 2);

      material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShaderCode,
        fragmentShader: fragmentShaderCode,
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      uniforms.u_resolution.value.x = window.innerWidth;
      uniforms.u_resolution.value.y = window.innerHeight;

      const onWindowResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.u_resolution.value.x = window.innerWidth;
        uniforms.u_resolution.value.y = window.innerHeight;
        material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', onWindowResize);

      const animate = () => {
        if (!renderer || !clock) return;
        uniforms.u_time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', onWindowResize);
        if (renderer) {
          renderer.dispose();
          container.removeChild(renderer.domElement);
        }
        if (material) material.dispose();
        if (geometry) geometry.dispose();
      };
    };

    const cleanup = init();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Three.js Canvas Background */}
      <div
        ref={containerRef}
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: '#111' }}
      />

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 -z-5 bg-black/30" />

      <div className="container mx-auto px-4 relative flex flex-col items-center text-center">
        {/* Main heading with animation */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 tracking-tight max-w-4xl mx-auto animate-fade-up">
          <span className="bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent">
            Free Online Tools
          </span>{' '}
          for Developers & Marketers
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-100">
          Access our growing suite of 100+ browser-based tools for text manipulation, conversion,
          encoding, and more — no installation required.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="mt-10 w-full max-w-2xl animate-fade-up animate-delay-200"
        >
          <div className="flex items-center w-full relative rounded-lg shadow-sm border border-border">
            <div className="absolute left-3 text-muted-foreground">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for tools like 'Base64 encoder', 'JSON formatter'..."
              className={cn(
                'w-full py-3 pl-10 pr-20 bg-background rounded-lg',
                'text-foreground placeholder:text-muted-foreground',
                'focus:outline-none focus:ring-2 focus:ring-primary/50',
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="absolute right-2 my-1">
              Search
            </Button>
          </div>
        </form>

        {/* Featured categories pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 animate-fade-up animate-delay-300">
          {['Text Tools', 'Encoders', 'Formatters', 'Converters', 'Generators', 'SEO Tools'].map(
            (category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full hover:bg-primary/10 border-primary/20"
                onClick={() => router.push(`/tools/${category.toLowerCase().replace(' ', '-')}`)}
              >
                {category}
              </Button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
