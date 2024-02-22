import H1 from '@/components/h1';
import Image from 'next/image';

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = await fetch('https://bytegrad.com/course-assets/projects/evento/api/events/' + slug);
  const event = await response.json();

  return (
    <main>
      <section className="relative flex items-center justify-center overflow-hidden py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          className="z-0 object-cover blur-3xl"
          fill
          quality={50}
          priority
          sizes="(max-width: 80rem) 100vw, 80rem"
        />

        <div className="z-1 relative flex flex-col gap-6 lg:flex-row lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">{event.name}</H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button
              className="bg-blur state-effects mt-5
              w-[95vw] rounded-md border-2
              border-white/10 bg-white/20 py-2 text-lg capitalize
              sm:w-full lg:mt-auto"
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
