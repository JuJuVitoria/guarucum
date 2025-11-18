import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function Mapa({
  geojsonData,
  center = [-23.55, -46.63],
  zoom = 13,
  style,
  onEachFeature,
  ...props
}) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      minZoom={3}
      maxZoom={8}
      style={{ height: '100vh', width: '100%', ...props.style }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          style={style}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  );
}

