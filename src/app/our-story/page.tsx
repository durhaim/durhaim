import Link from 'next/link';
import type { Metadata } from 'next';
import LocalizedText from '@/components/LocalizedText';

export const metadata: Metadata = {
  title: 'Our Story - DURHAIM',
  description:
    'The Durhaim story: tactical gear engineered around durability, hard impact, and modular field use. Handcrafted in Bandung, Indonesia.',
};

const values = [
  {
    icon: 'precision_manufacturing',
    title: { en: 'Handcrafted Precision', id: 'Presisi Buatan Tangan' },
    text: {
      en: 'Every stitch is placed by experienced hands on industrial-grade machines. No shortcuts, no mass automation — just focused craftsmanship.',
      id: 'Setiap jahitan ditempatkan oleh tangan berpengalaman pada mesin kelas industri. Tanpa jalan pintas, tanpa otomasi massal — hanya keahlian terfokus.',
    },
  },
  {
    icon: 'shield',
    title: { en: 'Built for Hard Impact', id: 'Dibuat untuk Benturan Berat' },
    text: {
      en: 'Our gear is engineered to withstand repeated hard use in the field. Materials and construction methods are tested beyond standard requirements.',
      id: 'Gear kami dirancang untuk bertahan dari penggunaan berat berulang di lapangan. Material dan metode konstruksi diuji melampaui standar.',
    },
  },
  {
    icon: 'view_module',
    title: { en: 'Modular by Design', id: 'Modular Secara Desain' },
    text: {
      en: 'Every platform supports mission-specific configurations. Swap, attach, and reconfigure — your loadout adapts to you.',
      id: 'Setiap platform mendukung konfigurasi sesuai misi. Tukar, pasang, dan konfigurasi ulang — loadout menyesuaikan kebutuhan Anda.',
    },
  },
];

const stats = [
  { value: '2019', label: { en: 'Founded', id: 'Didirikan' } },
  { value: '100%', label: { en: 'Handmade', id: 'Buatan Tangan' } },
  { value: 'IDN', label: { en: 'Made in Indonesia', id: 'Buatan Indonesia' } },
];

