import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 pt-16">
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow-delay" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-8 text-xs font-semibold text-teal-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          Software · Cloud · DevOps · Bolivia
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Desarrollamos software{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
            y la nube que lo soporta
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Creamos aplicaciones empresariales a medida e implementamos la infraestructura cloud
          que las mantiene corriendo. Del código a producción, sin complicaciones.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/25"
          >
            Ver servicios <ArrowRight size={18} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center glass hover:bg-white/8 text-slate-200 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-teal-400 transition-colors animate-float"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
