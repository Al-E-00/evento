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

const pageNumberSchema = z.coerce.number().int().positive().optional();
const searchParamsSchema = z
  .string()
  .min(1)
  .refine(city => /^[a-zA-Z\s]/.test(decodeURIComponent(city)));

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  //validate params using zod
  const city = searchParamsSchema.safeParse(params.city);
  const page = pageNumberSchema.safeParse(searchParams.page);

  if (!city.success) {
    throw new Error('Invalid city name');
  } else if (!page.success) {
    throw new Error('Invalid page number');
  }

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[1.25rem] py-24">
      <H1 className="mb-28">
        {city.data === 'all' && 'All Events'}
        {city.data !== 'all' && `Events in ${_.startCase(_.toLower(city.data))}`}
      </H1>

      <Suspense key={city.data + page.data} fallback={Loading()}>
        <FetchEventsData city={city.data}>
          <EventsList city={city.data} page={page.data} />
        </FetchEventsData>
      </Suspense>
    </main>
  );
}
