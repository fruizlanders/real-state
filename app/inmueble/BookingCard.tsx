"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

interface BookingCardProps {
  precio: number;
  inmuebleId: string;
  agenteId: string;
  agente: any;
  tituloInmueble: string;
}

export function BookingCard({
  precio,
  inmuebleId,
  agenteId,
  agente,
  tituloInmueble,
}: BookingCardProps) {
  const [step, setStep] = useState<"info" | "form" | "success">("info");
  const [loading, setLoading] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const leadData = {
      nombre_completo: formData.get("nombre"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      dni_ruc: formData.get("dni"),
      mensaje: `Interesado en: ${tituloInmueble}`,
      inmueble_id: inmuebleId,
      agente_id: agenteId,
    };

    const { error } = await supabase.from("leads").insert([leadData]);

    if (!error) {
      setStep("success");
      // Opcional: Abrir WhatsApp después de guardar
      const text = `Hola, soy ${leadData.nombre_completo}. Me interesa la propiedad: ${tituloInmueble}. Mi DNI es ${leadData.dni_ruc}`;
      setTimeout(() => {
        window.open(
          `https://wa.me/51973677251?text=${encodeURIComponent(text)}`,
          "_blank",
        );
      }, 1500);
    } else {
      alert("Hubo un error al procesar tu solicitud.");
    }
    setLoading(false);
  };

  return (
    <div className="sticky top-24 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[40px] p-8 overflow-hidden">
      {step === "info" && (
        <div className="animate-in fade-in zoom-in-95 duration-300">
          <div className="mb-8">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Precio Final
            </span>
            <div className="text-5xl font-black text-indigo-600 tracking-tighter">
              ${precio.toLocaleString()}
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => setStep("form")}
              className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2"
            >
              Contactar Agente
            </button>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-tighter">
              ⚡ Respuesta promedio: 15 minutos
            </p>
          </div>
        </div>
      )}

      {step === "form" && (
        <form
          onSubmit={handleLeadSubmit}
          className="animate-in slide-in-from-right-4 duration-300 space-y-3"
        >
          <h3 className="font-black text-xl text-slate-900 mb-4">
            Déjanos tus datos
          </h3>
          <input
            name="nombre"
            placeholder="Nombre completo"
            required
            className="w-full p-4 rounded-xl bg-slate-50 border-none text-sm focus:ring-2 ring-indigo-500 transition-all"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              name="dni"
              placeholder="DNI / RUC"
              required
              className="w-full p-4 rounded-xl bg-slate-50 border-none text-sm"
            />
            <input
              name="telefono"
              placeholder="WhatsApp"
              required
              className="w-full p-4 rounded-xl bg-slate-50 border-none text-sm"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Correo"
            required
            className="w-full p-4 rounded-xl bg-slate-50 border-none text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50"
          >
            {loading ? "Procesando..." : "Verificar y Contactar"}
          </button>
          <button
            type="button"
            onClick={() => setStep("info")}
            className="w-full text-slate-400 text-xs font-bold py-2"
          >
            Cancelar
          </button>
        </form>
      )}

      {step === "success" && (
        <div className="text-center py-10 animate-in fade-in zoom-in-95">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="font-black text-xl text-slate-900">
            ¡Datos enviados!
          </h3>
          <p className="text-sm text-slate-500 mt-2">
            Redirigiendo a WhatsApp...
          </p>
        </div>
      )}

      {/* FOOTER DEL CARD CON EL AGENTE */}
      <div className="mt-10 pt-8 border-t flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-xl font-bold text-indigo-600 border border-indigo-100 relative overflow-hidden">
          {agente?.avatar_url ? (
            <Image
              src={agente.avatar_url}
              fill
              alt="Avatar"
              className="object-cover"
            />
          ) : (
            agente?.full_name?.charAt(0) || "A"
          )}
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
            Agente
          </p>
          <p className="font-bold text-slate-900">
            {agente?.full_name || "Agente Verificado"}
          </p>
        </div>
      </div>
    </div>
  );
}
