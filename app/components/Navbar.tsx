"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session) setIsModalOpen(false);
    });
    return () => subscription.unsubscribe();
  }, []);

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
    else alert("¡Enlace enviado! Revisa tu email.");
    setLoading(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-xl border-b border-slate-100 transition-all">
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-slate-900 flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs italic">
            RS
          </div>
          REAL<span className="text-indigo-600 italic">STATE</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {["Comprar", "Alquilar", "Proyectos", "Vender"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[13px] font-bold text-slate-500 hover:text-indigo-600 transition-colors tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4 group">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all"
              >
                <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold overflow-hidden">
                  {user.user_metadata?.avatar_url ? (
                    <img src={user.user_metadata.avatar_url} alt="Profile" />
                  ) : (
                    user.email?.charAt(0).toUpperCase()
                  )}
                </div>
                <span className="text-xs font-black text-slate-700 uppercase tracking-tighter">
                  Panel Pro
                </span>
              </Link>
              <button
                onClick={() => supabase.auth.signOut()}
                className="text-[10px] font-black text-slate-300 uppercase hover:text-rose-500 transition-colors"
              >
                Salir
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-900 text-white px-7 py-3 rounded-2xl text-[13px] font-black hover:bg-indigo-600 hover:-translate-y-0.5 transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </nav>

      {/* MODAL LOGIN (MISMA LÓGICA QUE TENÍAS, DISEÑO PULIDO) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white w-full max-w-sm rounded-[40px] p-10 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                Bienvenido
              </h2>
              <p className="text-slate-400 text-sm font-medium mt-1">
                La plataforma para profesionales
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 py-4 rounded-2xl font-bold text-slate-700 hover:border-indigo-600 transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                Google Account
              </button>
              <div className="text-[10px] uppercase font-black text-slate-300 text-center tracking-[0.3em] py-4">
                O accede vía email
              </div>
              <form onSubmit={handleEmailLogin} className="space-y-3">
                <input
                  type="email"
                  placeholder="email@profesional.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 ring-indigo-600 outline-none transition-all text-sm font-medium"
                  required
                />
                <button
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-slate-900 shadow-xl shadow-indigo-100 transition-all"
                >
                  {loading ? "..." : "Solicitar Acceso"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
