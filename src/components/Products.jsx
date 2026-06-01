const PRODUCTS = [
  {
    name: 'BARF ESSENTIAL',
    subtitle: 'Carne muscular de res',
    desc: 'Elaborada con carne muscular de res, huesos carnosos, órganos seleccionados y vegetales orgánicos.',
    price: '55',
    unit: 'Bs/kg',
    image: '/images/product_card_5.png',
  },
  {
    name: 'BARF SELECT',
    subtitle: 'Carne de pollo y menudencias',
    desc: 'Combinación de pollo criollo, menudencias seleccionadas, frutas y verduras orgánicas.',
    price: '48',
    unit: 'Bs/kg',
    image: '/images/product_card_6.png',
  },
  {
    name: 'BARF SIGNATURE',
    subtitle: 'Mix de carnes y superfoods',
    desc: 'Mezcla premium de carnes, vísceras y superfoods. Nutrición funcional de alto nivel.',
    price: '65',
    unit: 'Bs/kg',
    image: '/images/product_card_7.png',
  },
]

export default function Products() {
  const openWhatsApp = (productName) => {
    const msg = `Hola%20quiero%20este%20producto%3A%20${encodeURIComponent(productName)}`
    window.open(`https://wa.me/59177928757?text=${msg}`, '_blank')
  }

  return (
    <section id="productos" className="relative py-28 sm:py-36 bg-brand-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(193,172,138,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-brand-gold/70 mb-5">
            Ingredientes reales
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-6">
            Nuestros{' '}
            <span className="text-brand-gold italic">productos</span>
          </h2>
          <div className="w-14 h-[1px] bg-brand-gold/40 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/50 text-base font-light">
            Nutrición natural y funcional, elaborada con ingredientes reales
            cuidadosamente seleccionados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="group relative bg-white/[0.015] border border-white/[0.06] hover:border-brand-gold/25 transition-all duration-700 overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-brand-gold/20 text-brand-gold text-[10px] tracking-[0.25em] uppercase font-medium">
                    BARF
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-brand-gold/70 text-[11px] tracking-[0.25em] uppercase mb-1.5">
                  {product.subtitle}
                </p>
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-2">
                  {product.desc}
                </p>

                <div className="flex items-baseline gap-1.5 mb-7">
                  <span className="font-serif text-3xl text-brand-gold">Bs. {product.price}</span>
                  <span className="text-white/30 text-sm">/kg</span>
                </div>

                <button
                  onClick={() => openWhatsApp(product.name)}
                  className="w-full group/btn relative px-6 py-3.5 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[11px] tracking-[0.25em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(193,172,138,0.15)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Comprar por WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-brand-gold scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-700 origin-left" />
                  <div className="absolute inset-0 -z-10 bg-brand-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
