const STEPS = [
  {
    number: '01',
    title: 'Ingredientes Reales',
    desc: 'Carne muscular, huesos carnosos, órganos seleccionados, frutas y verduras orgánicas.',
  },
  {
    number: '02',
    title: 'Mínimamente Procesado',
    desc: 'A diferencia de los alimentos industriales, el enfoque BARF prioriza ingredientes frescos y mínimamente procesados.',
  },
  {
    number: '03',
    title: 'Nutrición Completa',
    desc: 'Combina nutrientes reales y funcionales que favorecen el bienestar integral de tu mascota.',
  },
  {
    number: '04',
    title: 'Fórmulas Balanceadas',
    desc: 'En Wächter desarrollamos la dieta con fórmulas balanceadas y funcionales, sin conservantes innecesarios.',
  },
]

export default function BarfSection() {
  return (
    <section id="barf" className="relative py-28 sm:py-36 bg-brand-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(193,172,138,0.04)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-brand-gold/70 mb-5">
            Nutrición natural
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-6">
            ¿Qué es la dieta{' '}
            <span className="text-brand-gold italic">B.A.R.F.</span>
            <span className="text-brand-gold">?</span>
          </h2>
          <div className="w-14 h-[1px] bg-brand-gold/40 mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-white/50 text-base sm:text-lg leading-relaxed font-light">
            La dieta BARF —<span className="italic text-white/60">Biologically Appropriate Raw Food</span>—
            es una alimentación natural para mascotas basada en ingredientes reales y
            biológicamente apropiados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="group relative p-8 sm:p-10 bg-brand-black hover:bg-white/[0.02] transition-all duration-500"
            >
              <span className="font-serif text-5xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-500 block mb-6">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 p-8 sm:p-10 bg-white/[0.02] border border-white/[0.06] max-w-4xl mx-auto text-center">
          <p className="text-white/55 text-sm sm:text-base leading-relaxed italic">
            "En Wächter Pet Nutrition desarrollamos la dieta con fórmulas balanceadas
            y funcionales, elaboradas con ingredientes reales, naturales y sin
            conservantes innecesarios para el cuidado y mantenimiento de tu mascota."
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase">
            <div className="h-[1px] w-8 bg-brand-gold/30" />
            <span className="text-brand-gold/70">Wächter Pet Nutrition</span>
            <div className="h-[1px] w-8 bg-brand-gold/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
