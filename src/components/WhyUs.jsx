import React from 'react';
import { Zap, Settings2, MapPin } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Cloud Native'          },
  { value: 'Full', label: 'Stack Coverage'         },
  { value: '<24h', label: 'Tiempo de respuesta'    },
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
  return (
    <section id="por-que" style={{ backgroundColor: '#011d1c', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>¿Por qué nosotros?</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)', fontWeight: 500, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
            Lo que nos hace diferentes
          </h2>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
          {stats.map(s => (
            <div key={s.label} className="card" style={{ padding: '36px 32px' }}>
              <div style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.035em', color: '#fde9ff', marginBottom: '10px' }}>
                {s.value}
              </div>
              <div className="eyebrow" style={{ fontSize: '11px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
          {items.map(({ Icon, title, description }) => (
            <div key={title} className="card" style={{ padding: '36px' }}>
              <Icon size={18} style={{ color: '#edfffe', opacity: 0.55, marginBottom: '20px', display: 'block' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 12px' }}>
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
