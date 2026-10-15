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
        source: '/catalogue/royale-mamba-modular',
        destination: '/catalogue/royale-anaconda',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-chitto-mark-2',
        destination: '/catalogue/royale-hg-double-mag-pouch-2',
        permanent: true,
      },
      {
        source: '/catalogue/black-cobra',
        destination: '/catalogue/cobra-tiger-stripe-camo-2',
        permanent: true,
      },
      {
        source: '/catalogue/multicam-black-mamba-mark-2',
        destination: '/catalogue/green-cobra',
        permanent: true,
      },
      {
        source: '/catalogue/king-cobra',
        destination: '/catalogue/black-wolven-messenger-bag-2',
        permanent: true,
      },
      {
        source: '/catalogue/cobra-desert-night-camo',
        destination: '/catalogue/black-rattle-belt-2',
        permanent: true,
      },
      {
        source: '/catalogue/cobra-tiger-stripe-camo',
        destination: '/catalogue/black-trojan-pro-warbelt-2',
        permanent: true,
      },
      {
        source: '/catalogue/cobra-multicam-black',
        destination: '/catalogue/green-trojan-pro-warbelt-2',
        permanent: true,
      },
      {
        source: '/catalogue/cobra-multicam-tropic',
        destination: '/catalogue/multicam-black-trojan-pro-warbelt-2',
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
