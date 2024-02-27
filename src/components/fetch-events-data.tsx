import { EventoEvent } from '@prisma/client';
import { getEvents } from '@/lib/server-utils';
import React from 'react';

type FetchEventsDataProps = {
  city: string;
  children: React.ReactNode;
};

type FetchEventsData = {
  events: EventoEvent[];
  totalCount: number;
};

export default async function FetchEventsData({ city, children }: FetchEventsDataProps) {
  const events = await getEvents(city);

  // Pass the events data to the children components
  return React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { events } as { events: FetchEventsData });
    }
    return child;
  });
}
