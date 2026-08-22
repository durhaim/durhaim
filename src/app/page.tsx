import Link from "next/link";
import SerialChecker from "@/components/SerialChecker";
import JsonLd from "@/components/JsonLd";
import LocalizedText from "@/components/LocalizedText";
import { getSiteSettings } from "@/lib/site-settings-server";
import { getSiteUrl } from "@/lib/site-settings";

export const metadata = {
  title: "DURHAIM Tactical Gear - Modular Vests, Packs, Pouches, and Belts",
  description: "DURHAIM builds battle-proven tactical gear for Indonesia and global users: modular vests, chestrigs, packs, pouches, belts, and authenticity verification.",
  alternates: {
    canonical: "/",
    languages: { en: "/", id: "/?lang=id", "x-default": "/" },
  },
};

const homeFaqs = [
  {
    title: { en: "What is DURHAIM?", id: "Apa itu DURHAIM?" },
    text: {
      en: "DURHAIM is an Indonesian tactical gear brand focused on durability, hard impact resistance, and modular carry systems for vests, chestrigs, packs, pouches, and belts.",
      id: "DURHAIM adalah brand tactical gear Indonesia yang berfokus pada daya tahan, ketahanan benturan berat, dan sistem bawa modular untuk vest, chestrig, pack, pouch, dan belt.",
    },
  },
  {
    title: { en: "How can buyers enquire about DURHAIM products?", id: "Bagaimana pembeli menanyakan produk DURHAIM?" },
    text: {
      en: "Buyers in Indonesia and global markets can open a product detail page and contact DURHAIM directly through WhatsApp for availability and ordering.",
      id: "Pembeli di Indonesia dan pasar global dapat membuka halaman detail produk dan menghubungi DURHAIM langsung melalui WhatsApp untuk ketersediaan dan pemesanan.",
    },
  },
  {
    title: { en: "How can buyers verify authentic DURHAIM products?", id: "Bagaimana pembeli memverifikasi produk DURHAIM asli?" },
    text: {
      en: "Buyers can enter a DURHAIM serial code in the authenticity checker to confirm whether a product serial is registered and active.",
      id: "Pembeli dapat memasukkan kode serial DURHAIM pada pemeriksa keaslian untuk memastikan serial produk terdaftar dan aktif.",
    },
  },
];

const features = [
  {
    tag: "SYS_01 // ARMOR",
    title: { en: "Bodyvest & Chestrig", id: "Bodyvest & Chestrig" },
    subtitle: { en: "Durability hard impact and modular", id: "Tahan Benturan Berat dan Modular" },
    href: "/catalogue?category=vest",
    background: "/storefront/rev/bodyvest-bg.jpg",
    product: "/storefront/rev/bodyvest.png",
    productWidth: "25.2%",
  },
  {
    tag: "SYS_02 // LOADOUT",
    title: { en: "Pack & Pouch", id: "Pack & Pouch" },
    subtitle: { en: "Perfect for carrying your equipment", id: "Ideal untuk Membawa Perlengkapan Anda" },
    href: "/catalogue?category=pack",
    background: "/storefront/rev/pack-bg.jpg",
    product: "/storefront/rev/pack.png",
    productWidth: "24.1%",
  },
  {
    tag: "SYS_03 // TACTICAL_BELT",
    title: { en: "Belt", id: "Belt" },
    subtitle: { en: "It’s all about the waist", id: "Semua Bertumpu pada Pinggang" },
    href: "/catalogue?category=belt",
    background: "/storefront/rev/belt-bg.jpg",
    product: "/storefront/rev/belt-rig.png",
    productWidth: "27.4%",
  },
  {
    tag: "SYS_04 // UTILITY",
    title: { en: "Pouch", id: "Pouch" },
    subtitle: { en: "Organize. Access. Move. Repeat.", id: "Praktis, Mudah Diakses, dan Siap Bergerak" },
    href: "/catalogue?category=pouch",
    background: "/storefront/rev/pouch-bg.jpg",
    product: "/storefront/rev/belt.png",
    productWidth: "21.1%",
  },
] as const;

