import Skeleton from '@/components/skeleton';

export default function Loading() {
  return (
    <div className="flex animate-pulse flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h-4 w-[34.375rem]" />
      <Skeleton className="h-4 w-[25rem]" />
      <Skeleton className="h-4 w-[26.875rem]" />
    </div>
  );
}
