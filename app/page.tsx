import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* NAVBAR MINIMALISTA */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          REAL<span className="text-indigo-600">STATE</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600">
            Comprar
          </a>
          <a href="#" className="hover:text-indigo-600">
            Alquilar
          </a>
          <a href="#" className="hover:text-indigo-600">
            Proyectos
          </a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
          Publicar Inmueble
        </button>
      </nav>

      {/* HERO SECTION - El Gancho Visual */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2070"
          alt="Casa de lujo"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Encuentra tu próximo hogar con <br />{" "}
            <span className="text-indigo-400">tecnología inmersiva.</span>
          </h1>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Explora propiedades con Realidad Aumentada y Tours 360°. La nueva
            forma de comprar casa en Perú.
          </p>

          {/* BARRA DE BÚSQUEDA PRO */}
          <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center max-w-3xl mx-auto gap-2">
            <input
              type="text"
              placeholder="¿En qué distrito buscas?"
              className="w-full px-6 py-3 text-slate-700 outline-none rounded-full"
            />
            <button className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* FEED DE PROPIEDADES (Placeholder de la Demo) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Propiedades Destacadas
            </h2>
            <p className="text-slate-500">
              Seleccionadas especialmente por su ubicación y diseño.
            </p>
          </div>
          <button className="text-indigo-600 font-semibold hover:underline">
            Ver todas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD EJEMPLO (Repetir este componente con los datos de Supabase luego) */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all">
                <Image
                  src={`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070`}
                  alt="Propiedad"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                  ESTRENO
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Moderno Depa en San Isidro
              </h3>
              <p className="text-slate-500 text-sm mb-3">
                Av. Salaverry 1234, San Isidro
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-indigo-600">
                  $245,000
                </span>
                <div className="flex gap-4 text-slate-400 text-sm">
                  <span>3 hab</span>
                  <span>2 baños</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
