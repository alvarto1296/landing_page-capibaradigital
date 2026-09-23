import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CapibaraParticles from './CapibaraParticles';

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
      }}
    >
      {/* Subtle background glow */}
      <div
        className="orb-a"
        style={{
          position: 'absolute', right: '-5%', top: '15%',
          width: 'clamp(300px, 40vw, 520px)',
          height: 'clamp(300px, 40vw, 520px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 38%, #00827c 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
      />

      <div className="hero-inner">
        {/* Text column */}
        <div style={{ flex: '1 1 52%', minWidth: 0 }}>
          <div
            className="eyebrow hero-badge"
            style={{ marginBottom: '28px' }}
          >
            Software · Cloud · DevOps · Bolivia
          </div>

          <h1
            className="hero-h1"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 22px',
            }}
          >
            Desarrollamos software
            <br />
            <span style={{ color: '#edfffe' }}>y la nube que lo soporta</span>
          </h1>

          <p
            className="hero-sub"
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#bbc7c6',
              maxWidth: '460px',
              margin: '0 0 38px',
            }}
          >
            Creamos aplicaciones empresariales a medida e implementamos
            la infraestructura cloud que las mantiene corriendo.
            Del código a producción, sin complicaciones.
          </p>

          <div
            className="hero-ctas"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <a href="#servicios" className="btn-aurora">
              Ver servicios <ArrowUpRight size={14} />
            </a>
            <a href="#contacto" className="btn-ghost">
              Contáctanos
            </a>
          </div>
        </div>

        {/* Particle capybara column — desktop only */}
        <div className="hero-capy">
          <CapibaraParticles />
        </div>
      </div>
    </section>
  );
}
