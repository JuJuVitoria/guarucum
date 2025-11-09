import textosData from "@/site/locales/pt.json";
import SiteLayout from "@/site/layout/SiteLayout";
import { Text } from "@/shared/components/Text/Text";
import { Mapa } from "@/shared/components/Mapa/Mapa";

import biomasGeoJson from "@/data/GeoJson/lmBioma250.json"

export default function SobrePFNMs() {
    const texto = textosData.pageSitePFNMs;

    const biomaColors = {
        'Amazônia': '#8dd3c7',
        'Caatinga': '#ffffb3',
        'Cerrado': '#bebada',
        'Mata Atlântica': '#fb8072',
        'Pampa': '#80b1d3',
        'Pantanal': '#fdb462'
    };

    const styleBioma = (feature) => {
        return {
            color: biomaColors[feature.properties.Bioma] || '#333',
            fillColor: biomaColors[feature.properties.Bioma] || '#ccc',
            fillOpacity: 0.5,
            weight: 2
        }
    };

    return (
        <SiteLayout>
            {/* Seção 1 */}
            <section className="container" style={{ marginTop: "100px" }}>
                <Text variant="h1" className="text-center mb-3">{texto.secao1Titulo}</Text>
                <Text>{texto.secao1Paragrafo1}</Text>
                <Text>{texto.secao1Paragrafo2}</Text>
            </section>

            {/* Seção 2 */}
            <section className="container mb-5 bg-light p-4 rounded-4 shadow-sm">
                <Text variant="h2" className="text-center">{texto.secao2Titulo}</Text>
                <Text>{texto.secao2Paragrafo1}</Text>
                <Text>{texto.secao2Paragrafo2}</Text>
            </section>

            {/* Seção 3 - Lista */}
            <section className="container mb-5">
                <Text variant="h3">{texto.secao3Titulo}</Text>
                <ul className="list-group list-group-flush">
                    {texto.secao3Lista.map((item, index) => (
                        <li key={index} className="list-group-item">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="container my-5" style={{ position: 'relative', width: '100%' }}>
                <Text variant="h2" className="mb-3">{texto.secao4Titulo}</Text>

                <div style={{ height: "70vh", width: "100%", position: 'relative', overflow: "hidden", borderRadius: 12 }}>
                    <Mapa
                        geojsonData={biomasGeoJson}
                        style={styleBioma}
                        center={[-14.2350, -51.9253]}
                        zoom={4}
                        minZoom={3}
                        maxZoom={8}
                        onEachFeature={(feature, layer) =>
                            layer.bindPopup(feature.properties.BIOMA || 'Sem nome')
                        }
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 30,
                            left: 30,
                            background: 'white',
                            padding: '12px 16px',
                            borderRadius: 8,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            zIndex: 1000
                        }}
                    >
                        <strong>Biomas do Brasil</strong>
                        <div style={{ marginTop: 8 }}>
                            {Object.entries(biomaColors).map(([bioma, cor]) => (
                                <div key={bioma} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                                    <span style={{
                                        width: 18, height: 18, background: cor, border: '1px solid #ccc', display: 'inline-block', marginRight: 8
                                    }} />
                                    <span>{bioma}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Text variant="">Dados: <a href="https://www.ibge.gov.br/geociencias/cartas-e-mapas/informacoes-ambientais/15842-biomas.html?=&t=downloads" target="_blank" rel="noopener noreferrer">IBGE - Biomas brasileiros</a></Text>
            </section>

            {/* Seção 4 */}
            <section className="container mb-5 bg-success-subtle p-4 rounded-4 shadow-sm">
                <Text variant="h3">{texto.secao5Titulo}</Text>
                <Text>{texto.secao5Paragrafo1}</Text>
                <Text>{texto.secao5Paragrafo2}</Text>
            </section>
        </SiteLayout>
    );
}