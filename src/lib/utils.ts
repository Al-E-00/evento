import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EventoEvent } from './types';
import exp from 'constants';

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getEvents(city: string) {
  const response = await fetch('https://bytegrad.com/course-assets/projects/evento/api/events?city=' + city, {
    /* After 5 minutes it will remake a network request */
    next: {
      revalidate: 300,
    },
  });
  const events: EventoEvent[] = await response.json();
  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch('https://bytegrad.com/course-assets/projects/evento/api/events/' + slug);
  const event = await response.json();
  return event;
}
