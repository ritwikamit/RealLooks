import React, { useEffect, useRef, useState } from 'react';

interface InteractiveDotGridCanvasProps {
  activePage: string;
}

export const InteractiveDotGridCanvas: React.FC<InteractiveDotGridCanvasProps> = ({ activePage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; targetAlpha: number; currentAlpha: number }>({
    x: -1000,
    y: -1000,
    active: false,
    targetAlpha: 0,
    currentAlpha: 0,
  });
  const rafRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(activePage !== 'home');

  const GRID_SIZE = 44;
  const HOVER_RADIUS = 135;

  // Track if user has scrolled past hero section on the home page
  useEffect(() => {
    if (activePage !== 'home') {
      setIsVisible(true);
      return;
    }

    let scrollRaf: number;
    const checkScrollPosition = () => {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(() => {
        // Show interactive canvas when scrolled near or past hero
        const heroEl = document.getElementById('clandestine-hero');
        const heroHeight = heroEl ? heroEl.offsetHeight - 120 : 650;
        const pastHero = window.scrollY >= heroHeight;
        setIsVisible(pastHero);
      });
    };

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    checkScrollPosition();
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      cancelAnimationFrame(scrollRaf);
    };
  }, [activePage]);

  // Canvas render and hover animation loop
  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
      renderFrame();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      // Smoothly interpolate alpha towards target
      mouse.currentAlpha += (mouse.targetAlpha - mouse.currentAlpha) * 0.14;

      // Only draw the interactive glowing dots if cursor has some opacity
      if (mouse.currentAlpha > 0.01) {
        const scrollY = window.scrollY;
        const gridOffsetY = scrollY % GRID_SIZE;

        // Bounding box around cursor for fast O(1) intersection check
        const minX = Math.max(0, Math.floor((mouse.x - HOVER_RADIUS) / GRID_SIZE) * GRID_SIZE);
        const maxX = Math.min(width, Math.ceil((mouse.x + HOVER_RADIUS) / GRID_SIZE) * GRID_SIZE);
        const minY = Math.max(0, Math.floor((mouse.y - gridOffsetY - HOVER_RADIUS) / GRID_SIZE) * GRID_SIZE + gridOffsetY);
        const maxY = Math.min(height, Math.ceil((mouse.y - gridOffsetY + HOVER_RADIUS) / GRID_SIZE) * GRID_SIZE + gridOffsetY);

        const fadeMargin = Math.min(width * 0.2, 220);

        for (let x = minX; x <= maxX; x += GRID_SIZE) {
          // Lateral edge fade: 0 at left and right borders, 1 in the central region
          const distFromEdge = Math.min(x, width - x);
          const lateralFade = Math.max(0, Math.min(1, distFromEdge / fadeMargin));
          if (lateralFade <= 0.01) continue;

          for (let y = minY; y <= maxY; y += GRID_SIZE) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < HOVER_RADIUS) {
              const intensity = (1 - dist / HOVER_RADIUS) * mouse.currentAlpha * lateralFade;
              if (intensity <= 0.01) continue;

              // 1. Subtle glowing crosshair lines connecting to the dot
              ctx.beginPath();
              ctx.strokeStyle = `rgba(214, 168, 56, ${0.35 * intensity})`;
              ctx.lineWidth = 1.2;
              const armLength = 10 * intensity;
              ctx.moveTo(x - armLength, y);
              ctx.lineTo(x + armLength, y);
              ctx.moveTo(x, y - armLength);
              ctx.lineTo(x, y + armLength);
              ctx.stroke();

              // 2. Soft luxury outer glow halo
              ctx.beginPath();
              ctx.arc(x, y, 7 * intensity + 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(214, 168, 56, ${0.22 * intensity})`;
              ctx.fill();

              // 3. Radiant central golden dot
              ctx.beginPath();
              const radius = 1.75 + 2.8 * intensity;
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 242, 168, ${0.95 * intensity})`;
              ctx.fill();

              // 4. Dot border highlight
              ctx.lineWidth = 1;
              ctx.strokeStyle = `rgba(214, 168, 56, ${0.85 * intensity})`;
              ctx.stroke();
            }
          }
        }
      }

      // If still animating or decaying, continue loop; otherwise sleep loop to preserve 0% CPU
      if (mouse.currentAlpha > 0.01 || mouse.active) {
        rafRef.current = requestAnimationFrame(renderFrame);
      } else {
        rafRef.current = null;
      }
    };

    const triggerAnimation = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(renderFrame);
      }
    };

    let moveTimeout: ReturnType<typeof setTimeout>;
    const onPointerMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
      mouseRef.current.targetAlpha = 1;

      clearTimeout(moveTimeout);
      triggerAnimation();

      // Fade out smoothly after 400ms of inactivity
      moveTimeout = setTimeout(() => {
        mouseRef.current.targetAlpha = 0;
        mouseRef.current.active = false;
        triggerAnimation();
      }, 400);
    };

    const onPointerLeave = () => {
      mouseRef.current.targetAlpha = 0;
      mouseRef.current.active = false;
      triggerAnimation();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      clearTimeout(moveTimeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-1 overflow-hidden select-none transition-opacity duration-500"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  );
};
