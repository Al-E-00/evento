import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { capitalize } from 'lodash';
import prisma from './db';
import { notFound } from 'next/navigation';

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getEvents(city: string, page = 1) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
  });

  return {
    events,
    totalCount,
  };
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}
