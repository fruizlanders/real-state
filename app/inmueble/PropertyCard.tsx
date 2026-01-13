import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
  id: string;
  titulo: string;
  precio: number;
  habitaciones: number;
  banos: number;
  area_m2: number;
  direccion: string;
  imagenes_urls: string[] | null;
  tipo_operacion: string;
}

export function PropertyCard({ inmueble }: { inmueble: PropertyProps }) {
  const imageSrc =
    inmueble.imagenes_urls?.[0] ||
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000";

  return (
    <Link href={`/inmueble/${inmueble.id}`} className="group block">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all bg-slate-200">
        <Image
          src={imageSrc}
          alt={inmueble.titulo}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase">
          {inmueble.tipo_operacion}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1 truncate">
        {inmueble.titulo}
      </h3>
      <p className="text-slate-500 text-sm mb-3 truncate">
        {inmueble.direccion || "Ubicación Consultar"}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-black text-indigo-600">
          ${inmueble.precio.toLocaleString()}
        </span>
        <div className="flex gap-4 text-slate-400 text-sm font-medium">
          <span>{inmueble.habitaciones} hab</span>
          <span>{inmueble.banos} baños</span>
          <span>{inmueble.area_m2} m²</span>
        </div>
      </div>
    </Link>
  );
}
