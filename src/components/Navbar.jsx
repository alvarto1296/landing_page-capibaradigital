import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Servicios',       href: '#servicios' },
  { label: '¿Por qué nosotros?', href: '#por-que' },
  { label: 'Stack',           href: '#stack' },
  { label: 'Contacto',        href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/30' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/favicon.ico" alt="Capibara Digital" className="w-8 h-8" />
          <span className="font-bold text-white text-lg tracking-tight">
            <span className="text-teal-400">Capibara</span> Digital
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Contactar
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-4 py-5 flex flex-col gap-4">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-teal-400 transition-colors text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors text-center"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
