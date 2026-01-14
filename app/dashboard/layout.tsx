"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardNavbar } from "./Navbar";

const sidebarLinks = [
  {
    group: "Gestión Inmobiliaria",
    items: [
      { name: "Resumen", icon: "📊", href: "/dashboard" },
      { name: "Mis Propiedades", icon: "🏠", href: "/dashboard/propiedades" },
      {
        name: "Proyectos",
        icon: "🏗️",
        href: "/dashboard/proyectos",
        badge: "Nuevo",
      },
      { name: "Interesados", icon: "👥", href: "/dashboard/leads", badge: "3" },
    ],
  },
  {
    group: "Herramientas & IA",
    items: [
      { name: "Estadísticas", icon: "📈", href: "/dashboard/analitica" },
      { name: "IA Assistant", icon: "🤖", href: "/dashboard/ai" },
      { name: "Marketing Pro", icon: "🚀", href: "/dashboard/marketing" },
      { name: "Documentos Legales", icon: "📄", href: "/dashboard/legal" },
      { name: "Mi Equipo", icon: "🤝", href: "/dashboard/equipo" },
    ],
  },
  {
    group: "Usuario",
    items: [
      { name: "Mi Perfil", icon: "👤", href: "/dashboard/perfil" },
      { name: "Gestionar Plan", icon: "💳", href: "/dashboard/plan" },
      { name: "Favoritos", icon: "⭐", href: "/dashboard/favoritos" },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* SIDEBAR PERSISTENTE */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6 overflow-y-auto">
        <div className="font-black text-2xl tracking-tighter mb-10 italic">
          REAL<span className="text-indigo-600">STATE</span>
        </div>

        <nav className="space-y-8 flex-1">
          {sidebarLinks.map((group) => (
            <div key={group.group}>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-4 px-3">
                {group.group}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded-2xl font-bold text-sm transition-all ${
                          isActive
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                            : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                        {item.badge && (
                          <span className="ml-auto bg-indigo-100 text-indigo-600 text-[9px] px-2 py-0.5 rounded-lg font-black uppercase">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Botón de Ayuda o Soporte al final */}
        <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
            ¿Necesitas ayuda?
          </p>
          <button className="text-xs font-black text-indigo-600 hover:underline">
            Contactar soporte
          </button>
        </div>
      </aside>

      {/* ÁREA DINÁMICA (Aquí cargan los componentes) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
