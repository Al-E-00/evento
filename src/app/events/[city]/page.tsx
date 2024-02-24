import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { EventoEvent } from '@/lib/types';
import { sleep } from '@/lib/utils';
import _ from 'lodash';

type EventsCityParams = {
  params: {
    city: string;
  };
};

export default async function City({ params }: EventsCityParams) {
  const city = params.city;

  await sleep(2000);
  const response = await fetch('https://bytegrad.com/course-assets/projects/evento/api/events?city=' + city);
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[1.25rem] py-24">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${_.capitalize(city)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
