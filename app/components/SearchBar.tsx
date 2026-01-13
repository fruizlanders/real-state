"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirige a la página de búsqueda (que implementaremos en el futuro)
    router.push(`/buscar?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 w-full"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="¿En qué distrito buscas?"
        className="w-full px-6 py-3 text-slate-700 outline-none rounded-full bg-transparent"
      />
      <button
        type="submit"
        className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all"
      >
        Buscar
      </button>
    </form>
  );
}
