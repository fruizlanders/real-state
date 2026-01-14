"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("leads")
        .select("*, inmuebles(titulo)")
        .eq("agente_id", user.id)
        .order("created_at", { ascending: false });

      setLeads(data || []);
    };

    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-black text-slate-900 mb-10">
          Prospectos e Interesados
        </h1>

        {leads.length === 0 ? (
          <p className="text-slate-500">No hay prospectos disponibles.</p>
        ) : (
          <div className="grid gap-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white p-6 rounded-[24px] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between shadow-sm gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600 uppercase">
                    {lead.nombre_completo?.charAt(0) || "?"}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {lead.nombre_completo}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Interesado en:{" "}
                      <span className="font-bold">
                        {lead.inmuebles?.titulo || "—"}
                      </span>
                    </p>
                    {lead.dni_ruc && (
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        DNI: {lead.dni_ruc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  {lead.email && (
                    <a
                      href={`mailto:${lead.email}`}
                      className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                      title="Enviar Correo"
                      aria-label="Enviar correo"
                    >
                      📧
                    </a>
                  )}
                  {lead.telefono && (
                    <a
                      href={`https://wa.me/${lead.telefono.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all flex items-center gap-2"
                    >
                      WhatsApp
                    </a>
                  )}
                  <button className="bg-slate-100 text-slate-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200">
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
