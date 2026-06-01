const BENEFITS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Mejor digestión',
    desc: 'Favorece una digestión más eficiente y mejora la absorción natural de los nutrientes.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Más energía',
    desc: 'Ayuda a mantener niveles de energía más estables durante todo el día.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Pelaje brillante',
    desc: 'Contribuye a una piel sana, pelaje brillante y fuerte gracias a los nutrientes reales.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11" />
      </svg>
    ),
    title: 'Mejor condición física',
    desc: 'Ayuda a mantener músculos fuertes y una mejor condición corporal general.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Nutrición natural',
    desc: 'Basada en ingredientes reales y mínimamente procesados, sin aditivos artificiales.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Mejor salud articular',
    desc: 'Favorece la salud articular y movilidad, apoyando el sistema inmunológico de forma natural.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-28 sm:py-36 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(193,172,138,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-brand-gold/70 mb-5">
            Bienestar integral
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-6">
            Beneficios{' '}
            <span className="text-brand-gold italic">B.A.R.F.</span>
          </h2>
          <div className="w-14 h-[1px] bg-brand-gold/40 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative flex justify-center lg:sticky lg:top-32">
            <div className="relative max-w-md lg:max-w-none">
              <img
                src={`${import.meta.env.BASE_URL}images/page1_img0.png`}
                alt="Perro saludable - Alimentación BARF"
                className="w-full h-auto object-contain opacity-90 drop-shadow-[0_0_80px_rgba(193,172,138,0.1)]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 via-transparent to-brand-dark/20 lg:bg-none" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="group p-6 sm:p-8 bg-brand-dark hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/15 text-brand-gold mb-4 group-hover:border-brand-gold/30 group-hover:bg-brand-gold/5 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