export default function OurStoryPage() {
  return (
    <main id="main-content" className="flex-grow flex flex-col relative w-full">
      {/* ─── SECTION 1: Hero with dark texture background ─── */}
      <section className="our-story-hero relative w-full overflow-hidden bg-tactical-black">
        {/* Background: dark-texture image */}
        <div className="absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover opacity-40"
            alt=""
            src="/storefront/our-story/dark-texture-bg.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tactical-black/60 via-transparent to-tactical-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-margin-edge max-w-[1440px] mx-auto pt-40 pb-24 md:pt-52 md:pb-32">
          <div
            className="inline-block border border-signal-orange bg-tactical-black/80 px-4 py-2 mb-stack-lg backdrop-blur-sm rounded-md"
            style={{ borderRadius: '6px' }}
          >
            <span className="font-data-mono text-data-mono text-signal-orange uppercase tracking-widest">
              <LocalizedText en="Est. 2019 // Bandung" id="Est. 2019 // Bandung" />
            </span>
          </div>
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-stark-white uppercase tracking-tighter mb-stack-md">
            <LocalizedText en="Our Story" id="Cerita Kami" />
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
            <LocalizedText
              en="From a small workshop in Bandung to equipping operators across Indonesia — DURHAIM builds tactical gear with hands that understand the field."
              id="Dari bengkel kecil di Bandung hingga melengkapi operator di seluruh Indonesia — DURHAIM membangun tactical gear dengan tangan yang memahami lapangan."
            />
          </p>
          {/* Scroll Indicator */}
          <div className="mt-stack-lg flex flex-col items-center animate-bounce">
            <span className="font-data-mono text-data-mono text-stark-white/50 mb-2 uppercase">
              <LocalizedText en="Scroll" id="Gulir" />
            </span>
            <span className="material-symbols-outlined text-signal-orange">south</span>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Workshop — Craftsmanship ─── */}
      <section className="relative w-full py-section-gap px-margin-edge bg-tactical-black" id="craftsmanship">
        <div className="max-w-[1440px] mx-auto">
          {/* Phase header */}
          <div className="flex items-center gap-2 mb-stack-md">
            <div className="h-px w-8 bg-signal-orange" />
            <span className="font-data-mono text-data-mono text-signal-orange uppercase">
              <LocalizedText en="Phase 01 // Craftsmanship" id="Fase 01 // Keahlian" />
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-stark-white uppercase tracking-tight mb-stack-lg leading-tight">
                <LocalizedText en="Where Every Stitch Counts" id="Di Mana Setiap Jahitan Berarti" />
              </h2>
              <div className="space-y-stack-md text-on-surface-variant font-body-md border-l border-surface-container-highest pl-stack-md">
                <p>
                  <LocalizedText
                    en="DURHAIM gear is not assembled on a production line. Each piece is handcrafted by skilled operators in our Bandung workshop, using heavy-duty industrial sewing machines built for reinforced materials."
                    id="Gear DURHAIM tidak dirakit di lini produksi. Setiap produk dibuat secara handmade oleh operator terampil di bengkel kami di Bandung, menggunakan mesin jahit industri tugas berat yang dirancang untuk material diperkuat."
                  />
                </p>
                <p>
                  <LocalizedText
                    en="From cutting patterns to final inspection, every step is done by hand. We work with 1000D Cordura nylon, reinforced webbing, and YKK hardware — materials chosen for real-world durability, not shelf appeal."
                    id="Dari pemotongan pola hingga inspeksi akhir, setiap langkah dikerjakan secara manual. Kami menggunakan nilon Cordura 1000D, webbing diperkuat, dan hardware YKK — material yang dipilih untuk daya tahan dunia nyata, bukan penampilan di rak."
                  />
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-stack-lg grid grid-cols-3 gap-stack-md">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="bg-charcoal-field border border-surface-container-highest p-stack-md flex flex-col items-center text-center rounded-xl"
                    style={{ borderRadius: '12px' }}
                  >
                    <span className="font-headline-md text-headline-md text-signal-orange">{stat.value}</span>
                    <span className="font-data-mono text-data-mono text-stark-white/70 uppercase mt-1">
                      <LocalizedText en={stat.label.en} id={stat.label.id} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-gutter mt-stack-lg lg:mt-0">
              {/* Large image — sewing closeup */}
              <div
                className="col-span-2 relative w-full aspect-[4/3] bg-charcoal-field border border-surface-container-highest overflow-hidden group rounded-2xl"
                style={{ borderRadius: '16px' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Close-up of industrial sewing machine stitching tactical gear"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                  style={{ borderRadius: '16px' }}
                  src="/storefront/our-story/sewing-closeup.jpg"
                />
                {/* Overlay badge */}
                <div
                  className="absolute top-4 right-4 bg-tactical-black/80 border border-signal-orange px-3 py-1 backdrop-blur-sm rounded-md"
                  style={{ borderRadius: '6px' }}
                >
                  <span className="font-data-mono text-data-mono text-signal-orange">
                    <LocalizedText en="HANDMADE" id="BUATAN TANGAN" />
                  </span>
                </div>
              </div>

              {/* Workshop wide */}
              <div
                className="relative w-full aspect-[4/3] bg-charcoal-field border border-surface-container-highest overflow-hidden group rounded-2xl"
                style={{ borderRadius: '16px' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Overhead view of DURHAIM workshop with workers at sewing stations"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                  style={{ borderRadius: '16px' }}
                  src="/storefront/our-story/workshop-wide.jpg"
                />
              </div>

              {/* Workers through glass */}
              <div
                className="relative w-full aspect-[4/3] bg-charcoal-field border border-surface-container-highest overflow-hidden group rounded-2xl"
                style={{ borderRadius: '16px' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Workers at sewing machines viewed through workshop glass"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                  style={{ borderRadius: '16px' }}
                  src="/storefront/our-story/workers-glass.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Values — What We Stand For ─── */}
      <section className="w-full py-section-gap px-margin-edge bg-background border-t border-surface-container-highest topographic-pattern">
        <div className="max-w-[1440px] mx-auto">
          {/* Phase header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-stack-md">
            <div>
              <div className="flex items-center gap-2 mb-stack-sm">
                <div className="h-px w-8 bg-signal-orange" />
                <span className="font-data-mono text-data-mono text-signal-orange uppercase">
                  <LocalizedText en="Phase 02 // Principles" id="Fase 02 // Prinsip" />
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-stark-white uppercase tracking-tight">
                <LocalizedText en="What We Stand For" id="Yang Kami Pegang" />
              </h2>
            </div>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {values.map((value, index) => (
              <div
                key={value.title.en}
                className="bg-charcoal-field border border-surface-container-highest p-stack-lg flex flex-col group hover:border-signal-orange transition-colors duration-300 rounded-2xl"
                style={{ borderRadius: '16px' }}
              >
                <div className="flex justify-between items-start mb-stack-lg">
                  <span
                    className="material-symbols-outlined text-signal-orange text-3xl"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    {value.icon}
                  </span>
                  <span className="font-data-mono text-data-mono text-stark-white/40">0{index + 1}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-stark-white uppercase mb-stack-sm">
                  <LocalizedText en={value.title.en} id={value.title.id} />
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-auto">
                  <LocalizedText en={value.text.en} id={value.text.id} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Quote / Brand Statement ─── */}
      <section className="w-full py-section-gap px-margin-edge bg-tactical-black border-t border-surface-container-highest">
        <div className="max-w-[1000px] mx-auto text-center">
          <span
            className="material-symbols-outlined text-signal-orange text-5xl mb-stack-lg inline-block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
          <blockquote className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-stark-white uppercase tracking-tighter mb-stack-lg leading-tight">
            <LocalizedText
              en={'"We don\'t build gear to sit on shelves. We build it to survive the field."'}
              id={'"Kami tidak membuat gear untuk dipajang di rak. Kami membuatnya untuk bertahan di lapangan."'}
            />
          </blockquote>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-stack-lg">
            <LocalizedText
              en="DURHAIM — Durability, Hard Impact, Modular. Three pillars that define everything we create."
              id="DURHAIM — Durability, Hard Impact, Modular. Tiga pilar yang mendefinisikan semua yang kami ciptakan."
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md justify-center">
            <Link
              className="inline-flex items-center justify-center bg-signal-orange text-tactical-black font-label-caps text-label-caps uppercase px-8 py-4 border border-signal-orange hover:bg-tactical-black hover:text-signal-orange transition-all duration-300 active:scale-95 group rounded-md"
              style={{ borderRadius: '6px' }}
              href="/catalogue"
            >
              <LocalizedText en="Explore Catalogue" id="Jelajahi Katalog" />
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </Link>
            <Link
              className="inline-flex items-center justify-center bg-transparent text-stark-white font-label-caps text-label-caps uppercase px-8 py-4 border border-surface-container-highest hover:border-signal-orange hover:text-signal-orange transition-all duration-300 active:scale-95 group rounded-md"
              style={{ borderRadius: '6px' }}
              href="/battle-proven"
            >
              <LocalizedText en="Battle Proven" id="Teruji Lapangan" />
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
