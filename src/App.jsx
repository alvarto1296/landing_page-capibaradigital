import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-900">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/20 rounded-full blur-120 animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-120 animate-pulse-slow delay-1000"></div>

      {/* Main Card */}
      <main className="relative z-10 max-w-2xl w-full mx-auto px-4">
        <div className="glass-panel p-8 md:p-12 lg:p-14 text-center rounded-3xl border border-white/10">
          {/* Logo / Brand */}
          <div className="mb-6 md:mb-8 relative inline-block">
            <div className="absolute inset-0 bg-teal-500 blur-60 opacity-40 rounded-full animate-pulse-slow" style={{ transform: 'scale(0.8)' }}></div>
            <img
              src="/favicon.ico"
              alt="Capibara Digital Logo"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500 tracking-tight">
              Capibara
              {/* Aumenté SIGNIFICATIVAMENTE el margen aquí */}
              <span className="block text-white mt-4 md:mt-6 lg:mt-8 font-normal">Digital</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto my-6 md:my-8 rounded-full opacity-50"></div>

          {/* Status Message */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-200 mb-3 md:mb-4 font-light tracking-wide">
            Estamos en construcción
          </h2>

          <p className="text-slate-400 max-w-md mx-auto leading-relaxed text-sm md:text-base px-2">
            Estamos preparando una experiencia digital excepcional.
            <br className="hidden md:block" />
            Vuelve pronto para ver el futuro.
          </p>

          {/* Interactive Element (Loader/Status) */}
          <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-teal-500 rounded-full animate-bounce"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-teal-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-teal-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="absolute bottom-4 md:bottom-6 w-full text-center text-slate-500 text-xs md:text-sm px-4">
        &copy; {new Date().getFullYear()} Capibara Digital. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;