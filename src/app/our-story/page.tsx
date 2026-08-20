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
      className="relative flex-grow flex flex-col w-full bg-[#080808] text-white overflow-hidden font-[family-name:var(--font-tactic-sans)]"
      style={{
        backgroundImage: "url('/storefront/our-story/dark-texture-bg.jpg')",
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
      }}
    >
      {/* Top Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px] flex flex-col justify-end pb-8 sm:pb-10 md:pb-12 px-5 sm:px-8 lg:px-14">
          <div className="max-w-[1140px] w-full mx-auto relative z-10">
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
        </div>
      </section>

      {/* Narrative & Photography Content */}
      <div className="relative w-full pb-24 md:pb-36 px-5 sm:px-8 lg:px-14 flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
        <div className="max-w-[1140px] w-full mx-auto flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          
          {/* BLOCK 1: History Narrative (Left) & 3 Workshop Photos (Right) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: History Narrative */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-5 text-white text-[13px] sm:text-[14px] md:text-[15px] leading-[1.65] tracking-normal font-normal">
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

            {/* Right: 3 Stacked Workshop Photos */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/storefront/our-story/workers-glass.jpg"
                alt="Durhaim Workshop Craftsmen"
                className="w-full aspect-[3/2] object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/storefront/our-story/workshop-wide.jpg"
                alt="Durhaim Production Workshop"
                className="w-full aspect-[3/2] object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/storefront/our-story/sewing-closeup.jpg"
                alt="Tactical Sewing Process"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
          </section>

          {/* BLOCK 2: 2 Office/Studio Photos (Left) & Vision & Mission (Right) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: 2 Office/Studio Photos */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/storefront/our-story/office-desk.jpg"
                alt="Durhaim Office Workspace"
                className="w-full aspect-[3/2] object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/storefront/our-story/photo-studio.jpg"
                alt="Durhaim Photo Studio"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>

            {/* Right: Vision & Mission Narrative */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-5 text-white text-[13px] sm:text-[14px] md:text-[15px] leading-[1.65] tracking-normal font-normal">
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
          </section>

        </div>
      </div>
    </main>
  );
}
