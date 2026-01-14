import { ImageUpload } from "../components/ImageUpload";

export function Step3Details({ data, update, submit, back, loading }: any) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
      <h2 className="text-3xl font-black text-slate-900 tracking-tight">
        Fotos y detalles
      </h2>

      <ImageUpload
        onUpload={(urls: string[]) =>
          update({ imagenes: [...data.imagenes, ...urls] })
        }
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase">
            Precio (USD)
          </label>
          <input
            type="number"
            className="w-full p-4 rounded-xl bg-slate-50 mt-1"
            value={data.precio}
            onChange={(e) => update({ precio: e.target.value })}
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase">
            Área m²
          </label>
          <input
            type="number"
            className="w-full p-4 rounded-xl bg-slate-50 mt-1"
            value={data.area_m2}
            onChange={(e) => update({ area_m2: e.target.value })}
          />
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={back}
          className="flex-1 bg-slate-100 py-5 rounded-2xl font-bold text-slate-500"
        >
          Atrás
        </button>
        <button
          onClick={submit}
          disabled={loading || data.imagenes.length === 0}
          className="flex-[2] bg-slate-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-slate-200 disabled:opacity-50"
        >
          {loading ? "Publicando..." : "Publicar Propiedad"}
        </button>
      </div>
    </div>
  );
}
