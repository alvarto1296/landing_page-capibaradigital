import React, { useRef, useEffect } from 'react';

const W = 480;
const H = 300;
const COLORS = [
  '#00c4b8', '#00c4b8', '#00c4b8',
  '#29d9ce', '#edfffe',
  '#fde9ff',
];

// Spring physics
const STIFFNESS  = 0.055;
const DAMPING    = 0.80;
const R_RADIUS   = 90;   // mouse repel radius
const R_FORCE    = 8;    // repel strength

// Phase durations in frames (~60fps)
const PHASE_CAPY   = 320; // ~5.3s hold capybara
const PHASE_CIRCLE = 260; // ~4.3s hold circle

export default function CapibaraParticles() {
  const canvasRef = useRef(null);
  const stateRef  = useRef({
    particles: [],
    phase: 0,     // 0 = capybara, 1 = circle
    timer: 0,
    mouse: { x: -9999, y: -9999 },
    raf: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx  = canvas.getContext('2d');
    const s    = stateRef.current;
    let alive  = true;

    /* ── Build particles from favicon silhouette ── */
    function initParticles(rawPositions) {
      const N  = rawPositions.length;
      const cx = W / 2;
      const cy = H / 2;
      const r  = Math.min(W, H) * 0.38;

      // Sphere targets: uniform distribution inside a filled disc
      const circleTargets = Array.from({ length: N }, () => {
        const angle  = Math.random() * Math.PI * 2;
        const radius = r * Math.sqrt(Math.random()); // sqrt = uniform by area
        return {
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle),
        };
      });

      s.particles = rawPositions.map((cp, i) => ({
        // start scattered so they "fly in"
        x:     cp.x + (Math.random() - 0.5) * 100,
        y:     cp.y + (Math.random() - 0.5) * 100,
        vx: 0, vy: 0,
        // two target sets
        capiX: cp.x,  capiY: cp.y,
        circX: circleTargets[i].x,
        circY: circleTargets[i].y,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size:  1.3 + Math.random() * 1.8,
      }));
    }

    /* ── Animation loop ── */
    function startLoop() {
      const PHASE_FRAMES = [PHASE_CAPY, PHASE_CIRCLE];

      function frame() {
        if (!alive) return;

        s.timer++;
        if (s.timer >= PHASE_FRAMES[s.phase]) {
          s.phase = 1 - s.phase;
          s.timer = 0;
        }

        ctx.clearRect(0, 0, W, H);

        const toCircle = s.phase === 1;
        const { mouse, particles } = s;

        for (const p of particles) {
          const tx = toCircle ? p.circX : p.capiX;
          const ty = toCircle ? p.circY : p.capiY;

          // Spring toward target
          let ax = (tx - p.x) * STIFFNESS;
          let ay = (ty - p.y) * STIFFNESS;

          // Mouse repulsion
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < R_RADIUS && d > 0.5) {
            const f = ((R_RADIUS - d) / R_RADIUS) * R_FORCE;
            ax += (dx / d) * f;
            ay += (dy / d) * f;
          }

          p.vx = (p.vx + ax) * DAMPING;
          p.vy = (p.vy + ay) * DAMPING;
          p.x += p.vx;
          p.y += p.vy;

          // Soft glow halo
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.07;
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.82;
          ctx.fill();
        }

        ctx.globalAlpha = 1;
        s.raf = requestAnimationFrame(frame);
      }

      frame();
    }

    /* ── Load favicon as silhouette ── */
    const img = new Image();

    img.onload = () => {
      if (!alive) return;

      const off  = document.createElement('canvas');
      off.width  = W;
      off.height = H;
      const oc   = off.getContext('2d');

      // Scale icon to fill most of the canvas
      const sz = Math.min(W * 0.72, H * 0.88);
      oc.drawImage(img, (W - sz) / 2, (H - sz) / 2, sz, sz);

      const data  = oc.getImageData(0, 0, W, H).data;
      const step  = 7;
      const positions = [];

      for (let py = 0; py < H; py += step) {
        for (let px = 0; px < W; px += step) {
          if (data[(py * W + px) * 4 + 3] > 40) {
            positions.push({
              x: px + (Math.random() - 0.5) * step * 0.5,
              y: py + (Math.random() - 0.5) * step * 0.5,
            });
          }
        }
      }

      if (positions.length === 0) return; // icon had no usable pixels
      initParticles(positions);
      startLoop();
    };

    img.onerror = () => {
      if (!alive) return;
      // Fallback: oval of particles
      const N = 180;
      const cx = W / 2, cy = H / 2;
      const positions = Array.from({ length: N }, (_, i) => ({
        x: cx + 110 * Math.cos((i / N) * Math.PI * 2),
        y: cy + 72  * Math.sin((i / N) * Math.PI * 2),
      }));
      initParticles(positions);
      startLoop();
    };

    img.src = '/favicon.ico';

    /* ── Mouse / touch tracking ── */
    function toCanvas(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      s.mouse.x  = (clientX - rect.left) * (W / rect.width);
      s.mouse.y  = (clientY - rect.top)  * (H / rect.height);
    }

    const onMove  = (e) => toCanvas(e.clientX, e.clientY);
    const onLeave = ()  => { s.mouse.x = -9999; s.mouse.y = -9999; };
    const onTouch = (e) => { e.preventDefault(); toCanvas(e.touches[0].clientX, e.touches[0].clientY); };

    canvas.addEventListener('mousemove',  onMove);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('touchmove',  onTouch, { passive: false });
    canvas.addEventListener('touchend',   onLeave);

    return () => {
      alive = false;
      if (s.raf) cancelAnimationFrame(s.raf);
      canvas.removeEventListener('mousemove',  onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('touchmove',  onTouch);
      canvas.removeEventListener('touchend',   onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      style={{ display: 'block', width: '100%', maxWidth: `${W}px`, cursor: 'crosshair' }}
      aria-hidden="true"
    />
  );
}
