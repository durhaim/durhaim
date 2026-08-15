'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0b0c0e', color: '#f8f9fa', fontFamily: 'sans-serif', margin: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '600px', padding: '32px', textAlign: 'center', backgroundColor: '#131518', border: '1px solid #2d3139', borderRadius: '4px' }}>
          <p style={{ color: '#ff6600', fontFamily: 'monospace', fontSize: '14px', marginBottom: '8px' }}>500 // CRITICAL ERROR</p>
          <h1 style={{ fontSize: '28px', textTransform: 'uppercase', margin: '0 0 16px' }}>Application Error</h1>
          <p style={{ color: '#9ba1a6', fontSize: '15px', lineHeight: 1.5, marginBottom: '24px' }}>
            A critical application error occurred. Please try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{ backgroundColor: '#ff6600', color: '#0b0c0e', border: 'none', padding: '12px 24px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '2px' }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
