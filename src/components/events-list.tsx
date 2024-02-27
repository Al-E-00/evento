import EventCard from './event-card';
import { getEvents } from '@/lib/utils';
import PaginationControls from './pagination-controls';

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : null;
  const nextPath = totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : null;

  return (
    <section className="flex max-w-[68.75rem] flex-wrap justify-center gap-10 px-[1.25rem]">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
