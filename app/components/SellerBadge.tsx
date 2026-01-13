import Image from "next/image";

export function SellerBadge({ profile }: { profile: any }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
      <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-inner bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
        {profile?.avatar_url ? (
          <Image
            src={profile.avatar_url}
            fill
            className="object-cover"
            alt="Avatar"
          />
        ) : (
          profile?.full_name?.charAt(0) || "A"
        )}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900">
          {profile?.full_name || "Agente RealState"}
        </h4>
        <div className="flex items-center gap-1">
          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold uppercase">
            Verificado
          </span>
          <span className="text-[10px] text-slate-400 font-medium">
            4.8 (120 reseñas)
          </span>
        </div>
      </div>
    </div>
  );
}
