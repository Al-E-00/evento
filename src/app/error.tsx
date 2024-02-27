'use client'; // Error components must be Client Components

import H1 from '@/components/h1';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="py-24 text-center">
      <H1 className="mb-5">Something went wrong!</H1>

      <p className="text-2xl text-red-300">{error.message}</p>

      <button className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
