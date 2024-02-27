'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'react-hot-toast';

const searchTextInputSchema = z
  .string()
  .min(1)
  .refine(city => /^[a-zA-Z\s]/.test(decodeURIComponent(city)));

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchTextInput = searchTextInputSchema.safeParse(searchText);
    if (!searchTextInput.success) {
      toast.error('Invalid city name');
      return;
    }

    router.push(`/events/${searchTextInput.data.trim().replace(/\s/g, '-')}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[36.25rem]">
      <input
        className="h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:bg-white/10 focus:ring-2"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
