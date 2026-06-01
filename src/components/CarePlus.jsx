export default function CarePlus() {
  const openWhatsApp = () => {
    const msg = 'Hola%2C%20quiero%20contribuir%20con%20W%C3%A4chter%20Care%2B'
    window.open(`https://wa.me/59177928757?text=${msg}`, '_blank')
  }

  return (
    <section id="care" className="relative py-28 sm:py-36 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(193,172,138,0.04)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-brand-gold/70 mb-5">
              Solidaridad
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-8">
              Wächter{' '}
              <span className="text-brand-gold italic">Care+</span>
            </h2>
            <div className="w-14 h-[1px] bg-brand-gold/40 mb-10" />

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Creemos que una buena alimentación también puede convertirse en ayuda.
            </p>

            <p className="text-white/40 text-sm leading-relaxed mb-10">
              A través de <span className="text-white/60 font-medium">Wächter Care+</span>,
              puedes adquirir productos solidarios a un precio especial para que
              nosotros realicemos la entrega directa a refugios y animales que
              necesitan apoyo. Con cada aporte, ayudas a brindar alimentación de
              calidad, bienestar y una segunda oportunidad a perros y gatos en
              situación vulnerable.
            </p>

            <div className="p-6 sm:p-8 border border-brand-gold/15 bg-brand-gold/[0.02] mb-10">
              <p className="font-serif text-xl sm:text-2xl text-brand-gold italic leading-relaxed">
                "Porque alimentar también es cuidar"
              </p>
            </div>

            <button
              onClick={openWhatsApp}
              className="group relative px-10 py-4 border border-brand-gold/30 text-brand-gold text-sm tracking-[0.25em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(193,172,138,0.15)]"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quiero contribuir
              </span>
              <div className="absolute inset-0 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="absolute inset-0 -z-10 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-brand-dark border border-white/[0.06] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/catalog_page_8.png`}
                alt="Wächter Care+"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 border-l border-b border-brand-gold/20" />
            <div className="absolute -top-5 -right-5 w-20 h-20 border-r border-t border-brand-gold/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
