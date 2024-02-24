import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import _ from 'lodash';
import { Suspense } from 'react';
import Loading from '../loading';

type EventsCityParams = {
  params: {
    city: string;
  };
};

export default async function City({ params }: EventsCityParams) {
  const city = params.city;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[1.25rem] py-24">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${_.capitalize(city)}`}
      </H1>

      <Suspense fallback={Loading()}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
