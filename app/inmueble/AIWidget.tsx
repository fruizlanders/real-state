export function AIWidget({ direccion }: { direccion: string | null }) {
  // Verificamos si direccion existe; si no, usamos un valor por defecto
  const distrito = direccion ? direccion.split(",").pop()?.trim() : "la zona";

  return (
    <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            Smart Estimate AI
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-4">
          Análisis de Mercado Inteligente
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
            <p className="text-indigo-200 text-xs mb-1">
              Precio m² en {distrito}
            </p>
            <p className="text-xl font-bold">$2,100</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
            <p className="text-indigo-200 text-xs mb-1">Plusvalía anual est.</p>
            <p className="text-xl font-bold text-emerald-400">+5.4%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
            <p className="text-indigo-200 text-xs mb-1">Puntaje de Inversión</p>
            <p className="text-xl font-bold italic">Excelente</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
    </div>
  );
}
