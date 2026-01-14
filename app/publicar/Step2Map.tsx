import MapWrapper from "../components/MapWrapper";

export function Step2Map({ data, update, next, back }: any) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
      <h2 className="text-3xl font-black text-slate-900 tracking-tight">
        Ubicación exacta
      </h2>
      <input
        className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-600 outline-none transition-all"
        placeholder="Escribe la dirección..."
        value={data.direccion}
        onChange={(e) => update({ direccion: e.target.value })}
      />
      <div className="h-80 rounded-[32px] overflow-hidden border-4 border-slate-50">
        <MapWrapper inmuebles={[]} />
      </div>
      <div className="flex gap-4 pt-4">
        <button
          onClick={back}
          className="flex-1 bg-slate-100 py-5 rounded-2xl font-bold text-slate-500"
        >
          Atrás
        </button>
        <button
          onClick={next}
          className="flex-[2] bg-indigo-600 text-white py-5 rounded-2xl font-bold shadow-lg shadow-indigo-100"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
