"use client";
import { useState } from "react";

export default function EquipoPage() {
  const [agentes] = useState([
    {
      id: 1,
      nombre: "Andrés Soto",
      rol: "Admin",
      propiedades: 12,
      leads: 45,
      avatar: "AS",
    },
    {
      id: 2,
      nombre: "Carla Rivas",
      rol: "Agente",
      propiedades: 8,
      leads: 22,
      avatar: "CR",
    },
    {
      id: 3,
      nombre: "Roberto Luna",
      rol: "Agente",
      propiedades: 5,
      leads: 12,
      avatar: "RL",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Mi Equipo
          </h1>
          <p className="text-slate-500 font-medium">
            Gestiona los agentes de tu inmobiliaria y sus permisos.
          </p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2">
          <span>➕</span> Invitar Agente
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {agentes.map((agente) => (
          <div
            key={agente.id}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                {agente.avatar}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {agente.nombre}
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {agente.rol}
                </span>
              </div>
            </div>

            <div className="hidden md:flex gap-12">
              <div className="text-center">
                <p className="text-[10px] font-black uppercase text-slate-400">
                  Propiedades
                </p>
                <p className="text-xl font-black text-slate-900">
                  {agente.propiedades}
                </p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase text-slate-400">
                  Leads Mes
                </p>
                <p className="text-xl font-black text-slate-900">
                  {agente.leads}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="p-3 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 transition-colors">
                ⚙️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upgrade CTA para equipos grandes */}
      <div className="mt-12 bg-slate-900 rounded-[40px] p-10 text-center text-white">
        <h3 className="text-2xl font-black mb-2">
          ¿Necesitas más de 5 agentes?
        </h3>
        <p className="text-slate-400 mb-6 font-medium">
          El plan Agencia te permite gestionar hasta 20 agentes con reportes
          avanzados.
        </p>
        <button className="bg-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
          Contactar a Ventas
        </button>
      </div>
    </div>
  );
}
