import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tighter text-slate-900"
      >
        REAL<span className="text-indigo-600">STATE</span>
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
        <Link
          href="/buscar?tipo=venta"
          className="hover:text-indigo-600 transition-colors"
        >
          Comprar
        </Link>
        <Link
          href="/buscar?tipo=alquiler"
          className="hover:text-indigo-600 transition-colors"
        >
          Alquilar
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/publicar"
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
        >
          Publicar Inmueble
        </Link>
      </div>
    </nav>
  );
}
