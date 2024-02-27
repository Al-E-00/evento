import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import _ from 'lodash';
import { Suspense } from 'react';
import Loading from './loading';
import FetchEventsData from '@/components/fetch-events-data';
import { z } from 'zod';

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props) {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${_.capitalize(city)}`,
  };
}

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  //validate params using zod
  //do not allow special characters
  const paramsSchema = z.object({
    //check that is a valid url containing city names
    //ex: /^[a-zA-Z-]/
    city: z.string().refine(city => /^[a-zA-Z\s]+$/.test(decodeURIComponent(city))),
    page: z.string().optional(),
  });
  let city, page;

  try {
    paramsSchema.parse(params);
    city = decodeURIComponent(params.city);
    page = searchParams.page || 1;
  } catch (e) {
    return (
      <div className="flex h-96 flex-col items-center justify-center text-2xl text-red-500">
        <span>An error occurred</span>
        <p className="mt-4 text-lg text-gray-500">Invalid parameters. Please check the URL and try again.</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[1.25rem] py-24">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${_.startCase(_.toLower(city))}`}
      </H1>

      <Suspense key={city + page} fallback={Loading()}>
        <FetchEventsData city={city}>
          <EventsList city={city} page={+page} />
        </FetchEventsData>
      </Suspense>
    </main>
  );
}
