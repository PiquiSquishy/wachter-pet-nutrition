const REASONS = [
  {
    number: '01',
    title: 'Ingredientes reales',
    desc: 'Seleccionamos cuidadosamente cada ingrediente, priorizando nutrición completa y natural.',
  },
  {
    number: '02',
    title: 'Nutrición natural',
    desc: 'Trabajamos con estándares orientados a ofrecer productos naturales, balanceados y mínimamente procesados.',
  },
  {
    number: '03',
    title: 'Sin conservantes',
    desc: 'Sin conservantes ni aditivos artificiales innecesarios. Solo ingredientes puros y naturales.',
  },
  {
    number: '04',
    title: 'Bienestar animal',
    desc: 'Nuestra filosofía se basa en excelencia, calidad y bienestar animal como principios fundamentales.',
  },
  {
    number: '05',
    title: 'Alimentación funcional',
    desc: 'Desarrollamos nutrición natural y funcional para mascotas bajo una filosofía de excelencia.',
  },
  {
    number: '06',
    title: 'Digestión saludable',
    desc: 'Formulamos para promover digestión saludable, condición física y bienestar integral.',
  },
]

export default function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="relative py-28 sm:py-36 bg-brand-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(193,172,138,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-brand-gold/70 mb-5">
            Nuestra filosofía
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-6">
            ¿Por qué{' '}
            <span className="text-brand-gold italic">elegirnos</span>?
          </h2>
          <div className="w-14 h-[1px] bg-brand-gold/40 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/50 text-base font-light leading-relaxed">
            En Wächter Pet Nutrition desarrollamos nutrición natural y funcional para
            las mascotas bajo una filosofía de excelencia, calidad y bienestar animal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {REASONS.map((reason, i) => (
            <div
              key={i}
              className="group p-8 sm:p-10 bg-brand-dark hover:bg-white/[0.02] transition-all duration-500"
            >
              <span className="font-serif text-4xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-500 block mb-5">
                {reason.number}
              </span>
              <h3 className="font-serif text-lg text-white mb-2.5 group-hover:text-brand-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-[1px] flex-1 max-w-24 bg-brand-gold/20" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-brand-gold/50">Filosofía</span>
              <div className="h-[1px] flex-1 max-w-24 bg-brand-gold/20" />
            </div>
            <p className="font-serif text-3xl sm:text-4xl text-brand-gold italic leading-[1.3]">
              "La excelencia también se alimenta"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
