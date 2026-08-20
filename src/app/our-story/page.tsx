import type { Metadata } from 'next';
import LocalizedText from '@/components/LocalizedText';

export const metadata: Metadata = {
  title: 'Our Story — DURHAIM Tactical Gear',
  description:
    'Built with purpose, crafted with precision, and engineered for durability, performance, and readiness in every mission.',
};

export default function OurStoryPage() {
  return (
    <main id="main-content" className="w-full bg-[#0d0d0d] text-stark-white min-h-screen relative overflow-hidden font-[family-name:var(--font-tactic-sans)]">
      {/* Background Technical Grid / Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.03)_0%,transparent_70%)]" />
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Side Mission Timeline Indicator (Desktop) */}
      <aside aria-label="Mission Timeline" className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 h-72 w-1 hidden xl:flex flex-col items-center z-40 pointer-events-none">
        <div className="w-px h-full bg-white/15 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1/4 bg-[#ff6600] rounded-full shadow-[0_0_10px_rgba(255,102,0,0.6)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-px bg-white/30" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-px bg-white/30" />
          <div className="absolute top-2/4 left-1/2 -translate-x-1/2 w-3 h-px bg-white/30" />
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-2 h-px bg-white/30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-px bg-white/30" />
        </div>
        <div className="absolute -left-6 top-0 text-[10px] text-white/40 uppercase tracking-[0.25em] [writing-mode:vertical-rl] font-bold mt-2">
          MISSION_TIMELINE
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* HERO SECTION                                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[620px] md:min-h-[700px] flex items-center justify-center pt-28 pb-20 overflow-hidden z-10 border-b border-white/10 bg-[#0a0a0a]">
        {/* Split Atmospheric Background */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]/80 z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Durhaim Photo Studio Documentation"
              src="/storefront/our-story/photo-studio.jpg"
              className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
          </div>
          <div className="w-1/2 h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]/80 z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Durhaim Tactical Workshop Floor"
              src="/storefront/our-story/workshop-wide.jpg"
              className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
          </div>
        </div>

        {/* Central Hero Content */}
        <div className="relative z-20 max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 text-center flex flex-col items-center">
          {/* Declassified Record Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 border border-white/20 mb-6 rounded-full backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 bg-[#ff6600] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,102,0,0.8)]" />
            <span className="text-white/80 tracking-[0.2em] text-[11px] font-bold uppercase">
              <LocalizedText en="DECLASSIFIED RECORD // EST. 2018" id="DOKUMEN RESMI // EST. 2018" />
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold uppercase tracking-tight text-white mb-6 relative inline-block leading-[1.05]">
            <span className="absolute -top-6 -left-8 text-white/5 text-8xl font-black italic select-none pointer-events-none">
              D
            </span>
            <LocalizedText en="Our Story:" id="Kisah Kami:" />
            <br />
            <span className="text-[#ff6600] relative inline-block">
              <LocalizedText en="Built with Purpose" id="Dibangun Dengan Tujuan" />
              <span className="absolute -right-4 top-0 text-[12px] text-white/50 font-normal">®</span>
            </span>
          </h1>

          {/* Subtitle Quote */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed border-l-2 border-[#ff6600] pl-6 text-left italic bg-black/40 p-5 rounded-xl backdrop-blur-md border border-white/10 shadow-2xl">
            <LocalizedText
              en="&quot;Crafted with precision, engineered for durability, and battle-proven in every mission.&quot;"
              id="&quot;Dibuat dengan presisi, dirancang untuk daya tahan, dan teruji di setiap medan misi.&quot;"
            />
          </p>

          {/* Technical Crosshairs */}
          <div className="hidden md:block absolute top-1/2 left-0 w-8 h-px bg-white/20" />
          <div className="hidden md:block absolute top-1/2 right-0 w-8 h-px bg-white/20" />
          <div className="hidden md:block absolute top-0 left-1/2 w-px h-8 bg-white/20" />
          <div className="hidden md:block absolute bottom-0 left-1/2 w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 01: THE ORIGIN (2016-2018)                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-24 sm:py-32 bg-[#0d0d0d] relative z-10 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-5 space-y-6 relative">
              {/* Giant Decorative Number */}
              <div className="absolute -top-16 -left-6 text-[110px] sm:text-[130px] font-bold text-white/[0.04] select-none pointer-events-none leading-none">
                01
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[#ff6600] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  <span className="w-1.5 h-1.5 bg-[#ff6600] rounded-full" />
                  <LocalizedText en="PHASE 01: INCEPTION" id="FASE 01: AWAL MULA" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold uppercase tracking-tight text-white mb-6 leading-tight">
                  <LocalizedText en="The Origin (2016-2018)" id="Awal Mula (2016-2018)" />
                </h2>
                <div className="space-y-4 text-white/80 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                  <p>
                    <LocalizedText
                      en="Durhaim was officially established on March 1, 2016 in the city of Bandung. Initially, in 2016 we began producing gun bags for the requirements of an American firearms manufacturer and for weapon modernization needs across Indonesian Armed Forces (TNI) and National Police (POLRI) units."
                      id="Durhaim berdiri secara resmi pada 1 maret tahun 2016 di Kota Bandung. Awalnya pada tahun 2016 kami memulai memproduksi gun bag untuk kebutuhan dari salah satu pabrikan senjata Amerika serta kebutuhan peremajaan senjata di kesatuan TNI/POLRI."
                    />
                  </p>
                  <p>
                    <LocalizedText
                      en="Durhaim itself stands for Durability, Hard Impact, and Modular. Where we want to create products that possess superior durability, resistance to hard impact, and modular versatility."
                      id="Durhaim sendiri adalah singkatan dari Durability, Hard Impact, and Modular. Dimana kami ingin menciptakan produk yang memiliki durabilitas yang baik, memiliki ketahan terhadap hard impact, dan bersifat modular."
                    />
                  </p>
                </div>

                {/* Location Badge */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-black/60 text-[#ff6600] group hover:border-[#ff6600] transition-colors rounded-xl shadow-lg">
                    <span className="material-symbols-outlined text-[22px]">location_on</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">LOC_ID</span>
                    <span className="text-white text-sm font-bold tracking-wider">BANDUNG, ID</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column with Tactical Schematic Frame */}
            <div className="lg:col-span-7 relative">
              {/* Outer Schematic Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-white/10 z-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 pointer-events-none rounded-2xl">
                <div className="w-full h-full border border-white/10 border-dashed rounded-xl" />
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff6600] rounded-tl-md" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff6600] rounded-tr-md" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff6600] rounded-bl-md" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff6600] rounded-br-md" />
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 bg-[#161616] overflow-hidden border border-white/20 shadow-2xl group rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Precision sewing on tactical gear"
                  src="/storefront/our-story/sewing-closeup.jpg"
                  className="w-full aspect-[16/10] object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rounded-xl"
                />

                {/* Tech Overlay Data Tag */}
                <div className="absolute bottom-4 left-4 bg-black/90 px-4 py-2 border border-white/20 flex flex-col gap-0.5 backdrop-blur-md rounded-lg shadow-xl">
                  <span className="text-[10px] text-[#ff6600] font-bold uppercase tracking-wider">SPEC_TOLERANCE: 0.1MM</span>
                  <span className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">HEAVY_DUTY_STITCHING_PROTOCOL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* THE CREED: DURABILITY / HARD IMPACT / MODULAR                            */}
      {/* ========================================================================= */}
      <section className="w-full py-24 sm:py-28 bg-[#111111] border-b border-white/10 relative z-10 overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 relative z-10 text-center">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#ff6600] mb-12">
            <LocalizedText en="THE CREED" id="PRINSIP UTAMA" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Durability */}
            <div className="bg-[#181818]/90 border border-white/15 p-8 sm:p-10 flex flex-col items-center hover:border-[#ff6600]/80 transition-all duration-300 group relative overflow-hidden backdrop-blur-md rounded-2xl shadow-xl hover:shadow-[0_8px_30px_rgba(255,102,0,0.15)] hover:-translate-y-1">
              <div className="absolute -right-3 -top-3 text-7xl font-bold text-white/[0.03] group-hover:text-[#ff6600]/10 transition-colors select-none">
                D
              </div>
              <span className="material-symbols-outlined text-[44px] text-white/80 mb-5 group-hover:text-[#ff6600] group-hover:scale-110 transition-all duration-300">
                shield
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-3 group-hover:text-[#ff6600] transition-colors">
                <LocalizedText en="DURABILITY" id="DAYA TAHAN" />
              </h3>
              <p className="text-white/70 text-sm text-center leading-relaxed">
                <LocalizedText
                  en="Engineered to withstand the most punishing operational environments without compromise or failure."
                  id="Dirancang untuk bertahan di kondisi operasional paling keras tanpa kompromi atau kegagalan."
                />
              </p>
            </div>

            {/* Hard Impact */}
            <div className="bg-[#181818]/90 border border-white/15 p-8 sm:p-10 flex flex-col items-center hover:border-[#ff6600]/80 transition-all duration-300 group relative overflow-hidden backdrop-blur-md rounded-2xl shadow-xl hover:shadow-[0_8px_30px_rgba(255,102,0,0.15)] hover:-translate-y-1">
              <div className="absolute -right-3 -top-3 text-7xl font-bold text-white/[0.03] group-hover:text-[#ff6600]/10 transition-colors select-none">
                H
              </div>
              <span className="material-symbols-outlined text-[44px] text-white/80 mb-5 group-hover:text-[#ff6600] group-hover:scale-110 transition-all duration-300">
                bolt
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-3 group-hover:text-[#ff6600] transition-colors">
                <LocalizedText en="HARD IMPACT" id="BENTURAN BERAT" />
              </h3>
              <p className="text-white/70 text-sm text-center leading-relaxed">
                <LocalizedText
                  en="Superior kinetic absorption and reinforced load-bearing construction for mission-critical protection."
                  id="Penyerapan kinetik superior dan konstruksi tangguh untuk perlindungan maksimal di medan misi."
                />
              </p>
            </div>

            {/* Modular */}
            <div className="bg-[#181818]/90 border border-white/15 p-8 sm:p-10 flex flex-col items-center hover:border-[#ff6600]/80 transition-all duration-300 group relative overflow-hidden backdrop-blur-md rounded-2xl shadow-xl hover:shadow-[0_8px_30px_rgba(255,102,0,0.15)] hover:-translate-y-1">
              <div className="absolute -right-3 -top-3 text-7xl font-bold text-white/[0.03] group-hover:text-[#ff6600]/10 transition-colors select-none">
                M
              </div>
              <span className="material-symbols-outlined text-[44px] text-white/80 mb-5 group-hover:text-[#ff6600] group-hover:scale-110 transition-all duration-300">
                view_module
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-3 group-hover:text-[#ff6600] transition-colors">
                <LocalizedText en="MODULAR" id="MODULARITAS" />
              </h3>
              <p className="text-white/70 text-sm text-center leading-relaxed">
                <LocalizedText
                  en="Infinite adaptability. Configure and swap tactical gear loadouts precisely to mission directives."
                  id="Adaptabilitas tanpa batas. Sesuaikan dan kombinasikan perlengkapan taktis secara presisi sesuai misi."
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 02: PRODUCT EVOLUTION (MAMBA SERIES)                                */}
      {/* ========================================================================= */}
      <section className="w-full py-24 sm:py-32 bg-[#0d0d0d] relative z-10 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              {/* Outer Accent Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-white/10 bg-black/40 z-0 pointer-events-none rounded-2xl" />

              {/* Main Image */}
              <div className="relative z-10 bg-[#161616] overflow-hidden border border-white/20 shadow-2xl group rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Durhaim Craftsmen in Tactical Workshop"
                  src="/storefront/our-story/workers-glass.jpg"
                  className="w-full aspect-[16/10] object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rounded-xl"
                />

                {/* Assembly Line Overlay Tag */}
                <div className="absolute top-4 right-4 bg-black/90 border border-white/20 p-3 shadow-xl z-20 flex items-center gap-3 backdrop-blur-md rounded-xl">
                  <div className="w-8 h-8 rounded-full border-2 border-[#ff6600] flex items-center justify-center text-[#ff6600]">
                    <span className="material-symbols-outlined text-[15px]">precision_manufacturing</span>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/50 font-bold uppercase tracking-widest">ASSEMBLY_LINE</div>
                    <div className="text-[11px] text-white font-bold tracking-widest uppercase">TACTICAL WORKSHOP</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 relative">
              {/* Giant Decorative Number */}
              <div className="absolute -top-16 -right-6 text-[110px] sm:text-[130px] font-bold text-white/[0.04] select-none pointer-events-none leading-none">
                02
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[#ff6600] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  <span className="w-1.5 h-1.5 bg-[#ff6600] rounded-full" />
                  <LocalizedText en="PHASE 02: EVOLUTION" id="FASE 02: EVOLUSI PRODUK" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold uppercase tracking-tight text-white mb-6 leading-tight">
                  <LocalizedText en="Mamba Series Development" id="Pengembangan Mamba Series" />
                </h2>
                <div className="space-y-4 text-white/80 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                  <p>
                    <LocalizedText
                      en="Over time, in early 2017 we began exploring and developing original proprietary products analyzed to possess strong market and tactical potential. One of these flagship developments was our premier Plate Carrier / Body Vest line, which we designated the Mamba Series Body Vest."
                      id="Seiring waktu berjalan pada awal tahun 2017 kami memulai mencoba untuk mengembangkan beberapa produk original yang kami analisa memiliki peluang cukup baik untuk dikembangkan. Salah satu dari produk tersebut adalah Plate Carrier/Body Vest yang pada akhirnya kami namakan Mamba Series Body Vest."
                    />
                  </p>
                  <p>
                    <LocalizedText
                      en="Beyond the Mamba Series Bodyvest, in 2018 we developed several other Plate Carrier / Body Vest platforms such as the Tarantula Series and Viper Series. Alongside expanding our body armor systems, we currently engineer specialized combat belt gear led by the Trojan Warbelt."
                      id="Selain Mamba Series Bodyvest pada tahun 2018 kami mengembangkan beberapa jenis Plate Carrier/Body Vest lainnya seperti Tarantula Series, Viper Series. Selain mengembangkan Body vest saat ini kami memiliki satu produk combat Belt yang kami namakan Trojan Warbelt."
                    />
                  </p>
                </div>

                {/* Colorway Protocols */}
                <div className="mt-8 pt-6 border-t border-white/15">
                  <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
                    <LocalizedText en="MAMBA COLORWAY PROTOCOLS" id="KLASIFIKASI WARNA MAMBA SERIES" />
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    <li className="flex items-center gap-2.5 bg-black/40 border border-white/10 px-3.5 py-2.5 rounded-lg shadow-sm">
                      <span className="w-3.5 h-3.5 bg-black border border-white/30 rounded-sm" />
                      <span className="text-xs font-bold text-white/90 tracking-wider">BLACK MAMBA</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-black/40 border border-white/10 px-3.5 py-2.5 rounded-lg shadow-sm">
                      <span className="w-3.5 h-3.5 bg-[#4B5320] border border-white/30 rounded-sm" />
                      <span className="text-xs font-bold text-white/90 tracking-wider">GREEN MAMBA</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-black/40 border border-white/10 px-3.5 py-2.5 rounded-lg shadow-sm">
                      <span className="w-3.5 h-3.5 bg-[#2E3325] border border-white/30 rounded-sm" />
                      <span className="text-xs font-bold text-white/90 tracking-wider">KING MAMBA (CAMO)</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-black/40 border border-white/10 px-3.5 py-2.5 rounded-lg shadow-sm">
                      <span className="w-3.5 h-3.5 bg-[#A28D5B] border border-white/30 rounded-sm" />
                      <span className="text-xs font-bold text-white/90 tracking-wider">ROYAL MAMBA (TAN)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 03: MISSION DIRECTIVE - VISION & SELF-RELIANCE                      */}
      {/* ========================================================================= */}
      <section className="w-full py-24 sm:py-32 bg-[#111111] relative z-10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6 relative z-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/60 border border-white/20 rounded-lg">
                <span className="material-symbols-outlined text-[15px] text-[#ff6600]">flag</span>
                <span className="text-white text-[11px] font-bold uppercase tracking-widest">
                  <LocalizedText en="MISSION DIRECTIVE" id="ARAHAN MISI" />
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold uppercase tracking-tight text-white leading-tight">
                <LocalizedText en="Vision & Self-Reliance" id="Visi & Kemandirian" />
              </h2>

              <div className="space-y-4 text-white/80 text-[15px] sm:text-[16px] leading-relaxed border-l-2 border-[#ff6600]/80 pl-6">
                <p>
                  <LocalizedText
                    en="The Vision and Mission of Durhaim is to participate directly in enhancing the gear, readiness, and performance of our comrades in the TNI and POLRI in supporting their duties of service to the Unitary State of the Republic of Indonesia."
                    id="Visi dan Misi durhaim adalah untuk dapat ikut serta memperbaiki penampilan dari rekan-rekan Anggota TNI/POLRI dalam menunjang tugas pengabdian kepada Negara Kesatuan Indonesia."
                  />
                </p>
                <p className="text-white font-medium">
                  <LocalizedText
                    en="We strive to engineer products meeting world-class quality standards that compete directly with leading tactical manufacturers from the United States and European nations."
                    id="Kami berusaha menciptakan produk yang memiliki standar kualitas yang mampu bersaing dengan produk-produk dari negara-negara lain seperti Amerika dan negara-negara Eropa."
                  />
                </p>
                <p>
                  <LocalizedText
                    en="Through dedication and hard work, we are firmly convinced that domestic manufacturing can deliver gear of international excellence, contributing meaningfully to national self-reliance."
                    id="Dengan usaha dan kerja keras kami sangat yakin bahwa kita mampu menciptakan produk lokal yang memiliki kualitas internasional. Kami berharap kami mampu memberikan sumbangsih terhadap kemandirian bangsa Indonesia kelak."
                  />
                </p>
              </div>
            </div>

            {/* Image Column with Layered Card Stack */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              {/* Layered Background Frames */}
              <div className="absolute inset-0 bg-[#222] border border-white/10 rotate-2 translate-x-3 translate-y-3 opacity-60 pointer-events-none rounded-2xl" />
              <div className="absolute inset-0 bg-[#161616] border border-white/10 -rotate-1 -translate-x-2 -translate-y-2 opacity-80 pointer-events-none rounded-2xl" />

              {/* Main Image Card */}
              <div className="relative z-10 bg-[#141414] border border-white/20 p-2 shadow-2xl group overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Durhaim R&D and Operations Office"
                  src="/storefront/our-story/office-desk.jpg"
                  className="w-full aspect-[16/11] object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rounded-xl"
                />

                {/* R&D Overlay Tag */}
                <div className="absolute top-5 left-5 bg-black/90 border border-white/20 p-3 backdrop-blur-md rounded-xl shadow-xl">
                  <div className="flex items-center gap-2 text-[#ff6600] mb-1">
                    <span className="material-symbols-outlined text-[15px] animate-spin" style={{ animationDuration: '6s' }}>
                      settings
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">R&D SECTOR</span>
                  </div>
                  <div className="text-xs text-white font-bold tracking-widest uppercase">ADVANCED PROTOTYPING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
