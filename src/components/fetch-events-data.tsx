import { EventoEvent } from '@/lib/types';
import React from 'react';

type FetchEventsDataProps = {
  city: string;
  children: React.ReactNode;
};

export default async function FetchEventsData({ city, children }: FetchEventsDataProps) {
  const response = await fetch('https://bytegrad.com/course-assets/projects/evento/api/events?city=' + city);
  const events: EventoEvent[] = await response.json();

  // Pass the events data to the children components
  return React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { events } as { events: EventoEvent[] });
    }
    return child;
  });
}
