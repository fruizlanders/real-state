import { supabase } from "@/lib/supabase";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories"; // Si creaste el de iconos
import { PropertyCard } from "./inmueble/PropertyCard";
import { Footer } from "./components/Footer";
import Link from "next/link";

async function getInmuebles() {
  const { data } = await supabase
    .from("inmuebles")
    .select("*")
    .limit(6)
    .order("created_at", { ascending: false });
  return data || [];
}

export default async function Home() {
  const inmuebles = await getInmuebles();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        {/* Opcional: Iconos de categorías */}
        <Categories />

        {/* FEED DE PROPIEDADES */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                Propiedades Destacadas
              </h2>
              <p className="text-slate-500 text-lg mt-2">
                Explora lo último en el mercado inmobiliario.
              </p>
            </div>
            <Link
              href="/buscar"
              className="group flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-all"
            >
              Ver todas las propiedades
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {inmuebles.map((item) => (
              <PropertyCard key={item.id} inmueble={item} />
            ))}

            {inmuebles.length === 0 && (
              <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">
                  No hay propiedades disponibles en este momento.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN DE CONFIANZA (Look Pro) */}
        <section className="bg-slate-50 py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">
                Compra Segura
              </h3>
              <p className="text-slate-500 text-sm">
                Verificamos cada propiedad y vendedor para tu tranquilidad.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">
                Proceso Ágil
              </h3>
              <p className="text-slate-500 text-sm">
                Agenda visitas y contacta agentes en segundos.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">
                Ubicación Real
              </h3>
              <p className="text-slate-500 text-sm">
                Visualiza tu futuro hogar en nuestro mapa interactivo.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
