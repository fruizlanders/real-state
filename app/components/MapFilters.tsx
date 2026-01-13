"use client";

const filters = ["Venta", "Alquiler", "Casas", "Depas", "Oficinas", "Lujo"];

export function MapFilters() {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] flex gap-2">
      {filters.map((f) => (
        <button
          key={f}
          className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-md border border-slate-200 hover:bg-slate-900 hover:text-white transition-all"
        >
          {f}
        </button>
      ))}
    </div>
  );
}
