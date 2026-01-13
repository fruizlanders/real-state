"use client";
import {
  Building2,
  Home,
  Building,
  Umbrella,
  TreePine,
  Map as MapIcon,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { label: "Departamentos", icon: Building2, slug: "departamento" },
  { label: "Casas", icon: Home, slug: "casa" },
  { label: "Oficinas", icon: Building, slug: "oficina" },
  { label: "Playa", icon: Umbrella, slug: "playa" },
  { label: "Terrenos", icon: TreePine, slug: "terreno" },
  { label: "Mapa", icon: MapIcon, slug: "mapa", isLink: true },
];

export function Categories() {
  return (
    <div className="flex items-center justify-center gap-8 py-8 overflow-x-auto no-scrollbar bg-white border-b border-slate-100">
      {categories.map((cat) =>
        cat.isLink ? (
          <Link
            key={cat.label}
            href="/mapa"
            className="flex flex-col items-center gap-2 group cursor-pointer min-w-[80px]"
          >
            <div className="p-3 rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <cat.icon size={24} />
            </div>
            <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900">
              {cat.label}
            </span>
          </Link>
        ) : (
          <Link
            key={cat.label}
            href={`/buscar?tipo_inmueble=${cat.slug}`}
            className="flex flex-col items-center gap-2 group cursor-pointer min-w-[80px]"
          >
            <div className="p-3 rounded-full bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
              <cat.icon size={24} />
            </div>
            <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900">
              {cat.label}
            </span>
          </Link>
        ),
      )}
    </div>
  );
}
