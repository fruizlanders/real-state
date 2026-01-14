"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function ImageUpload({
  onUpload,
}: {
  onUpload: (urls: string[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);

  const uploadImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) return;

      const files = Array.from(event.target.files);
      const uploadedUrls: string[] = [];

      for (const file of files) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        // Subir a Supabase Storage
        let { error: uploadError } = await supabase.storage
          .from("propiedades")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Obtener URL pública
        const {
          data: { publicUrl },
        } = supabase.storage.from("propiedades").getPublicUrl(filePath);

        uploadedUrls.push(publicUrl);
      }

      setPreviews([...previews, ...uploadedUrls]);
      onUpload(uploadedUrls); // Pasamos las URLs al formulario principal
    } catch (error) {
      alert("Error subiendo imágenes");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {previews.map((url, i) => (
          <img
            key={i}
            src={url}
            className="h-24 w-full object-cover rounded-2xl border border-slate-200"
            alt="Preview"
          />
        ))}
        <label className="h-24 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50 transition-all">
          <span className="text-2xl">{uploading ? "⏳" : "📸"}</span>
          <span className="text-[10px] font-bold uppercase text-slate-400 mt-1">
            {uploading ? "Subiendo..." : "Añadir"}
          </span>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={uploadImages}
            disabled={uploading}
          />
        </label>
      </div>
    </div>
  );
}
