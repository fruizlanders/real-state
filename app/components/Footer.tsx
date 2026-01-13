import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link
            href="/"
            className="text-2xl font-bold text-white tracking-tighter"
          >
            REAL<span className="text-indigo-500">STATE</span>
          </Link>
          <p className="mt-4 text-slate-400 max-w-xs">
            La plataforma inmobiliaria impulsada por tecnología inmersiva.
            Encuentra tu hogar ideal con Realidad Aumentada.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Plataforma</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/buscar?tipo=venta" className="hover:text-indigo-400">
                Comprar Propiedades
              </Link>
            </li>
            <li>
              <Link
                href="/buscar?tipo=alquiler"
                className="hover:text-indigo-400"
              >
                Alquilar Inmuebles
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400">
                Mapa Interactivo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400">
                Tasación con IA
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400">
                Libro de Reclamaciones
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-xs text-center text-slate-500">
        © 2026 RealState Tech. Todos los derechos reservados. Lima, Perú.
      </div>
    </footer>
  );
}
