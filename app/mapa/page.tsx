import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { PropertyCard } from "../inmueble/PropertyCard"; // Ajusta la ruta si es necesario
import MapWrapper from "../components/MapWrapper"; // Importamos el nuevo Wrapper
import { MapFilters } from "../components/MapFilters";

export default async function MapaPage() {
  const { data: inmuebles } = await supabase
    .from("inmuebles")
    .select("*")
    .limit(20);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      {/* HEADER COMPACTO */}
      <nav className="h-16 border-b px-6 flex items-center justify-between bg-white z-50">
        <Link
          href="/"
          className="font-black text-xl tracking-tighter text-slate-900"
        >
          REAL<span className="text-indigo-600">STATE</span>
        </Link>
        <div className="flex gap-4">
          <Link
            href="/"
            className="text-sm font-bold text-slate-500 hover:text-indigo-600 self-center"
          >
            Volver al inicio
          </Link>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-800 transition-all">
            Filtros Avanzados
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* LADO IZQUIERDO: LISTA (Scrollable) */}
        <aside className="w-full md:w-[420px] overflow-y-auto p-4 bg-slate-50 border-r border-slate-200">
          <div className="mb-6">
            <h2 className="text-xl font-black text-slate-900 leading-tight">
              Propiedades encontradas
            </h2>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
              Resultados en Lima, Perú
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {inmuebles?.map((item) => (
              <div
                key={item.id}
                className="scale-[0.98] hover:scale-100 transition-transform"
              >
                <PropertyCard inmueble={item} />
              </div>
            ))}
          </div>
        </aside>

        {/* LADO DERECHO: MAPA */}
        <section className="hidden md:block flex-1 relative bg-slate-200">
          <MapFilters /> {/* <-- Agregamos los filtros flotantes */}
          <MapWrapper inmuebles={inmuebles || []} />
        </section>
      </div>
    </div>
  );
}
