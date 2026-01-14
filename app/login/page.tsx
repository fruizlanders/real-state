"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) alert(error.message);
    else alert("¡Enlace enviado! Revisa tu correo.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 border border-slate-100">
        <div className="text-center mb-10">
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter inline-block mb-4"
          >
            REAL<span className="text-indigo-600">STATE</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Bienvenido
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Acceso seguro a tu panel inmobiliario
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 py-4 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google.svg"
              className="w-5 h-5"
              alt="Google"
            />
            Continuar con Google
          </button>

          <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-300 tracking-[0.2em] py-4">
            O con tu email
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-3">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-600 outline-none transition-all"
              required
            />
            <button
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Entrar con Email"}
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 font-medium">
          ¿No tienes cuenta? Se creará una automáticamente al ingresar.
        </p>
      </div>
    </div>
  );
}
