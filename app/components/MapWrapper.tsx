"use client";

import dynamic from "next/dynamic";

// Aquí sí podemos usar ssr: false porque este archivo es "use client"
const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-100 animate-pulse" />,
});

export default function MapWrapper({ inmuebles }: { inmuebles: any[] }) {
  return <MapClient inmuebles={inmuebles} />;
}
