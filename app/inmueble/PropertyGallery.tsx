import Image from "next/image";

export function PropertyGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
      <div className="md:col-span-2 md:row-span-2 relative bg-slate-200 overflow-hidden">
        <Image
          src={images[0]}
          alt="Principal"
          fill
          className="object-cover hover:scale-105 transition-transform duration-1000"
          priority
        />
      </div>
      {/* Muestra hasta 4 imágenes pequeñas adicionales */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="hidden md:block relative bg-slate-100 overflow-hidden"
        >
          <Image
            src={images[i] || images[0]}
            alt={`Vista ${i}`}
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
      ))}
    </div>
  );
}
