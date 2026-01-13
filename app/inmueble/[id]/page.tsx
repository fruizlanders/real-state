import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/app/components/Footer";
import { AIWidget } from "@/app/inmueble/AIWidget";
import { BookingCard } from "@/app/inmueble/BookingCard";
import { PropertyCard } from "@/app/inmueble/PropertyCard";
import { PropertyGallery } from "@/app/inmueble/PropertyGallery";
import MapWrapper from "@/app/components/MapWrapper"; // Importamos el Wrapper

export default async function InmueblePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: inmueble } = await supabase
    .from("inmuebles")
    .select("*, profiles(full_name, avatar_url, role)")
    .eq("id", id)
    .single();

  if (!inmueble) return notFound();

  const { data: similares } = await supabase
    .from("inmuebles")
    .select("*")
    .neq("id", id)
    .eq("tipo_operacion", inmueble.tipo_operacion)
    .limit(3);

  const images =
    inmueble.imagenes_urls?.length > 0
      ? inmueble.imagenes_urls
      : [
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
        ];
  const whatsappLink = `https://wa.me/51973677251?text=${encodeURIComponent(`Hola, me interesa la propiedad: ${inmueble.titulo}`)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="border-b px-6 py-4 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter">
          REAL<span className="text-indigo-600">STATE</span>
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          ← Explorar más
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              {inmueble.tipo_operacion}
            </span>
            <span className="text-slate-400 text-sm">
              • Publicado recientemente
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            {inmueble.titulo}
          </h1>
          <p className="text-slate-500 text-lg flex items-center gap-2">
            📍 {inmueble.direccion}
          </p>
        </div>

        <PropertyGallery images={images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {/* CARACTERÍSTICAS RÁPIDAS */}
            <div className="grid grid-cols-3 gap-4 border-y py-8 mb-10">
              <div className="text-center border-r">
                <span className="block font-black text-2xl text-slate-900">
                  {inmueble.habitaciones}
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  Habitaciones
                </span>
              </div>
              <div className="text-center border-r">
                <span className="block font-black text-2xl text-slate-900">
                  {inmueble.banos}
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  Baños
                </span>
              </div>
              <div className="text-center">
                <span className="block font-black text-2xl text-slate-900">
                  {inmueble.area_m2}
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  m² Totales
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Descripción de la propiedad
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 whitespace-pre-line">
              {inmueble.descripcion}
            </p>

            <AIWidget direccion={inmueble.direccion} />

            {/* NUEVA SECCIÓN: MAPA REFERENCIAL */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-black tracking-tight">
                Ubicación aproximada
              </h2>
              <div className="h-[300px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative">
                <MapWrapper inmuebles={[inmueble]} />
                <div className="absolute bottom-4 left-4 z-[1000] bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100">
                  <p className="text-xs font-bold text-slate-900 italic">
                    Cerca de zonas comerciales y parques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="relative">
            <BookingCard
              precio={inmueble.precio}
              whatsappLink={whatsappLink}
              agente={inmueble.profiles}
            />
          </aside>
        </div>

        {/* SIMILARES */}
        {similares && similares.length > 0 && (
          <div className="mt-24 border-t pt-16">
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
              Propiedades similares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similares.map((item) => (
                <PropertyCard key={item.id} inmueble={item} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
