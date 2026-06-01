export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/cat_p1_xref141.jpeg`}
          alt="Wächter Pet Nutrition"
          className="w-full h-full object-cover scale-105"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(193,172,138,0.06)_0%,_transparent_70%)]" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-gold/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="flex justify-center mb-10">
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}images/wachter_logo.png`}
              alt="Wächter"
              className="h-20 sm:h-24 w-auto opacity-95 drop-shadow-[0_0_30px_rgba(193,172,138,0.2)]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-brand-gold/5 rounded-full blur-2xl opacity-60" />
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-center gap-4 text-brand-gold/60">
            <div className="h-[1px] w-12 bg-brand-gold/30" />
            <span className="text-[11px] tracking-[0.35em] uppercase font-medium">
              Nutrición natural &amp; funcional
            </span>
            <div className="h-[1px] w-12 bg-brand-gold/30" />
          </div>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-4 tracking-tight">
          La excelencia
          <br />
          <span className="text-brand-gold italic">también se alimenta</span>
        </h1>

        <div className="w-20 h-[1px] bg-brand-gold/40 mx-auto my-8" />

        <p className="max-w-xl mx-auto text-white/50 text-base sm:text-lg leading-relaxed mb-12 font-light">
          Alimentación BARF biológicamente apropiada, elaborada con ingredientes reales
          para el bienestar integral de tu perro.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#productos"
            className="group relative px-10 py-4 bg-brand-gold text-black text-sm tracking-[0.25em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(193,172,138,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver catálogo
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </a>
          <a
            href="#barf"
            className="group px-10 py-4 border border-white/15 text-white/80 text-sm tracking-[0.25em] uppercase hover:border-brand-gold/50 hover:text-brand-gold transition-all duration-500"
          >
            <span className="flex items-center gap-2">
              Descubrir BARF
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
          <svg className="w-4 h-4 text-brand-gold/50 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
