"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function ContactForm({
  inmuebleId,
  agenteId,
}: {
  inmuebleId: string;
  agenteId: string;
}) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const leadData = {
      nombre_completo: formData.get("nombre"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      dni_ruc: formData.get("dni"),
      mensaje: formData.get("mensaje"),
      inmueble_id: inmuebleId,
      agente_id: agenteId,
    };

    const { error } = await supabase.from("leads").insert([leadData]);

    if (!error) {
      setSent(true);
      // Abrir WhatsApp en pestaña nueva
      const text = `Hola, estoy interesado en la propiedad que vi en REALSTATE. Mi DNI es ${leadData.dni_ruc}.`;
      window.open(
        `https://wa.me/${leadData.telefono}?text=${encodeURIComponent(text)}`,
        "_blank",
      );
    }
    setLoading(false);
  };

  if (sent)
    return (
      <div className="bg-emerald-50 p-6 rounded-[32px] text-center border border-emerald-100">
        <p className="text-emerald-600 font-bold">
          ¡Solicitud enviada! El agente te contactará pronto.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={handleContact}
      className="bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 space-y-4"
    >
      <h3 className="text-xl font-black text-slate-900 mb-4">
        Contactar al Agente
      </h3>
      <input
        name="nombre"
        placeholder="Nombre completo"
        className="w-full p-4 rounded-2xl bg-slate-50 outline-none focus:ring-2 ring-indigo-500"
        required
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          name="dni"
          placeholder="DNI / RUC"
          className="w-full p-4 rounded-2xl bg-slate-50 outline-none"
          required
        />
        <input
          name="telefono"
          placeholder="WhatsApp"
          className="w-full p-4 rounded-2xl bg-slate-50 outline-none"
          required
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        className="w-full p-4 rounded-2xl bg-slate-50 outline-none"
        required
      />
      <textarea
        name="mensaje"
        placeholder="¿En qué podemos ayudarte?"
        className="w-full p-4 rounded-2xl bg-slate-50 outline-none"
        rows={3}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
      >
        {loading ? "Enviando..." : "Enviar Solicitud"}
      </button>
      <p className="text-[10px] text-center text-slate-400 font-medium px-4">
        Al enviar, aceptas que tus datos sean compartidos con el agente
        verificado.
      </p>
    </form>
  );
}
