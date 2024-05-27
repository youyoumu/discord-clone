import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-wrap p-4 gap-4 max-h-screen overflow-hidden justify-start">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-[30rem] min-h-64 w-64 rounded-md" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-[30rem] min-h-64 w-64 rounded-md" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-[30rem] min-h-64 w-64 rounded-md" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-[30rem] min-h-64 w-64 rounded-md" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-[30rem] min-h-64 w-64 rounded-md" />
      </div>
    </div>
  )
}
