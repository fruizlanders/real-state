export function Step1Info({ data, update, next }: any) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
      <h2 className="text-3xl font-black text-slate-900 tracking-tight">
        Información del anuncio
      </h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">
            Título
          </label>
          <input
            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-600 outline-none transition-all"
            value={data.titulo}
            onChange={(e) => update({ titulo: e.target.value })}
            placeholder="Ej: Moderno Dpto con vista al mar"
          />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">
            Descripción
          </label>
          <textarea
            rows={5}
            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-600 outline-none transition-all"
            value={data.descripcion}
            onChange={(e) => update({ descripcion: e.target.value })}
          />
        </div>
      </div>
      <button
        onClick={next}
        className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
      >
        Continuar a Ubicación
      </button>
    </div>
  );
}
