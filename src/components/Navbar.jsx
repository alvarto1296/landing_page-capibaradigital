import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros',  href: '#por-que'  },
  { label: 'Stack',     href: '#stack'    },
  { label: 'Contacto',  href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const barStyle = {
    position: 'fixed', top: 0, width: '100%', zIndex: 50,
    transition: 'background 0.3s, border-color 0.3s',
    backgroundColor: scrolled ? '#012624' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
  };

  return (
    <nav style={barStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/favicon.ico" alt="Capibara Digital" style={{ width: '28px', height: '28px' }} />
          <span style={{ fontWeight: 500, fontSize: '15px', color: '#ffffff', letterSpacing: '-0.01em' }}>
            Capibara Digital
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>
        <div className="hidden md:flex">
          <a href="#contacto" className="btn-aurora">Contactar</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#bbc7c6', padding: '4px' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: '#012624', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contacto" className="btn-aurora" style={{ justifyContent: 'center' }} onClick={() => setOpen(false)}>
            Contactar
          </a>
        </div>
      )}
    </nav>
  );
}
