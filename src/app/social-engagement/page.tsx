import Link from 'next/link';
import type { Metadata } from 'next';
import LocalizedText from '@/components/LocalizedText';

export const metadata: Metadata = {
  title: 'Social Engagement - DURHAIM',
  description: 'Follow Durhaim field updates, project drops, and tactical gear community channels.',
};

const channels = [
  {
    name: 'Instagram',
    handle: '@durhaimgear',
    href: 'https://www.instagram.com/durhaimgear/',
    description: {
      en: 'Product drops, field photos, build details, and workshop updates.',
      id: 'Rilis produk, foto lapangan, detail build, dan kabar workshop.',
    },
  },
  {
    name: 'Facebook',
    handle: 'Durhaim Army Gear',
    href: 'https://www.facebook.com/durhaimarmygear/',
    description: {
      en: 'Community announcements, campaign posts, and reseller updates.',
      id: 'Pengumuman komunitas, unggahan kampanye, dan kabar reseller.',
    },
  },
  {
    name: 'YouTube',
    handle: 'Durhaim Channel',
    href: 'https://www.youtube.com/channel/UCRQa9l9_warxaVLGWLPVsXw',
    description: {
      en: 'Long-form product walkthroughs, usage references, and field media.',
      id: 'Walkthrough produk, referensi penggunaan, dan media lapangan.',
    },
  },
];

export default function SocialEngagementPage() {
  return (
    <main id="main-content" className="bg-texture flex-grow">
      <section className="border-b border-surface-container-highest px-margin-edge py-section-gap">
        <div className="mx-auto grid max-w-[1440px] gap-gutter lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display-xl text-headline-lg-mobile uppercase tracking-tighter text-stark-white md:text-display-xl">
              <LocalizedText en="Social Engagement" id="Media Sosial" />
            </h1>
            <p className="mt-stack-md max-w-3xl border-l-2 border-signal-orange pl-4 font-body-lg text-stark-white/85">
              <LocalizedText
                en="Track current releases, field references, and build notes through Durhaim's active public channels."
                id="Pantau rilis terbaru, referensi lapangan, dan catatan build melalui kanal publik aktif Durhaim."
              />
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link className="btn btn-primary inline-flex rounded-md" style={{ borderRadius: '6px' }} href="/catalogue">
              <LocalizedText en="View Catalogue" id="Lihat Katalog" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-margin-edge py-section-gap">
        <div className="mx-auto grid max-w-[1440px] gap-gutter md:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-surface-container-highest bg-charcoal-field p-stack-lg transition-colors hover:border-signal-orange rounded-2xl flex flex-col justify-between"
              style={{ borderRadius: '16px' }}
            >
              <div>
                <div className="inline-block border border-signal-orange/40 bg-tactical-black/80 px-2.5 py-1 font-data-mono text-data-mono uppercase text-signal-orange rounded-md" style={{ borderRadius: '6px' }}>
                  {channel.handle}
                </div>
                <h2 className="mt-stack-sm font-headline-md text-headline-md uppercase text-stark-white group-hover:text-signal-orange">
                  {channel.name}
                </h2>
                <p className="mt-stack-md font-body-md text-on-surface-variant">
                  <LocalizedText en={channel.description.en} id={channel.description.id} />
                </p>
              </div>
              <div className="mt-stack-lg font-label-caps text-label-caps uppercase text-stark-white">
                <span className="inline-flex items-center gap-1 border border-surface-container-highest px-3 py-1.5 rounded-md group-hover:border-signal-orange transition-colors" style={{ borderRadius: '6px' }}>
                  <LocalizedText en="Open Channel" id="Buka Kanal" /> →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
