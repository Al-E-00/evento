import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

type PaginationControlsProps = {
  previousPath: string | null;
  nextPath: string | null;
};

const btnStyles = `flex items-center gap-x-2
  rounded-md bg-white/5 px-5 py-3
  text-sm text-white opacity-75 transition hover:opacity-100`;

export default function PaginationControls({ previousPath, nextPath }: PaginationControlsProps) {
  return (
    <section className="flex w-full justify-between">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          <ArrowRightIcon />
          Next
        </Link>
      )}
    </section>
  );
}
