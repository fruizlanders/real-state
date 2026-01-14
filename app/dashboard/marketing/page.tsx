export default function MarketingPage() {
  const servicios = [
    {
      title: "Boost en Redes",
      desc: "Campaña automática en FB e Instagram Ads por 7 días.",
      price: "49",
      icon: "📱",
    },
    {
      title: "Destacado Gold",
      desc: "Tu propiedad aparece en los primeros 3 resultados de búsqueda.",
      price: "29",
      icon: "✨",
    },
    {
      title: "Video Tour IA",
      desc: "Convertimos tus fotos en un video tour profesional con locución.",
      price: "19",
      icon: "🎥",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
        Marketing <span className="text-indigo-600">Pro</span>
      </h1>
      <p className="text-slate-500 font-medium mb-10">
        Acelera tus ventas con herramientas de promoción avanzada.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicios.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl mb-6">{s.icon}</div>
            <h3 className="text-xl font-black text-slate-900 mb-3">
              {s.title}
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
              {s.desc}
            </p>
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-black text-slate-900">
                  ${s.price}
                </span>
                <span className="text-slate-400 text-xs font-bold uppercase">
                  / pago único
                </span>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-indigo-600 transition-colors">
                Contratar ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
