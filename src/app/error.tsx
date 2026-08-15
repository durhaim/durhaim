'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <main id="main-content" className="flex min-h-[70vh] flex-grow items-center justify-center bg-tactical-black px-margin-edge py-section-gap">
      <section className="max-w-2xl border border-surface-container-highest bg-charcoal-field/85 p-stack-lg text-center shadow-2xl">
        <p className="font-data-mono text-data-mono text-signal-orange">500 // DURHAIM SYSTEM</p>
        <h1 className="mt-stack-sm font-display-xl text-headline-lg uppercase text-stark-white">
          Something went wrong
        </h1>
        <p className="mt-stack-md font-body-md text-on-surface-variant">
          An unexpected error occurred while loading this page.
        </p>
        <div className="mt-stack-lg flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex bg-signal-orange px-6 py-3 font-label-caps text-label-caps text-tactical-black transition-colors hover:bg-stark-white"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex border border-surface-container-highest bg-tactical-black px-6 py-3 font-label-caps text-label-caps text-stark-white transition-colors hover:text-signal-orange"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
