import React from 'react';
import { Cloud, GitBranch, Box, Activity, ShieldCheck, Layers, Code2, Plug } from 'lucide-react';

const featured = {
  Icon: Code2,
  title: 'Desarrollo de Software Empresarial e Integraciones',
  description:
    'Diseñamos y desarrollamos aplicaciones web, APIs REST/GraphQL, microservicios y sistemas a medida adaptados a los procesos de tu empresa. Integramos tus sistemas existentes con ERP, CRM, pasarelas de pago y servicios de terceros para que todo funcione como un ecosistema unificado.',
  tags: ['React', 'Node.js', 'Python', 'REST APIs', 'GraphQL', 'Microservicios', 'ERP / CRM', 'Webhooks & Eventos'],
};

const services = [
  {
    Icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Diseño, migración y gestión de infraestructura en AWS, GCP y Azure. Arquitecturas escalables, seguras y de alta disponibilidad.',
    tags: ['AWS', 'GCP', 'Azure'],
  },
  {
    Icon: GitBranch,
    title: 'DevOps & CI/CD',
    description:
      'Automatización de pipelines de integración y entrega continua para acelerar los ciclos de desarrollo y reducir errores humanos.',
    tags: ['GitHub Actions', 'GitLab CI', 'Jenkins'],
  },
  {
    Icon: Box,
    title: 'Contenedores & Kubernetes',
    description:
      'Contenedorización de aplicaciones y orquestación con Kubernetes para entornos resilientes, portables y auto-escalables.',
    tags: ['Docker', 'Kubernetes', 'Helm'],
  },
  {
    Icon: Layers,
    title: 'Infrastructure as Code',
    description:
      'Infraestructura reproducible y versionada. Eliminamos la configuración manual con código declarativo y revisable en equipo.',
    tags: ['Terraform', 'Ansible', 'Pulumi'],
  },
  {
    Icon: Activity,
    title: 'Monitoreo & Observabilidad',
    description:
      'Visibilidad total de tus sistemas: métricas, trazas, alertas y análisis de logs en tiempo real con stacks modernos.',
    tags: ['Prometheus', 'Grafana', 'ELK Stack'],
  },
  {
    Icon: ShieldCheck,
    title: 'DevSecOps',
    description:
      'Seguridad integrada en cada etapa: análisis de vulnerabilidades, gestión de secretos, compliance y hardening de entornos.',
    tags: ['Vault', 'Trivy', 'SAST/DAST'],
  },
];

export default function Services() {
  const { Icon: FeaturedIcon, title, description, tags } = featured;

  return (
    <section id="servicios" className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Software que funciona, infraestructura que escala
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Desarrollamos tu producto y nos encargamos de toda la capa cloud que lo soporta.
          </p>
        </div>

        {/* Featured card */}
        <div className="glass rounded-2xl p-7 md:p-8 mb-5 flex flex-col md:flex-row gap-6 items-start hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 group">
          <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
            <FeaturedIcon size={26} className="text-teal-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
              <span className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full font-semibold shrink-0">
                Destacado
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <span key={t} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Regular cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, description, tags }) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 group hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Icon size={20} className="text-teal-400" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
