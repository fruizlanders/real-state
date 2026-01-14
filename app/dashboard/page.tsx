"use client";
import Link from "next/link";

export default function DashboardPro() {
  return (
    <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-500">
      {/* HEADER DEL DASHBOARD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Centro de Control
          </h1>
          <p className="text-slate-500 font-medium">
            Gestiona tu inventario y optimiza tus cierres con IA.
          </p>
        </div>
        <Link
          href="/dashboard/propiedades" // Cambiado para que vaya a tu lista interna
          className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-200 flex items-center gap-2"
        >
          <span>+</span> Nueva Propiedad
        </Link>
      </div>

      {/* KPI CARDS (Dinamizados mentalmente con los datos que traeremos de Supabase) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <MetricCard
          title="Alcance Semanal"
          value="12.5k"
          trend="+18%"
          isPositive={true}
        />
        <MetricCard
          title="Leads Calificados"
          value="42"
          trend="+12%"
          isPositive={true}
        />
        <MetricCard
          title="Días prom. Venta"
          value="24"
          trend="-4d"
          isPositive={true}
        />
        <MetricCard
          title="ROI Estimado"
          value="8.2%"
          trend="+0.5%"
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ACTIVIDAD DE PROSPECTOS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-slate-900">
                Actividad de Prospectos
              </h2>
              <Link
                href="/dashboard/leads"
                className="text-sm font-bold text-indigo-600 hover:underline"
              >
                Ver todos
              </Link>
            </div>

            <div className="space-y-2">
              <LeadItem
                name="Carlos Mendoza"
                property="Dpto. Miraflores 202"
                time="Hace 15 min"
                status="Nuevo"
              />
              <LeadItem
                name="Inmobiliaria Prime"
                property="Oficina San Isidro"
                time="Hace 2 horas"
                status="Agendado"
              />
              <LeadItem
                name="Lucía Ferrand"
                property="Casa La Molina"
                time="Hace 5 horas"
                status="Viendo"
              />
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: IA INSIGHTS */}
        <aside className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded-md">
                Sugerencia IA
              </span>
              <h3 className="text-xl font-bold mt-4 mb-2">
                Optimiza tu Precio
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                Detectamos que las búsquedas en **San Borja** subieron 20%.
                Ajustar tu precio podría duplicar tus leads.
              </p>
              <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-black text-sm hover:bg-indigo-50 transition-all">
                Aplicar ajuste inteligente
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>

          <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-4">Tu Nivel</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[65%]" />
              </div>
              <span className="text-sm font-black text-slate-900">65%</span>
            </div>
            <p className="text-xs text-slate-400 mt-3 font-medium">
              Completa tu perfil para ser un **Agente Verificado**.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

// Componentes internos limpios
function MetricCard({ title, value, trend, isPositive }: any) {
  return (
    <div className="bg-white p-7 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
        {title}
      </p>
      <div className="flex items-end gap-2 mt-1">
        <p className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors">
          {value}
        </p>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"} mb-2`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

function LeadItem({ name, property, time, status }: any) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-[24px] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
      <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black transition-transform group-hover:scale-110">
        {name.charAt(0)}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-black text-slate-900">{name}</h4>
        <p className="text-xs text-slate-400 font-medium">{property}</p>
      </div>
      <div className="text-right">
        <span
          className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${status === "Nuevo" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"}`}
        >
          {status}
        </span>
        <p className="text-[10px] text-slate-400 mt-1 font-bold">{time}</p>
      </div>
    </div>
  );
}
