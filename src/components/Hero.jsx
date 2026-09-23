import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#012624',
        padding: '80px 24px 0',
      }}
    >
      {/* Bioluminescent orb — teal */}
      <div
        className="orb-a"
        style={{
          position: 'absolute',
          right: '-8%',
          top: '5%',
          width: 'clamp(360px, 50vw, 680px)',
          height: 'clamp(360px, 50vw, 680px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 38%, #00c4b8 0%, #00827c 30%, #003734 58%, transparent 78%)',
          filter: 'blur(80px)',
          opacity: 0.38,
          pointerEvents: 'none',
        }}
      />
      {/* Bioluminescent orb — lavender edge */}
      <div
        className="orb-b"
        style={{
          position: 'absolute',
          right: '4%',
          top: '18%',
          width: 'clamp(220px, 32vw, 420px)',
          height: 'clamp(220px, 32vw, 420px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 62% 62%, #fde9ff 0%, #b06dd4 38%, transparent 72%)',
          filter: 'blur(100px)',
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '680px' }}>

          <div className="eyebrow" style={{ marginBottom: '28px' }}>
            Software · Cloud · DevOps · Bolivia
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 3.8rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 24px',
            }}
          >
            Desarrollamos software
            <br />
            <span style={{ color: '#edfffe' }}>y la nube que lo soporta</span>
          </h1>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#bbc7c6',
              maxWidth: '500px',
              margin: '0 0 40px',
            }}
          >
            Creamos aplicaciones empresariales a medida e implementamos
            la infraestructura cloud que las mantiene corriendo.
            Del código a producción, sin complicaciones.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#servicios" className="btn-aurora">
              Ver servicios <ArrowUpRight size={14} />
            </a>
            <a href="#contacto" className="btn-ghost">
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="eyebrow"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '10px',
          letterSpacing: '0.18em',
        }}
      >
        Scroll
      </div>
    </section>
  );
}
