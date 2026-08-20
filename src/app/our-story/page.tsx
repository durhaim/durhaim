import type { Metadata } from 'next';
import LocalizedText from '@/components/LocalizedText';

export const metadata: Metadata = {
  title: 'Our Story — DURHAIM Tactical Gear',
  description: 'Built with purpose, crafted with precision, and engineered for durability, performance, confidence, and readiness in every mission.',
};

export default function OurStoryPage() {
  return (
    <main
      id="main-content"
      className="relative flex-grow flex flex-col w-full bg-[#050505] text-white overflow-hidden font-[family-name:var(--font-tactic-sans)]"
      style={{
        backgroundImage: "url('/storefront/our-story/dark-texture-bg.jpg')",
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
      }}
    >
      {/* Top Hero Section */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-48 pb-10 md:pb-14 px-5 sm:px-8 lg:px-14">
        <div className="max-w-[1140px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold uppercase tracking-normal text-white mb-2 sm:mb-3">
            OUR STORY
          </h1>
          <p className="text-white/95 text-xs sm:text-sm md:text-[15px] max-w-2xl font-normal leading-relaxed tracking-wide">
            <LocalizedText
              en="&quot;Built with purpose, crafted with precision, and engineered for durability, performance,confidence, and readiness in every mission&quot;"
              id="&quot;Built with purpose, crafted with precision, and engineered for durability, performance,confidence, and readiness in every mission&quot;"
            />
          </p>
        </div>
      </section>

      {/* Main 2-Column Interlocking Content Section */}
      <section className="relative w-full pb-24 md:pb-36 px-5 sm:px-8 lg:px-14">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-10 lg:gap-y-12 items-start">
          
          {/* Top Left: History Text Block (Row 1, Col 1 on Desktop) */}
          <div className="order-1 lg:order-1 flex flex-col space-y-5 text-white text-[13px] sm:text-[14px] md:text-[15px] leading-[1.65] tracking-normal font-normal">
            <p>
              <LocalizedText
                en="Durhaim was officially established on March 1, 2016 in the city of Bandung. Initially, in 2016 we began producing gun bags for the requirements of an American firearms manufacturer and for weapon modernization needs across Indonesian Armed Forces (TNI) and National Police (POLRI) units. Durhaim itself stands for Durability, Hard Impact, and Modular. Where we want to create products that possess superior durability, resistance to hard impact, and modular versatility."
                id="Durhaim berdiri secara resmi pada 1 maret tahun 2016 di Kota Bandung. Awalnya pada tahun 2016 kami memulai memproduksi gun bag untuk kebutuhan dari salah satu pabrikan senjata Amerika serta kebutuhan peremajaan senjata di kesatuan TNI/POLRI. Durhaim sendiri adalah singkatan dari Durability, Hard Impact, and Modular. Dimana kami ingin menciptakan produk yang memiliki durabilitas yang baik, memiliki ketahan terhadap hard impact, dan bersifat modular."
              />
            </p>
            <p>
              <LocalizedText
                en="Over time, in early 2017, we began to develop several original proprietary products analyzed to possess strong market and tactical potential. One of these flagship products was the Plate Carrier / Body Vest, which we designated the Mamba Series Body Vest. The Mamba Series Body Vest consists of several mission color classifications: Black Mamba (Hitam), Green Mamba (Hijau), King Mamba (Loreng TNI), and Royal Mamba (Coyote Tan)."
                id="Seiring waktu berjalan pada awal tahun 2017 kami memulai mencoba untuk mengembangkan beberapa produk original yang kami analisa memiliki peluang cukup baik untuk dikembangkan. Salah satu dari produk tersebut adalah Plate Carrier/Body Vest yang pada akhirnya kami namakan Mamba Series Body Vest. Mamba series Body Vest ini terdiri dari beberapa klasifikasi warna yaitu, Black Mamba (Hitam), Green Mamba (Hijau), King Mamba (Loreng TNI), dan Royal Mamba (Coyote Tan)."
              />
            </p>
            <p>
              <LocalizedText
                en="Beyond the Mamba Series Bodyvest, in 2018 we developed several other Plate Carrier / Body Vest platforms such as the Tarantula Series and Viper Series. Alongside expanding our body armor systems, we currently engineer specialized combat belt gear led by the Trojan Warbelt."
                id="Selain Mamba Series Bodyvest pada tahun 2018 kami mengembangkan beberapa jenis Plate Carrier/Body Vest lainnya seperti Tarantula Series, Viper Series. Selain mengembangkan Body vest saat ini kami memiliki satu produk combat Belt yang kami namakan Trojan Warbelt."
              />
            </p>
          </div>

          {/* Top Right: 3 Workshop Images (Row 1, Col 2 on Desktop) */}
          <div className="order-2 lg:order-2 flex flex-col space-y-4 sm:space-y-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/storefront/our-story/workers-glass.jpg"
              alt="Durhaim Workshop Craftsmen"
              className="w-full h-auto object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/storefront/our-story/workshop-wide.jpg"
              alt="Durhaim Production Workshop"
              className="w-full h-auto object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/storefront/our-story/sewing-closeup.jpg"
              alt="Tactical Sewing Process"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom Left: 2 Office/Studio Images (Row 2, Col 1 on Desktop) */}
          <div className="order-4 lg:order-3 flex flex-col space-y-4 sm:space-y-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/storefront/our-story/office-desk.jpg"
              alt="Durhaim Office Workspace"
              className="w-full h-auto object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/storefront/our-story/photo-studio.jpg"
              alt="Durhaim Photo Studio"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom Right: Vision & Mission Text Block (Row 2, Col 2 on Desktop) */}
          <div className="order-3 lg:order-4 flex flex-col space-y-5 text-white text-[13px] sm:text-[14px] md:text-[15px] leading-[1.65] tracking-normal font-normal">
            <p>
              <LocalizedText
                en="The Vision and Mission of Durhaim is to participate in enhancing the readiness and operational performance of TNI and POLRI personnel in their duties of service to the Unitary State of the Republic of Indonesia. Having observed that equipment utilized by our forces was often lagging compared to international personnel, we strive to engineer products meeting world-class quality standards that compete directly with leading manufacturers from America and Europe."
                id="Visi dan Misi durhaim adalah untuk dapat ikut serta memperbaiki penampilan dari rekan-rekan Anggota TNI/POLRI dalam menunjang tugas pengabdian kepada Negara Kesatuan Indonesia. Karena yang selama ini kami amati mayoritas perlengkapan yang digunakan oleh rekan-rekan TNI/POLRI sedikit agak tertinggal jika dibandingkan dengan personel dari negara lain. Kami berusaha menciptakan produk yang memiliki standar kualitas yang mampu bersaing dengan produk-produk dari negara-negara lain seperti Amerika dan negara-negara Eropa."
              />
            </p>
            <p>
              <LocalizedText
                en="Through dedication and hard work, we are fully confident that domestic manufacturing can deliver products of international excellence. We hope to contribute meaningfully toward the self-reliance and strength of the Indonesian nation."
                id="Dengan usaha dan kerja keras kami sangat yakin bahwa kita mampu menciptakan produk lokal yang memiliki kualitas internasional. Kami berharap kami mampu memberikan sumbangsih terhadap kemandirian bangsa Indonesia kelak."
              />
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
