import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Mail, MapPin } from 'lucide-react';

const WA_NUMBER = '59171254296';
const WA_MSG    = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de Capibara Digital.');
const EMAIL     = 'info@capibaradigital.com';

const inputBase = {
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#011d1c',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '6px',
  padding: '12px 14px',
  color: '#ffffff',
  fontSize: '14px',
  fontFamily: 'inherit',
  outline: 'none',
};

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  function onChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onFocus(e)  { e.target.style.borderColor = 'rgba(0,196,184,0.4)'; }
  function onBlur(e)   { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }

  function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(`Contacto desde Capibara Digital — ${form.name}`);
    const body    = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus('done');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  }

  return (
    <section id="contacto" className="section-pad" style={{ backgroundColor: '#011d1c' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Contacto</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)', fontWeight: 500, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 16px' }}>
            Hablemos de tu proyecto
          </h2>
          <p style={{ fontSize: '15px', color: '#bbc7c6', lineHeight: 1.65, margin: 0, maxWidth: '460px' }}>
            ¿Listo para llevar tu infraestructura al siguiente nivel? Escríbenos y respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid-contact">

          {/* Form */}
          <form onSubmit={onSubmit} className="card card-pad" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { name: 'name',  label: 'Nombre', type: 'text',  placeholder: 'Tu nombre completo' },
              { name: 'email', label: 'Email',  type: 'email', placeholder: 'tu@empresa.com'     },
            ].map(f => (
              <div key={f.name}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#bbc7c6', marginBottom: '8px' }}>
                  {f.label}
                </label>
                <input
                  type={f.type} name={f.name} required
                  value={form[f.name]} onChange={onChange}
                  placeholder={f.placeholder}
                  style={inputBase} onFocus={onFocus} onBlur={onBlur}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#bbc7c6', marginBottom: '8px' }}>
                Mensaje
              </label>
              <textarea
                name="message" required rows={5}
                value={form.message} onChange={onChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                style={{ ...inputBase, resize: 'none' }}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="btn-aurora"
              style={{ justifyContent: 'center' }}
            >
              {status === 'done' ? '¡Enviado!' : status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              <ArrowUpRight size={14} />
            </button>
          </form>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                href: `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`,
                Icon: MessageCircle,
                iconBg: 'rgba(0,160,80,0.18)',
                iconColor: '#4ade80',
                title: 'WhatsApp',
                sub: 'Respuesta rápida',
                external: true,
              },
              {
                href: `mailto:${EMAIL}`,
                Icon: Mail,
                iconBg: 'rgba(3,81,75,0.5)',
                iconColor: '#edfffe',
                title: 'Email',
                sub: EMAIL,
              },
            ].map(({ href, Icon, iconBg, iconColor, title, sub, external }) => (
              <a
                key={title}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="card"
                style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.78'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <div className="arrow-btn" style={{ width: '40px', height: '40px', background: iconBg }}>
                  <Icon size={16} style={{ color: iconColor }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#ffffff', marginBottom: '2px' }}>{title}</div>
                  <div className="eyebrow" style={{ fontSize: '10px' }}>{sub}</div>
                </div>
                <ArrowUpRight size={14} style={{ color: '#bbc7c6' }} />
              </a>
            ))}

            <div className="card" style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div className="arrow-btn" style={{ width: '40px', height: '40px', background: 'rgba(150,100,220,0.18)' }}>
                <MapPin size={16} style={{ color: '#fde9ff' }} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#ffffff', marginBottom: '2px' }}>Ubicación</div>
                <div className="eyebrow" style={{ fontSize: '10px' }}>La Paz, Bolivia</div>
              </div>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div className="eyebrow" style={{ fontSize: '10px', letterSpacing: '0.15em', marginBottom: '16px' }}>Horario de atención</div>
              {[['Lunes — Viernes', '8:00 — 18:00'], ['Sábado', '9:00 — 13:00'], ['Domingo', 'Cerrado']].map(([day, hours]) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '10px' }}>
                  <span style={{ color: '#bbc7c6' }}>{day}</span>
                  <span style={{ color: '#edfffe', fontWeight: 500 }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
