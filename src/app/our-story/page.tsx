import type { Metadata } from 'next';
import LocalizedText from '@/components/LocalizedText';

export const metadata: Metadata = {
  title: 'Our Story - DURHAIM Tactical Gear',
  description:
    'Durhaim berdiri resmi pada 1 Maret 2018 di Kota Bandung. Durability, Hard Impact, and Modular tactical gear engineered for frontline deployment.',
};

export default function OurStoryPage() {
  return (
    <main id="main-content" className="flex-grow w-full bg-[#0a0a0a] text-stark-white">
      {/* Hero Section with Dedicated Tactical Hero Banner */}
      <section
        className="relative w-full min-h-[340px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[520px] flex items-end justify-start bg-[#0a0a0a] overflow-hidden"
        style={{
          backgroundImage: "url('/storefront/figma/our-story/hero-bg.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Hero Content (Aligned Left with Zero Gradient Overlay on Image) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pb-10 sm:pb-14 md:pb-16 pt-20">
          <h1 className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-stark-white mb-2 sm:mb-3 text-left">
            <LocalizedText en="OUR STORY" id="OUR STORY" />
          </h1>
          <p className="font-body-md text-sm sm:text-base md:text-lg lg:text-xl text-stark-white max-w-2xl text-left leading-snug sm:leading-relaxed">
            <LocalizedText
              en="“Built with purpose, crafted with precision, and engineered for durability, performance,confidence, and readiness in every mission”"
              id="“Built with purpose, crafted with precision, and engineered for durability, performance,confidence, and readiness in every mission”"
            />
          </p>
        </div>
      </section>

      {/* Main Content Body with Camouflage Pattern Texture */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: "url('/storefront/figma/our-story/camo-pattern.jpg')",
          backgroundPosition: 'top center',
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
        }}
      >
        {/* Top smooth fade from the hero section */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />

        {/* Subtle Darkening Overlay to ensure comfortable reading */}
        <div className="absolute inset-0 bg-[#0a0a0a]/60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          {/* Section 1: Origin & Workshop Craftsmanship */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start mb-20 md:mb-28 lg:mb-36">
            {/* Left Column: Brand History Text */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8] text-stark-white/95 font-body-md text-left">
              <p>
                <LocalizedText
                  id="Durhaim berdiri secara resmi pada 1 maret tahun 2018 di Kota Bandung. Awalnya pada tahun 2016 kami memulai memproduksi gun bag untuk kebutuhan dari salah satu pabrikan senjata Amerika serta kebutuhan peremajaan senjata di kesatuan TNI/POLRI. Durhaim sendiri adalah singkatan dari Durability, Hard Impact, and Modular. Dimana kami ingin menciptakan produk yang memiliki durabilitas yang baik, memiliki ketahan terhadap hard impact, dan bersifat modular."
                  en="Durhaim was officially established on March 1, 2018 in the city of Bandung. Initially in 2016, we began manufacturing gun bags to meet the requirements of an American firearms manufacturer as well as weapon modernization needs within the TNI/POLRI units. The name Durhaim itself stands for Durability, Hard Impact, and Modular—representing our commitment to creating products that deliver superior durability, withstand hard impact, and provide modular adaptability."
                />
              </p>
              <p>
                <LocalizedText
                  id="Seiring waktu berjalan pada awal tahun 2017 kami memulai mencoba untuk mengembangkan beberapa produk original yang kami analisa memiliki peluang cukup baik untuk dikembangkan. Salah satu dari produk tersebut adalah Plate Carrier/Body Vest yang pada akhirnya kami namakan Mamba Series Body Vest. Mamba series Body Vest ini terdiri dari beberapa klasifikasi warna yaitu, Black Mamba (Hitam), Green Mamba (Hijau), King Mamba (Loreng TNI), dan Royal Mamba (Coyote Tan)."
                  en="Over time in early 2017, we began developing several original products that showed strong potential. One of these was our Plate Carrier/Body Vest, which we named the Mamba Series Body Vest. The Mamba series Body Vest was released in several colorways: Black Mamba (Black), Green Mamba (Green), King Mamba (TNI Camouflage), and Royal Mamba (Coyote Tan)."
                />
              </p>
              <p>
                <LocalizedText
                  id="Selain Mamba Series Bodyvest pada tahun 2018 kami mengembangkan beberapa jenis Plate Carrier/Body Vest lainnya seperti Tarantula Series, Viper Series. Selain mengembangkan Body vest saat ini kami memiliki satu produk combat Belt yang kami namakan Trojan Warbelt."
                  en="In addition to the Mamba Series Bodyvest, in 2018 we developed several other Plate Carrier/Body Vest systems such as the Tarantula Series and Viper Series. Alongside our body vest line, we also produce a specialized combat belt known as the Trojan Warbelt."
                />
              </p>
            </div>

            {/* Right Column: 3 Workshop Images */}
            <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6">
              <div className="overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/storefront/figma/our-story/workshop-1.jpg"
                  alt="Durhaim tactical production workshop and sewing line"
                  className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/storefront/figma/our-story/workshop-2.jpg"
                  alt="Tactical gear craftsmen assembling body vest panels"
                  className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/storefront/figma/our-story/workshop-3.jpg"
                  alt="Precision stitching on heavy duty tactical webbing"
                  className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Studio & Vision/Mission */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column: 2 Images (R&D Desk + Studio Lighting) */}
            <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6">
              <div className="overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/storefront/figma/our-story/rd-office.jpg"
                  alt="Durhaim design and tactical R&D office workstation"
                  className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/storefront/figma/our-story/studio-setup.jpg"
                  alt="Studio product turntable and softbox lighting setup"
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Vision & Mission Text */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8] text-stark-white/95 font-body-md text-left">
              <p>
                <LocalizedText
                  id="Visi dan Misi durhaim adalah untuk dapat ikut serta memperbaiki penampilan dari rekan-rekan Anggota TNI/POLRI dalam menunjang tugas pengabdian kepada Negara Kesatuan Indonesia. Karena yang selama ini kami amati mayoritas perlengkapan yang digunakan oleh rekan-rekan TNI/POLRI sedikit agak tertinggal jika dibandingkan dengan personel dari negara lain."
                  en="Durhaim's Vision and Mission is to participate directly in improving the gear and appearance of our comrades in the TNI/POLRI to support their duties of service to the Unitary State of the Republic of Indonesia. Over the years, we observed that much of the tactical equipment used by TNI/POLRI personnel lagged somewhat behind personnel from other nations."
                />
              </p>
              <p>
                <LocalizedText
                  id="Kami berusaha menciptakan produk yang memiliki standar kualitas yang mampu bersaing dengan produk-produk dari negara-negara lain seperti Amerika dan negara-negara Eropa. Dengan usaha dan kerja keras kami sangat yakin bahwa kita mampu menciptakan produk lokal yang memiliki kualitas internasional. Kami berharap kami mampu memberikan sumbangsih terhadap kemandirian bangsa Indonesia kelak."
                  en="We strive to create products with uncompromising quality standards capable of competing with leading products from countries such as the United States and European nations. Through dedication and hard work, we are firmly convinced that we can produce Indonesian-made gear of world-class excellence. We hope to make a lasting contribution to the self-reliance and sovereignty of the Indonesian nation."
                />
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
