"use client";

import dynamic from "next/dynamic";

// Aquí sí podemos usar ssr: false porque este archivo es "use client"
const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-slate-100 animate-pulse flex items-center justify-center">
      <p className="text-slate-400 font-medium italic">
        Cargando Mapa Interactivo...
      </p>
    </div>
  ),
});

export default function MapWrapper({ inmuebles }: { inmuebles: any[] }) {
  return <MapClient inmuebles={inmuebles} />;
}
