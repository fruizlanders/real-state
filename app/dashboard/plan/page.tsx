export default function PlanPage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
        Gestionar mi Suscripción
      </h1>
      <p className="text-slate-500 font-medium mb-12">
        Mejora tu plan para desbloquear herramientas de IA avanzadas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Plan Actual */}
        <div className="bg-white p-10 rounded-[40px] border-2 border-slate-100 text-left">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Tu plan actual
          </p>
          <h2 className="text-3xl font-black text-slate-900 mt-2">
            Agente Free
          </h2>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-3 text-sm text-slate-600 font-medium">
              ✅ 3 Propiedades activas
            </li>
            <li className="flex gap-3 text-sm text-slate-600 font-medium">
              ✅ Leads básicos
            </li>
            <li className="flex gap-3 text-sm text-slate-300 font-medium italic">
              ❌ Sin IA Assistant
            </li>
          </ul>
        </div>

        {/* Upgrade */}
        <div className="bg-white p-10 rounded-[40px] border-4 border-indigo-600 text-left relative shadow-2xl shadow-indigo-100">
          <span className="absolute -top-4 right-8 bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase">
            Recomendado
          </span>
          <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
            Plan Profesional
          </p>
          <h2 className="text-3xl font-black text-slate-900 mt-2">
            $29<span className="text-sm">/mes</span>
          </h2>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-3 text-sm text-slate-700 font-bold">
              ✅ Propiedades Ilimitadas
            </li>
            <li className="flex gap-3 text-sm text-slate-700 font-bold">
              ✅ IA Copywriter & Analytica
            </li>
            <li className="flex gap-3 text-sm text-slate-700 font-bold">
              ✅ Leads Verificados (DNI)
            </li>
          </ul>
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black mt-10 hover:bg-indigo-700 transition-all">
            Pasar a Pro
          </button>
        </div>
      </div>
    </div>
  );
}
