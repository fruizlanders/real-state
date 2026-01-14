"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function DashboardNavbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  return (
    <nav className="h-20 bg-white/50 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-40">
      {/* Buscador de Comandos Rápido */}
      <div className="relative w-96 group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          🔍
        </span>
        <input
          type="text"
          placeholder="Buscar inmuebles, leads o contratos..."
          className="w-full bg-slate-100/50 border-transparent focus:bg-white focus:border-indigo-500 rounded-xl py-2.5 pl-12 pr-4 text-xs font-medium transition-all outline-none"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-300 border border-slate-200 px-1.5 py-0.5 rounded uppercase">
          cmd + k
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Notificaciones */}
        <button className="relative p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-colors">
          <span className="text-xl">🔔</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Info del Agente */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-slate-900 leading-tight">
              {user?.user_metadata?.full_name || "Agente Verificado"}
            </p>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-tighter">
              Plan Agency Pro
            </p>
          </div>
          <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-slate-200">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </nav>
  );
}
