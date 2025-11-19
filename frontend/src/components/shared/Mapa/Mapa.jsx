import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function Mapa({
  center,
  zoom = 10,
  minZoom = 3,
  maxZoom = 18,
  containerStyle = { height: "100%", width: "100%" },
  tile = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap"
  },
  layers = [],
}) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      minZoom={minZoom}
      maxZoom={maxZoom}
      style={containerStyle}
      preferCanvas
    >
      <TileLayer url={tile.url} attribution={tile.attribution} />

      {layers
        .filter((l) => l.visible !== false && l.data)
        .map((l) => (
          <GeoJSON
            key={l.key}
            data={l.data}
            style={l.style}
            pointToLayer={l.pointToLayer}
            onEachFeature={l.onEachFeature}
          />
        ))}
    </MapContainer>
  );
}