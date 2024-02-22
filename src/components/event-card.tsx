import { EventoEvent } from '@/lib/types';
import Image from 'next/image';

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section
      className="flex h-[23.75rem] max-w-[31.25rem] flex-1 basis-[20rem] flex-col overflow-hidden rounded-xl bg-white/[3%]"
      key={event.id}
    >
      <Image src={event.imageUrl} alt={event.name} width={500} height={280} className="h-[60%] object-cover" />

      <div className="flex flex-1 flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="mt-4 text-sm text-white/50">{event.location}</p>
      </div>
    </section>
  );
}
