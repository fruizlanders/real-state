export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="h-10 w-64 bg-slate-200 animate-pulse rounded-lg mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[4/3] bg-slate-200 animate-pulse rounded-2xl" />
            <div className="h-6 w-3/4 bg-slate-200 animate-pulse rounded-md" />
            <div className="h-4 w-1/2 bg-slate-200 animate-pulse rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
