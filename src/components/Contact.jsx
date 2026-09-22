import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin } from 'lucide-react';

const WA_NUMBER = '59171254296';
const WA_MSG    = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de Capibara Digital.');
const EMAIL     = 'info@capibaradigital.com';

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done

  function onChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(`Contacto desde Capibara Digital — ${form.name}`);
    const body    = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus('done');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 500);
  }

  return (
    <section
      id="contacto"
      className="py-24 px-4 relative"
      style={{ background: 'linear-gradient(180deg,#020617 0%,#0f172a 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Contacto</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Hablemos de tu proyecto
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            ¿Listo para llevar tu infraestructura al siguiente nivel?
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          {/* Form */}
          <form onSubmit={onSubmit} className="glass rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Tu nombre completo"
                className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="tu@empresa.com"
                className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25"
            >
              {status === 'done'
                ? '¡Mensaje enviado!'
                : status === 'sending'
                ? 'Abriendo correo...'
                : 'Enviar mensaje'}
              <Send size={16} />
            </button>
          </form>

          {/* Info */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-lg">Otras formas de contactarnos</h3>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-xl p-4 hover:border-green-500/30 group transition-all"
            >
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors shrink-0">
                <MessageCircle size={19} className="text-green-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">WhatsApp</div>
                <div className="text-slate-500 text-xs">Respuesta rápida · haz clic para chatear</div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 glass rounded-xl p-4 hover:border-teal-500/30 group transition-all"
            >
              <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors shrink-0">
                <Mail size={19} className="text-teal-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Email</div>
                <div className="text-slate-500 text-xs">{EMAIL}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 glass rounded-xl p-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={19} className="text-purple-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Ubicación</div>
                <div className="text-slate-500 text-xs">La Paz, Bolivia</div>
              </div>
            </div>

            <div className="glass rounded-xl p-5">
              <h4 className="text-white font-semibold text-sm mb-3">Horario de atención</h4>
              <div className="space-y-1.5 text-sm">
                {[
                  ['Lunes — Viernes', '8:00 — 18:00'],
                  ['Sábado',          '9:00 — 13:00'],
                  ['Domingo',         'Cerrado'],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-slate-500">{day}</span>
                    <span className="text-slate-300">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
