"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/Navbar";
import { Step1Info } from "./Step1Info";
import { Step2Map } from "./Step2Map";
import { Step3Details } from "./Step3Details";

export default function PublicarPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    tipo_operacion: "venta",
    habitaciones: 1,
    banos: 1,
    area_m2: "",
    direccion: "",
    imagenes: [] as string[],
    coordenadas: { lat: -12.11, lng: -77.03 },
  });

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("inmuebles")
      .insert([{ ...formData, user_id: user?.id }]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      router.push("/dashboard?success=true");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 mx-1 rounded-full transition-all duration-500 ${s <= step ? "bg-indigo-600" : "bg-slate-200"}`}
              />
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">
            Paso {step} de 3
          </p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100">
          {step === 1 && (
            <Step1Info
              data={formData}
              update={updateFormData}
              next={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <Step2Map
              data={formData}
              update={updateFormData}
              next={() => setStep(3)}
              back={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <Step3Details
              data={formData}
              update={updateFormData}
              submit={handleSubmit}
              back={() => setStep(2)}
              loading={loading}
            />
          )}
        </div>
      </main>
    </div>
  );
}
