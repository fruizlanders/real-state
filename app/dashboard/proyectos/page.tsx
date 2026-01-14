export default function ProyectosPage() {
  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Proyectos Inmobiliarios
        </h1>
        <p className="text-slate-500 font-medium">
          Lanza y gestiona tus proyectos de construcción o edificios.
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-600 rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-xl">
          <span className="bg-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
            Servicio Corporativo
          </span>
          <h2 className="text-4xl font-black mt-6 mb-4">
            Publica tu proyecto inmobiliario
          </h2>
          <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
            Contrata un plan de proyecto y capta clientes de calidad. Recibe
            leads con datos verificados (DNI/Email) y potencia tu negocio.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
              Adquirir Plan Proyecto
            </button>
            <button className="bg-indigo-500/30 border border-white/30 backdrop-blur-md px-8 py-4 rounded-2xl font-black hover:bg-indigo-500/50 transition-all">
              Ver beneficios
            </button>
          </div>
        </div>
        {/* Decoración abstracta */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.svgrepo.com/show/491322/building.svg')] bg-no-repeat bg-right-bottom opacity-10 grayscale invert" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <FeatureCard
          icon="🛡️"
          title="Leads Verificados"
          desc="Número de documento y correo validados automáticamente."
        />
        <FeatureCard
          icon="📊"
          title="Dashboard de Obra"
          desc="Controla el stock de unidades en tiempo real."
        />
        <FeatureCard
          icon="📩"
          title="Exportación Directa"
          desc="Exporta tus prospectos a Excel o tu propio CRM."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="font-black text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
