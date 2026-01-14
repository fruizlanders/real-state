"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AnaliticaPage() {
  const [stats, setStats] = useState({ totalLeads: 0, totalPropiedades: 0 });

  useEffect(() => {
    const loadStats = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // Contar Leads
      const { count: leadsCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .eq("agente_id", user?.id);

      // Contar Propiedades
      const { count: propCount } = await supabase
        .from("inmuebles")
        .select("*", { count: "exact", head: true })
        .eq("propietario_id", user?.id);

      setStats({
        totalLeads: leadsCount || 0,
        totalPropiedades: propCount || 0,
      });
    };
    loadStats();
  }, []);

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-700">
      <h1 className="text-4xl font-black text-slate-900 mb-8">
        Rendimiento de Mercado
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">
            Total Prospectos
          </p>
          <div className="text-6xl font-black text-indigo-600">
            {stats.totalLeads}
          </div>
          <p className="text-sm text-slate-500 mt-4 font-medium italic">
            Personas que han dejado su DNI por tus propiedades.
          </p>
        </div>

        <div className="bg-slate-900 p-10 rounded-[40px] text-white">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">
            Inventario Activo
          </p>
          <div className="text-6xl font-black">{stats.totalPropiedades}</div>
          <p className="text-sm text-slate-400 mt-4 font-medium">
            Propiedades publicadas en la red.
          </p>
        </div>
      </div>

      {/* Aquí podrías renderizar una lista de los inmuebles más vistos si tuvieras el campo visitas_count */}
    </div>
  );
}
