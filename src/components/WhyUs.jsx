import React from 'react';
import { Zap, Settings2, MapPin } from 'lucide-react';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';

const stats = [
  { value: '100%', label: 'Cloud Native'       },
  { value: 'Full', label: 'Stack Coverage'      },
  { value: '<24h', label: 'Tiempo de respuesta' },
];

const items = [
  {
    Icon: Zap,
    title: 'Del código a producción',
    description: 'Desarrollamos el software y desplegamos la infraestructura. Un solo equipo que entiende todo el stack, sin brechas ni fricciones entre desarrollo y operaciones.',
  },
  {
    Icon: Settings2,
    title: 'Expertise real',
    description: 'Desarrollo de software empresarial combinado con experiencia en producción en AWS, GCP, Kubernetes y el ecosistema DevOps moderno.',
  },
  {
    Icon: MapPin,
    title: 'Equipo local',
    description: 'Empresa boliviana con visión global. Atención directa, en tu zona horaria, en español y con conocimiento del mercado regional.',
  },
];

export default function WhyUs() {
  const headerRef = useReveal();
  const statsRef  = useStaggerReveal(100);
  const itemsRef  = useStaggerReveal(110);

  return (
    <section id="por-que" className="section-pad" style={{ backgroundColor: '#011d1c' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div ref={headerRef} className="fade-up" style={{ marginBottom: '48px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>¿Por qué nosotros?</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)', fontWeight: 500, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
            Lo que nos hace diferentes
          </h2>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid-stats" style={{ marginBottom: '12px' }}>
          {stats.map(s => (
            <div key={s.label} className="card fade-up" style={{ padding: '28px 24px' }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.035em', color: '#fde9ff', marginBottom: '10px' }}>
                {s.value}
              </div>
              <div className="eyebrow" style={{ fontSize: '11px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Items */}
        <div ref={itemsRef} className="grid-auto">
          {items.map(({ Icon, title, description }) => (
            <div key={title} className="card fade-up" style={{ padding: '32px' }}>
              <Icon size={18} style={{ color: '#edfffe', opacity: 0.55, marginBottom: '20px', display: 'block' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 12px' }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: '#bbc7c6', lineHeight: 1.65, margin: 0 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
