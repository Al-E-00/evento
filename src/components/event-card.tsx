'use client';

import { EventoEvent } from '@prisma/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className="h-[23.75rem] max-w-[31.25rem] flex-1 basis-[20rem]"
      href={`/event/${event.slug}`}
      style={{
        //@ts-ignore
        scale: scaleProgress,
        //@ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section
        className="state-effects relative flex h-full w-full
          flex-col overflow-hidden rounded-xl bg-white/[3%]"
        key={event.id}
      >
        <Image src={event.imageUrl} alt={event.name} width={500} height={280} className="h-[60%] object-cover" />

        <div className="flex flex-1 flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="mt-4 text-sm text-white/50">{event.location}</p>
        </div>

        <section
          className="absolute left-[.75rem] top-[.75rem] flex h-[2.8125rem] w-[2.8125rem]
          flex-col items-center justify-center rounded-md bg-black/30"
        >
          <p className="-mb-[.3125rem] text-xl font-bold">
            {new Date(event.date).getDate() < 10 ? `0${new Date(event.date).getDate()}` : new Date(event.date).getDate()}
          </p>
          <p className="text-xs uppercase text-accent">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
        </section>
      </section>
    </MotionLink>
  );
}
