"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Importamos el cliente que ya tienes configurado

export function AuthButton() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Obtener el usuario actual
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Suscribirse a cambios (Login/Logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/"); // Redirigir al inicio al salir
    router.refresh();
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="h-10 w-10 rounded-full border-2 border-indigo-500 p-0.5 hover:border-indigo-600 transition-all overflow-hidden relative"
        >
          <Image
            src={
              user.user_metadata?.avatar_url ||
              `https://ui-avatars.com/api/?name=${user.email}`
            }
            alt="User"
            fill
            className="rounded-full object-cover"
          />
        </Link>
        <button
          onClick={handleSignOut}
          className="text-[10px] font-black uppercase text-slate-400 hover:text-red-500 transition-colors tracking-widest"
        >
          Salir
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        // Aquí puedes abrir el modal o redirigir a /login
        // Por ahora lo mandamos a login si prefieres página aparte
        router.push("/login");
      }}
      className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
    >
      Ingresar
    </button>
  );
}
