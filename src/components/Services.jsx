import React from 'react';
import { Cloud, GitBranch, Box, Activity, ShieldCheck, Layers, Code2, ArrowUpRight } from 'lucide-react';

const featured = {
  title: 'Desarrollo de Software Empresarial e Integraciones',
  description:
    'Diseñamos y desarrollamos aplicaciones web, APIs REST/GraphQL, microservicios y sistemas a medida adaptados a los procesos de tu empresa. Integramos tus sistemas existentes con ERP, CRM, pasarelas de pago y servicios de terceros para que todo funcione como un ecosistema unificado.',
  tags: ['React', 'Node.js', 'Python', 'REST APIs', 'GraphQL', 'Microservicios', 'ERP / CRM', 'Webhooks'],
};

const services = [
  { Icon: Cloud,       title: 'Cloud Infrastructure',       description: 'Diseño, migración y gestión de infraestructura en AWS, GCP y Azure. Arquitecturas escalables y de alta disponibilidad.',                    tags: ['AWS', 'GCP', 'Azure'] },
  { Icon: GitBranch,   title: 'DevOps & CI/CD',             description: 'Automatización de pipelines de integración y entrega continua para acelerar ciclos de desarrollo y reducir errores.',                       tags: ['GitHub Actions', 'GitLab CI', 'Jenkins'] },
  { Icon: Box,         title: 'Contenedores & Kubernetes',  description: 'Contenedorización y orquestación con Kubernetes para entornos resilientes, portables y auto-escalables.',                                   tags: ['Docker', 'Kubernetes', 'Helm'] },
  { Icon: Layers,      title: 'Infrastructure as Code',     description: 'Infraestructura reproducible y versionada con código declarativo, eliminando la configuración manual y el error humano.',                    tags: ['Terraform', 'Ansible', 'Pulumi'] },
  { Icon: Activity,    title: 'Monitoreo & Observabilidad', description: 'Visibilidad total: métricas, trazas, alertas y análisis de logs en tiempo real para mantener tus sistemas operando sin fricciones.',          tags: ['Prometheus', 'Grafana', 'ELK'] },
  { Icon: ShieldCheck, title: 'DevSecOps',                  description: 'Seguridad integrada en cada etapa: análisis de vulnerabilidades, gestión de secretos, compliance y hardening de entornos.',                   tags: ['Vault', 'Trivy', 'SAST/DAST'] },
];

const tagStyle = {
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.05em',
  color: '#bbc7c6',
  backgroundColor: 'rgba(255,255,255,0.06)',
  borderRadius: '6px',
  padding: '3px 9px',
};

export default function Services() {
  return (
    <section id="servicios" style={{ backgroundColor: '#012624', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Servicios</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)', fontWeight: 500, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, maxWidth: '580px' }}>
            Software que funciona,<br />infraestructura que escala
          </h2>
        </div>

        {/* Featured card */}
        <div className="card" style={{ padding: '40px 44px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', fontWeight: 500, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
              {featured.title}
            </h3>
            <a href="#contacto" className="arrow-btn"><ArrowUpRight size={14} /></a>
          </div>
          <p style={{ fontSize: '15px', color: '#bbc7c6', lineHeight: 1.65, margin: '0 0 24px', maxWidth: '760px' }}>
            {featured.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {featured.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
          {services.map(({ Icon, title, description, tags }) => (
            <div key={title} className="card" style={{ padding: '36px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Icon size={18} style={{ color: '#edfffe', opacity: 0.65 }} />
                <a href="#contacto" className="arrow-btn"><ArrowUpRight size={13} /></a>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#ffffff', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0 0 10px' }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: '#bbc7c6', lineHeight: 1.65, margin: '0 0 20px', flexGrow: 1 }}>
                {description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
