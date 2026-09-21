import React, { useEffect, useState } from 'react';

interface InteractiveDotGridCanvasProps {
  activePage: string;
}

export const InteractiveDotGridCanvas: React.FC<InteractiveDotGridCanvasProps> = ({ activePage }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean }>({
    x: -500,
    y: -500,
    active: false,
  });

  const [snapDot, setSnapDot] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handlePointerMove = (e: PointerEvent) => {
      const scrollY = window.scrollY;
      const heroEl = document.getElementById('home');
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 600;

      // Only activate on post-hero or dedicated subpages
      if (activePage === 'home' && e.clientY + scrollY < heroBottom) {
        setMousePos((prev) => (prev.active ? { ...prev, active: false } : prev));
        return;
      }

      const x = e.clientX;
      const y = e.clientY;

      // Calculate nearest 44px grid intersection
      const GRID_SIZE = 44;
      const gridOffsetY = scrollY % GRID_SIZE;
      const nearestX = Math.round(x / GRID_SIZE) * GRID_SIZE;
      const nearestY = Math.round((y - gridOffsetY) / GRID_SIZE) * GRID_SIZE + gridOffsetY;

      setMousePos({ x, y, active: true });
      setSnapDot({ x: nearestX, y: nearestY });

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePos((prev) => ({ ...prev, active: false }));
      }, 500);
    };

    const handlePointerLeave = () => {
      setMousePos((prev) => ({ ...prev, active: false }));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      clearTimeout(timeoutId);
    };
  }, [activePage]);

  if (!mousePos.active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-opacity duration-300"
      aria-hidden="true"
    >
      {/* 1. Ambient Golden Illumination Spotlight over the grid lines and dots */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '220px',
          height: '220px',
          background: 'radial-gradient(circle, rgba(214, 168, 56, 0.18) 0%, rgba(255, 242, 168, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* 2. Focused Glowing Intersection Beacon on nearest grid intersection */}
      {snapDot && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-150 ease-out"
          style={{
            left: `${snapDot.x}px`,
            top: `${snapDot.y}px`,
          }}
        >
          {/* Outer gold halo ring */}
          <div className="w-6 h-6 -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 rounded-full border border-[#D6A838]/80 bg-[#D6A838]/20 animate-ping opacity-70" />
          
          {/* Inner sparkling gold bold intersection dot */}
          <div className="w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 rounded-full bg-gradient-to-tr from-[#5A4004] via-[#D6A838] to-[#FFF4BD] shadow-[0_0_14px_#D6A838] border border-[#FFF4BD]/60" />
        </div>
      )}
    </div>
  );
};
