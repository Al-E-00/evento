import SkeletonCard from '@/components/skeleton-card';

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-[68.75rem] animate-pulse flex-wrap justify-center gap-20 px-[1.25rem] py-24">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