const categoryStrip = [
  { label: "Bodyvest Chestrig", href: "/catalogue?category=vest", image: "/storefront/rev/bodyvest.png" },
  { label: "Pack & Pouch", href: "/catalogue?category=pack", image: "/storefront/rev/pack.png" },
  { label: "Belt", href: "/catalogue?category=belt", image: "/storefront/rev/belt-rig.png" },
  { label: "Pouch", href: "/catalogue?category=pouch", image: "/storefront/rev/belt.png" },
] as const;

export default async function HomePage() {
  const siteSettings = await getSiteSettings();
  const siteUrl = getSiteUrl(siteSettings);
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "DURHAIM Tactical Gear",
        description: metadata.description,
        inLanguage: ["en", "id"],
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: ["tactical gear", "modular vest", "chestrig", "tactical pouch", "tactical belt", "authenticity verification"],
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((item) => ({
          "@type": "Question",
          name: item.title.en,
          acceptedAnswer: { "@type": "Answer", text: item.text.en },
        })),
      },
    ],
  };

  return (
    <main id="main-content" className="store-home">
      <JsonLd data={homeSchema} />

      <section className="home-verify" data-figma-node="34:116" aria-labelledby="verification-heading">
        <div className="home-verify__panel">
          <h1 id="verification-heading">
            <LocalizedText en="Input serial code here" id="Masukkan kode serial di sini" />
          </h1>
          <SerialChecker />
        </div>
      </section>

      <section className="home-intro" data-figma-node="27:19" aria-labelledby="intro-heading">
        <div className="home-intro__copy">
          <h2 id="intro-heading">DURHAIM TACTICAL GEAR</h2>
          <p>
            <LocalizedText
              en="DURHAIM builds modular tactical gear for Indonesia and global users, including vests, chestrigs, packs, pouches, belts, and serialized authenticity support."
              id="DURHAIM membuat tactical gear modular untuk pengguna Indonesia dan global, termasuk vest, chestrig, pack, pouch, belt, serta dukungan keaslian berbasis serial."
            />
          </p>
        </div>
        <div className="home-intro__panels">
          {homeFaqs.map((item) => (
            <article key={item.title.en}>
              <h3><LocalizedText en={item.title.en} id={item.title.id} /></h3>
              <p><LocalizedText en={item.text.en} id={item.text.id} /></p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-features" data-figma-node="29:44" aria-label="Equipment categories">
        {features.map((feature) => (
          <Link className="home-feature" href={feature.href} key={feature.title.en}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="home-feature__background" src={feature.background} alt="" />
            <span className="home-feature__panel" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="home-feature__product"
              style={{ "--product-width": feature.productWidth } as React.CSSProperties}
              src={feature.product}
              alt=""
            />
            <div className="home-feature__copy">
              <span className="home-feature__tag" aria-hidden="true">{feature.tag}</span>
              <h2><LocalizedText en={feature.title.en} id={feature.title.id} /></h2>
              <p><LocalizedText en={feature.subtitle.en} id={feature.subtitle.id} /></p>
              <span className="home-feature__cta">
                <LocalizedText en="Explore now" id="Jelajahi" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="home-category-strip" data-figma-node="29:79" aria-label="Browse categories">
        {categoryStrip.map((item) => (
          <Link className="home-category-strip__card" href={item.href} key={item.label}>
            <span className="home-category-strip__panel" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" />
            <span className="home-category-strip__label">{item.label}</span>
          </Link>
        ))}
      </section>

      <section className="home-battle" data-figma-node="34:110" aria-labelledby="battle-heading">
        <div>
          <h2 id="battle-heading"><LocalizedText en="Battle Proven" id="Teruji di Lapangan" /></h2>
          <p>
            <LocalizedText
              en="“Experience the power of innovation proven in battle.”"
              id="“Rasakan kekuatan inovasi yang teruji di lapangan.”"
            />
          </p>
          <Link className="store-outline-button" href="/battle-proven">
            <LocalizedText en="Explore now" id="Jelajahi" />
          </Link>
        </div>
      </section>
    </main>
  );
}
