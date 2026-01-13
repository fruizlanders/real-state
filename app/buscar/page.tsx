import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { SearchBar } from "../components/SearchBar";
import { PropertyCard } from "../inmueble/PropertyCard

// Hacemos la página dinámica para que lea searchParams
export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    tipo?: string;
    min?: string;
    max?: string;
  }>;
}) {
  const params = await searchParams;
  const queryText = params.q || "";
  const tipoOperacion = params.tipo;

  // Construimos la consulta a Supabase
  let query = supabase.from("inmuebles").select("*");

  // Filtro de texto (Buscamos en título o dirección)
  if (queryText) {
    // Usamos 'ilike' para búsqueda insensible a mayúsculas/minúsculas
    // Nota: Esto busca coincidencias parciales "%texto%"
    query = query.or(
      `titulo.ilike.%${queryText}%,direccion.ilike.%${queryText}%`,
    );
  }

  // Filtro por tipo de operación (Venta/Alquiler)
  if (tipoOperacion) {
    query = query.eq("tipo_operacion", tipoOperacion);
  }

  // Ejecutamos la consulta
  const { data: inmuebles, error } = await query;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER COMPACTO */}
      <nav className="bg-white border-b px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-slate-900"
          >
            REAL<span className="text-indigo-600">STATE</span>
          </Link>
          <div className="w-full md:w-1/2">
            {/* Reutilizamos la barra de búsqueda pero más compacta si quisieras */}
            <SearchBar />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            {queryText
              ? `Resultados para "${queryText}"`
              : "Explorar Inmuebles"}
          </h1>
          <span className="text-slate-500 text-sm">
            {inmuebles?.length || 0} propiedades encontradas
          </span>
        </div>

        {/* FILTROS RÁPIDOS (Visuales por ahora) */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <Link
            href={`/buscar?q=${queryText}&tipo=venta`}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${tipoOperacion === "venta" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"}`}
          >
            En Venta
          </Link>
          <Link
            href={`/buscar?q=${queryText}&tipo=alquiler`}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${tipoOperacion === "alquiler" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"}`}
          >
            Alquiler
          </Link>
          {/* Aquí podrías agregar más filtros reales en el futuro */}
        </div>

        {/* GRID DE RESULTADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inmuebles && inmuebles.length > 0 ? (
            inmuebles.map((item) => (
              <PropertyCard key={item.id} inmueble={item} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No encontramos resultados
              </h3>
              <p className="text-slate-500">
                Intenta buscar con otros términos o en otra zona.
              </p>
              <Link
                href="/buscar"
                className="mt-6 inline-block text-indigo-600 font-semibold hover:underline"
              >
                Ver todas las propiedades
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
