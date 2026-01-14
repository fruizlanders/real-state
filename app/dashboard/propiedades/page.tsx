"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function MisPropiedades() {
  const [propiedades, setPropiedades] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropiedades = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from("inmuebles")
          .select("*")
          .eq("propietario_id", user.id)
          .order("created_at", { ascending: false });

        setPropiedades(data || []);
      }
      setLoading(false);
    };
    fetchPropiedades();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-900">Inventario</h1>
        <Link
          href="/publicar"
          className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold"
        >
          + Nueva Propiedad
        </Link>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-slate-200 rounded-3xl w-full" />
          ))}
        </div>
      ) : propiedades.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-bold text-xl">
            Aún no tienes propiedades publicadas.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {propiedades.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-indigo-600 transition-all"
            >
              <img
                src={p.imagenes_urls?.[0] || "https://via.placeholder.com/150"}
                className="w-24 h-24 rounded-[24px] object-cover"
                alt={p.titulo}
              />
              <div className="flex-1">
                <h3 className="font-black text-slate-900">{p.titulo}</h3>
                <p className="text-sm text-slate-500">{p.direccion}</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                    USD {p.precio}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {p.tipo_operacion}
                  </span>
                </div>
              </div>
              <div className="pr-4 flex gap-2">
                <button className="p-3 bg-slate-50 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">
                  ✏️
                </button>
                <button className="p-3 bg-slate-50 rounded-xl hover:bg-rose-500 hover:text-white transition-colors">
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
