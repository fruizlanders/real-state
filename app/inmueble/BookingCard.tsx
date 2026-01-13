import Image from "next/image";

interface BookingCardProps {
  precio: number;
  whatsappLink: string;
  agente: any;
}

export function BookingCard({
  precio,
  whatsappLink,
  agente,
}: BookingCardProps) {
  return (
    <div className="sticky top-24 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl p-8">
      <div className="mb-8">
        <span className="text-slate-400 text-xs font-bold uppercase tracking-tight">
          Precio Final
        </span>
        <div className="text-5xl font-black text-indigo-600 tracking-tighter">
          ${precio.toLocaleString()}
        </div>
      </div>

      <div className="space-y-4">
        <button className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2">
          Agendar Visita Virtual
        </button>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white border-2 border-slate-900 text-slate-900 font-bold py-5 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-center"
        >
          WhatsApp Business
        </a>
      </div>

      <div className="mt-10 pt-8 border-t flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 border border-indigo-100 relative overflow-hidden">
          {agente?.avatar_url ? (
            <Image
              src={agente.avatar_url}
              fill
              alt="Vendedor"
              className="object-cover"
            />
          ) : (
            agente?.full_name?.charAt(0) || "A"
          )}
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase">
            Agente Responsable
          </p>
          <p className="font-bold text-slate-900 text-lg">
            {agente?.full_name || "Agente RealState"}
          </p>
        </div>
      </div>
    </div>
  );
}
