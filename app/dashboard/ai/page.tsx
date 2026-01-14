import { Navbar } from "@/app/components/Navbar";

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-black mb-4">
              AI Real Estate <span className="text-indigo-200">Assistant</span>
            </h1>
            <p className="text-indigo-100 font-medium mb-8 max-w-lg leading-relaxed">
              Hola, soy tu asistente inteligente. Puedo ayudarte a redactar
              contratos, optimizar tus precios o generar descripciones
              vendedoras en segundos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-white/10 hover:bg-white/20 p-6 rounded-3xl border border-white/10 text-left transition-all backdrop-blur-md">
                <span className="text-2xl mb-3 block">📝</span>
                <h4 className="font-bold">Redactar Contrato</h4>
                <p className="text-xs text-indigo-200 mt-1">
                  Genera un contrato de arras legalmente sólido.
                </p>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-6 rounded-3xl border border-white/10 text-left transition-all backdrop-blur-md">
                <span className="text-2xl mb-3 block">💰</span>
                <h4 className="font-bold">Análisis de Precio</h4>
                <p className="text-xs text-indigo-200 mt-1">
                  Compara tu propiedad con el mercado actual.
                </p>
              </button>
            </div>
          </div>
          {/* Decoración circular de fondo */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
