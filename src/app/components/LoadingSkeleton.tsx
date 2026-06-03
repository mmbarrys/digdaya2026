export function CardSkeleton() {
  return (
    <div className="bg-card rounded-[20px] p-4 border border-border animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-border rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-border rounded w-3/4" />
          <div className="h-3 bg-border rounded w-1/2" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-border rounded w-20" />
          <div className="h-3 bg-border rounded w-16" />
        </div>
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="bg-card rounded-[20px] border border-border overflow-hidden">
      <div className="p-4 space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-4 animate-pulse">
            <div className="h-4 bg-border rounded w-24" />
            <div className="h-4 bg-border rounded flex-1" />
            <div className="h-4 bg-border rounded w-20" />
            <div className="h-4 bg-border rounded w-32" />
            <div className="h-6 bg-border rounded-full w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-4 bg-border rounded w-32" />
        <div className="h-8 bg-border rounded w-48" />
      </div>
      <div className="space-y-4">
        <div className="bg-card rounded-[20px] p-6 border border-border">
          <div className="h-4 bg-border rounded w-32 mb-2" />
          <div className="h-10 bg-border rounded w-40" />
        </div>
        <div className="bg-card rounded-[20px] p-6 border border-border">
          <div className="h-4 bg-border rounded w-32 mb-2" />
          <div className="h-8 bg-border rounded w-36" />
        </div>
      </div>
    </div>
  );
}
