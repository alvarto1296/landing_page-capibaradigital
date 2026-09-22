import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const navLinks = [
  { label: 'Servicios',          href: '#servicios' },
  { label: '¿Por qué nosotros?', href: '#por-que' },
  { label: 'Stack',              href: '#stack' },
  { label: 'Contacto',           href: '#contacto' },
];

// TODO: reemplaza los href '#' con tus URLs reales cuando tengas las cuentas
const socials = [
  { Icon: FaGithub,     href: '#', label: 'GitHub' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaXTwitter,   href: '#', label: 'Twitter / X' },
  { Icon: FaInstagram,  href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/favicon.ico" alt="Capibara Digital" className="w-7 h-7" />
              <span className="font-bold text-white tracking-tight">
                <span className="text-teal-400">Capibara</span> Digital
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Software & IT en la nube. Construimos infraestructura que escala y equipos que entregan.
            </p>
          </div>

          <div>
            <h4 className="text-slate-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-teal-400 transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Redes sociales
            </h4>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-500/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-600 text-xs">
          <span>© {new Date().getFullYear()} Capibara Digital. Todos los derechos reservados.</span>
          <span>Hecho en Bolivia 🇧🇴</span>
        </div>
      </div>
    </footer>
  );
}
