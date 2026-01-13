"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corregir icono por defecto de Leaflet en Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapClient({ inmuebles }: { inmuebles: any[] }) {
  const firstCoords = inmuebles[0]?.coordenadas?.coordinates || [
    -12.11, -77.03,
  ];
  const centerPosition: [number, number] = [firstCoords[1], firstCoords[0]];
  return (
    <MapContainer
      center={centerPosition}
      zoom={inmuebles.length === 1 ? 15 : 13} // Más zoom si es solo una propiedad
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {inmuebles.map((item) => {
        // Extraer lat/long de la columna 'coordenadas' de PostGIS
        const coords = item.coordenadas?.coordinates || [-12.11, -77.03];
        return (
          <Marker key={item.id} position={[coords[1], coords[0]]} icon={icon}>
            <Popup>
              <div className="text-sm">
                <p className="font-bold">{item.titulo}</p>
                <p className="text-indigo-600 font-bold">
                  ${item.precio.toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
