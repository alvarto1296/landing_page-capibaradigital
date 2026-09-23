import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const navLinks = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Nosotros',   href: '#por-que'   },
  { label: 'Stack',      href: '#stack'     },
  { label: 'Contacto',   href: '#contacto'  },
];

// TODO: reemplaza '#' con las URLs reales cuando tengas las cuentas
const socials = [
  { Icon: FaGithub,     href: '#', label: 'GitHub'      },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn'     },
  { Icon: FaXTwitter,   href: '#', label: 'Twitter / X'  },
  { Icon: FaInstagram,  href: '#', label: 'Instagram'    },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#011d1c', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '48px', marginBottom: '64px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/favicon.ico" alt="Capibara Digital" style={{ width: '26px', height: '26px' }} />
              <span style={{ fontWeight: 500, fontSize: '15px', color: '#ffffff', letterSpacing: '-0.01em' }}>
                Capibara Digital
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#bbc7c6', lineHeight: 1.65, margin: 0 }}>
              Software & IT en la nube. Construimos infraestructura que escala y equipos que entregan.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="eyebrow" style={{ fontSize: '10px', letterSpacing: '0.15em', marginBottom: '20px' }}>
              Navegación
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="nav-link" style={{ fontSize: '12px' }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="eyebrow" style={{ fontSize: '10px', letterSpacing: '0.15em', marginBottom: '20px' }}>
              Redes sociales
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="arrow-btn">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span className="eyebrow" style={{ fontSize: '11px' }}>
            © {new Date().getFullYear()} Capibara Digital. Todos los derechos reservados.
          </span>
          <span className="eyebrow" style={{ fontSize: '11px' }}>
            Hecho en Bolivia 🇧🇴
          </span>
        </div>
      </div>
    </footer>
  );
}
