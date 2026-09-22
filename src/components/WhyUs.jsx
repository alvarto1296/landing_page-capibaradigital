import React from 'react';
import { Zap, MapPin, Settings2 } from 'lucide-react';

const items = [
  {
    Icon: Zap,
    title: 'Del código a producción',
    description:
      'Desarrollamos el software y desplegamos la infraestructura. Un solo equipo que entiende todo el stack, sin brechas ni fricciones.',
  },
  {
    Icon: Settings2,
    title: 'Expertise real',
    description:
      'Desarrollo de software empresarial combinado con experiencia en producción en AWS, GCP, Kubernetes y el ecosistema DevOps moderno.',
  },
  {
    Icon: MapPin,
    title: 'Equipo local',
    description:
      'Empresa boliviana con visión global. Atención directa, en tu zona horaria, en español y con conocimiento de tu mercado.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="por-que"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#020617 0%,#0f172a 50%,#020617 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">¿Por qué nosotros?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Lo que nos hace diferentes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map(({ Icon, title, description }) => (
            <div key={title} className="text-center group">
              <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-500/20 transition-colors">
                <Icon size={26} className="text-teal-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
