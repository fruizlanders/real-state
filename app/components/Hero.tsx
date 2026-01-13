import Image from "next/image";
import { SearchBar } from "./SearchBar";

export function Hero() {
  return (
    <section className="relative h-[65vh] lg:h-[75vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2070"
        alt="Propiedad de lujo"
        fill
        className="object-cover opacity-50 scale-105"
        priority
      />
      {/* Overlay gradiente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />

      <div className="relative z-10 text-center px-4 max-w-4xl w-full">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
          Tu hogar ideal <br />
          <span className="text-indigo-400">está aquí.</span>
        </h1>
        <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
          Explora las mejores propiedades con tecnología de punta y tours
          inmersivos.
        </p>

        <div className="max-w-3xl mx-auto backdrop-blur-md p-2 bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
