import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'BARF', href: '#barf' },
  { label: 'Productos', href: '#productos' },
  { label: 'Care+', href: '#care' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl shadow-[0_1px_0_rgba(193,172,138,0.08)]'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#hero" className="flex items-center group">
            <div className="relative">
              <img
                src="/images/wachter_logo.png"
                alt="Wächter Pet Nutrition"
                className="h-10 sm:h-12 w-auto transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_20px_rgba(193,172,138,0.2)]"
              />
              <div className="absolute -inset-4 bg-brand-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-[0.25em] uppercase text-white/60 hover:text-brand-gold transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/59177928757?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20W%C3%A4chter%20Pet%20Nutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2.5 px-6 py-3 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-brand-gold hover:text-black transition-all duration-500 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Menú"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-[1.5px] bg-white/80 transition-all duration-500 ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-white/80 transition-all duration-500 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] bg-white/80 transition-all duration-500 ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 bg-black/90 backdrop-blur-xl border-t border-white/5 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-[0.25em] uppercase text-white/60 hover:text-brand-gold transition-colors py-3"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/59177928757?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20W%C3%A4chter%20Pet%20Nutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-6 py-3.5 border border-brand-gold/30 text-brand-gold text-sm tracking-[0.25em] uppercase hover:bg-brand-gold hover:text-black transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
