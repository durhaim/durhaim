/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDevelopment ? ["'unsafe-eval'"] : []),
  'https://vercel.live',
  'https://www.googletagmanager.com',
  'https://*.googletagmanager.com',
].join(' ');

const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/catalogue/black-aim-vortex-2',
        destination: '/catalogue/black-aim-vortex',
        permanent: true,
      },
      {
        source: '/catalogue/black-aim-vortex-3',
        destination: '/catalogue/black-aim-vortex',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-aim-vortex-2',
        destination: '/catalogue/multicam-black-aim-vortex',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-aim-vortex',
        destination: '/catalogue/royale-rifle-mag-pouch',
        permanent: true,
      },
      {
        source: '/catalogue/black-mamba-modular',
        destination: '/catalogue/king-chitto-mark-2',
        permanent: true,
      },
      {
        source: '/catalogue/green-mamba-modular',
        destination: '/catalogue/green-mamba-modular-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-thunder',
        destination: '/catalogue/royale-mamba-modular',
        permanent: true,
      },
      {
        source: '/catalogue/green-thunder',
        destination: '/catalogue/king-viper-kangguru-2',
        permanent: true,
      },
      {
        source: '/catalogue/king-viper-kangguru',
        destination: '/catalogue/king-viper-kangguru-2',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-thunder',
        destination: '/catalogue/black-rifle-mag-pouch-2',
        permanent: true,
      },
      {
        source: '/catalogue/green-mamba-mark-2',
        destination: '/catalogue/multicam-black-chitto-mark-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-viper-mark-2',
        destination: '/catalogue/royale-mamba-mark-2',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-viper-mark-2',
        destination: '/catalogue/green-fabric-holster-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-viper-kangguru',
        destination: '/catalogue/multicam-hg-double-mag-pouch-2',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-viper-kangguru',
        destination: '/catalogue/black-snake-head-sling-bag-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-aim-vortex',
        destination: '/catalogue/green-viper-kangguru',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-tropic-bite-bee',
        destination: '/catalogue/black-cobra',
        permanent: true,
      },
      {
        source: '/catalogue/green-viper-mark-2',
        destination: '/catalogue/multicam-black-mamba-mark-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-snake-head-sling-bag',
        destination: '/catalogue/black-snake-head-sling-bag-2',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-bite-bee',
        destination: '/catalogue/cobra-desert-night-camo',
        permanent: true,
      },
      {
        source: '/catalogue/black-bite-bee',
        destination: '/catalogue/black-chitto-mark-2-2',
        permanent: true,
      },
      {
        source: '/catalogue/royale-bite-bee',
        destination: '/catalogue/multicam-black-rifle-mag-pouch-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-wolven-messenger-bag',
        destination: '/catalogue/black-wolven-messenger-bag-2',
        permanent: true,
      },
      {
        source: '/catalogue/cobra-tiger-stripe-camo',
        destination: '/catalogue/black-trojan-pro-warbelt-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-dregon-head-backpack',
        destination: '/catalogue/cobra-multicam-black',
        permanent: true,
      },
      {
        source: '/catalogue/royale-snake-head-sling-bag',
        destination: '/catalogue/royale-snake-head-sling-bag-2',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-snake-head-sling-bag',
        destination: '/catalogue/multicam-black-snake-head-sling-bag-2',
        permanent: true,
      },
      {
        source: '/catalogue/king-mamba-mark-2',
        destination: '/catalogue/cobra-multicam-tropic',
        permanent: true,
      },
      {
        source: '/catalogue/cobra-multicam',
        destination: '/catalogue/royale-trojan-pro-warbelt-2',
        permanent: true,
      },
    ];
  },
  async headers() {
    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'none'",
          "form-action 'self'",
          "img-src 'self' data: blob: https: https://www.google-analytics.com https://*.google-analytics.com https://*.googletagmanager.com",
          "font-src 'self' https://fonts.gstatic.com https://vercel.live https://assets.vercel.com data:",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://vercel.live",
          `script-src ${scriptSrc}`,
          "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://wa.me https://vercel.live wss://ws-us3.pusher.com https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
          "frame-src https://vercel.live",
          ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
        ].join('; '),
      },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(self), microphone=(), geolocation=(), payment=()' },
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
