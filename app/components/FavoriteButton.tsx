"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function FavoriteButton({ inmuebleId }: { inmuebleId: string }) {
  const [isFav, setIsFav] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkFav();
  }, []);

  const checkFav = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("favoritos")
      .select("id")
      .eq("user_id", user.id)
      .eq("inmueble_id", inmuebleId)
      .single();

    if (data) setIsFav(true);
    setLoading(false);
  };

  const toggleFav = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return alert("Inicia sesión para guardar favoritos");

    if (isFav) {
      await supabase
        .from("favoritos")
        .delete()
        .eq("user_id", user.id)
        .eq("inmueble_id", inmuebleId);
      setIsFav(false);
    } else {
      await supabase
        .from("favoritos")
        .insert({ user_id: user.id, inmueble_id: inmuebleId });
      setIsFav(true);
    }
  };

  if (loading)
    return (
      <div className="w-10 h-10 bg-slate-100 rounded-full animate-pulse" />
    );

  return (
    <button
      onClick={toggleFav}
      className={`p-3 rounded-full transition-all shadow-md ${
        isFav
          ? "bg-rose-500 text-white"
          : "bg-white text-slate-400 hover:text-rose-500"
      }`}
    >
      <span className="text-xl">{isFav ? "❤️" : "🤍"}</span>
    </button>
  );
}
