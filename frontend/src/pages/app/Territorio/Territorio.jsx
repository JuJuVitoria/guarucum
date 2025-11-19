import { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { FaArrowLeft, FaHome, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import { TbFlag2 } from "react-icons/tb";
import { MainLayout } from "../../../layout/app/MainLayout/MainLayout";
import { Mapa } from "@/components/shared/Mapa/Mapa";
import userLocation from "@/data/user/userLocation.json";

const formatAreaHa = (ha) => {
  if (ha == null) return "-";
  try {
    return new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(ha) + " ha";
  } catch {
    return `${ha} ha`;
  }
};

// Centroide simples do anel externo do polígono [lon, lat]
const polygonCentroid = (geometry) => {
  try {
    if (!geometry || geometry.type !== "Polygon") return null;
    const ring = geometry.coordinates?.[0];
    if (!Array.isArray(ring) || ring.length === 0) return null;
    let x = 0, y = 0, n = ring.length;
    for (const [lon, lat] of ring) {
      x += lon;
      y += lat;
    }
    return [x / n, y / n]; // [lon, lat]
  } catch {
    return null;
  }
};

export const Territorio = ({ onNavigate }) => {
  const [showUser, setShowUser] = useState(true);
  const [showTerraUsuario, setShowTerraUsuario] = useState(true);

  // Extrai propriedades do território (informations[1])
  const terraProps = useMemo(() => {
    const terra = userLocation?.informations?.[1];
    const props = terra?.properties || {};
    return {
      nome: props.terrai_nome || "Território do usuário",
      modalidade: props.modalidade_ti || "-",
      fase: props.fase_ti || "-",
      dominioUniao: props.dominio_uniao === "t" ? "União" : "—",
      crSigla: props.undadm_sigla || props.cr || "-",
      crNome: props.undadm_nome || props.cr || "-",
      ufSigla: props.uf_sigla || "-",
      municipios: props.municipio_nome || "-",
      areaHa: props.superficie_perimetro_ha,
      dataAtualizacao: props.data_atualizacao || "-",
    };
  }, []); // [file:47]

  // Ponto do usuário (location)
  const userPointFC = useMemo(() => {
    const loc = userLocation.informations?.[0]?.location;
    if (!loc?.coordinates) return null;
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: loc,
          properties: {
            name: "Você",
            userId: userLocation.userId,
          },
        },
      ],
    };
  }, []); // [file:47]

  // Polígono do território (TI) como FeatureCollection
  const terraUsuarioFC = useMemo(() => {
    const terra = userLocation.informations?.[1];
    if (!terra?.geometry) return null;
    return {
      type: "FeatureCollection",
      features: [
        {
          ...terra,
          properties: {
            ...(terra.properties || {}),
            name: terra?.properties?.terrai_nome || "Terra do usuário",
            userId: userLocation.userId,
          },
        },
      ],
    };
  }, []); // [file:47]

  // Camada dedicada: Território da comunidade (para casar com a legenda)
  const communityTerritoryFC = useMemo(() => {
    const terra = userLocation?.informations?.[1];
    if (!terra?.geometry || terra?.geometry?.type !== "Polygon") return null;
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: terra.geometry,
          properties: {
            ...(terra.properties || {}),
            name: terra?.properties?.terrai_nome || "Território da comunidade",
            tipo: "Território da comunidade",
          },
        },
      ],
    };
  }, []); // [file:47]

  // Camada dedicada: Centro da comunidade (centroide do polígono)
  const communityCenterFC = useMemo(() => {
    const terra = userLocation?.informations?.[1];
    const centroid = polygonCentroid(terra?.geometry);
    if (!centroid) return null;
    const [lon, lat] = centroid;
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [lon, lat] },
          properties: {
            name: "Centro da comunidade",
            ref: terra?.properties?.terrai_nome || "Comunidade",
          },
        },
      ],
    };
  }, []); // [file:47]

  // Centro do mapa a partir do ponto do usuário
  const centerCoords = useMemo(() => {
    const loc = userLocation.informations?.[0]?.location;
    if (loc?.coordinates) {
      const [lon, lat] = loc.coordinates;
      return [lat, lon];
    }
    return [-14.235, -51.9253];
  }, []); // [file:47]

  // Ordem de camadas e estilos coerentes com a legenda
  const layers = [
    {
      key: "community-territory",
      visible: true,
      data: communityTerritoryFC,
      style: { color: "red", weight: 2, fillColor: "red", fillOpacity: 0.25 },
    }, // [file:47]
    {
      key: "user-point",
      visible: showUser,
      data: userPointFC,
      // estilos para CircleMarker (fallback) e meta symbol para Mapa
      style: { color: "#0D47A1", weight: 2, fillColor: "#1E88E5", fillOpacity: 0.95, radius: 8 },
      symbol: "pin-blue",
    }, // [file:47]
    {
      key: "community-center",
      visible: true,
      data: communityCenterFC,
      style: { color: "#8D5A3A", weight: 2, fillColor: "#E8C87A", fillOpacity: 0.95, radius: 9 },
      symbol: "pin-gold",
    }, // [file:47]
    {
      key: "user-territory",
      visible: showTerraUsuario,
      data: terraUsuarioFC,
      style: { color: "red", weight: 2, fillOpacity: 0.3 },
    }, // [file:47]
  ];

  return (
    <MainLayout>
      <div className="position-sticky top-0 z-3 shadow-lg rounded" style={{ backgroundColor: "var(--primary-bg-color)" }}>
        <Container className="py-3">
          <div className="d-flex align-items-center gap-3">
            {onNavigate && (
              <Button
                variant="link"
                className="text-white p-0"
                onClick={() => onNavigate("dashboard")}
                aria-label="Voltar"
              >
                <FaArrowLeft size={24} />
              </Button>
            )}
            <h2 className="m-0">Mapa da Comunidade</h2>
          </div>
        </Container>
      </div>

      <Container className="py-4">
        {/* Info da comunidade com dados do userLocation */}
        <Card className="shadow-sm" style={{ borderColor: "rgba(28,107,74,0.2)", borderWidth: 1, borderStyle: "solid" }}>
          <Card.Body className="d-flex align-items-start gap-3">
            <div className="p-3 rounded-circle" style={{ backgroundColor: "rgba(28,107,74,0.10)" }}>
              <FaHome size={24} color="#1C6B4A" />
            </div>
            <div className="flex-grow-1">
              <h5 className="mb-1" style={{ color: "#0B3D2E" }}>
                {terraProps.nome}
              </h5>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <Badge bg="success" className="text-uppercase">{terraProps.modalidade}</Badge>
                <Badge bg="primary">{terraProps.fase}</Badge>
                <Badge bg="secondary">{terraProps.dominioUniao}</Badge>
                <Badge bg="dark">{terraProps.crSigla}</Badge>
              </div>
              <p className="mb-1" style={{ color: "#8D5A3A" }}>UF: {terraProps.ufSigla}</p>
              <p className="mb-0" style={{ color: "#8D5A3A" }}>Municípios: {terraProps.municipios}</p>
            </div>
          </Card.Body>
        </Card>

        {/* Controles de camadas */}
        <Card className="shadow-sm mt-3" style={{ borderColor: "rgba(28,107,74,0.2)", borderWidth: 1, borderStyle: "solid" }}>
          <Card.Header as="h6" className="bg-white" style={{ color: "#0B3D2E" }}>
            Camadas visíveis
          </Card.Header>
          <Card.Body className="d-flex flex-wrap gap-4">
            <Form.Check
              type="checkbox"
              id="showUser"
              label="Localização do usuário"
              checked={showUser}
              onChange={(e) => setShowUser(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              id="showTerraUsuario"
              label="Território do usuário (alternativo)"
              checked={showTerraUsuario}
              onChange={(e) => setShowTerraUsuario(e.target.checked)}
            />
          </Card.Body>
        </Card>

        {/* Mapa */}
        <Card className="shadow-sm mt-3" style={{ borderColor: "rgba(28,107,74,0.2)", borderWidth: 1, borderStyle: "solid" }}>
          <Card.Body className="p-0">
            <div style={{ height: "70vh", width: "100%" }}>
              <Mapa layers={layers} center={centerCoords} zoom={10} />
            </div>
          </Card.Body>
        </Card>

        <Row className="g-3 mt-1">
          {/* Pontos de coleta (exemplos) */}
          <Col xs={12} md={6}>
            <Card className="shadow-sm" style={{ borderColor: "rgba(28,107,74,0.2)", borderWidth: 1, borderStyle: "solid" }}>
              <Card.Header as="h6" className="bg-white d-flex align-items-center gap-2" style={{ color: "#0B3D2E" }}>
                <TbFlag2 size={18} color="#1C6B4A" />
                Pontos de Coleta
              </Card.Header>
              <Card.Body className="d-flex flex-column gap-2">
                <Button
                  variant="light"
                  className="text-start p-3 rounded-3 border-0"
                  style={{ backgroundColor: "#F3E7D5" }}
                >
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex align-items-start gap-2">
                      <FaMapMarkerAlt size={18} color="#1C6B4A" style={{ marginTop: 2 }} />
                      <div>
                        <div style={{ color: "#0B3D2E" }}>{terraProps.nome} • Setor A1</div>
                        <div style={{ color: "#8D5A3A" }}>Açaizal Principal</div>
                        <div style={{ color: "#8D5A3A" }}>450 kg/mês</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-pill text-white" style={{ backgroundColor: "#1C6B4A" }}>
                      Ativo
                    </span>
                  </div>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Legenda */}
          <Col xs={12} md={6}>
            <Card className="shadow-sm" style={{ borderColor: "rgba(28,107,74,0.2)", borderWidth: 1, borderStyle: "solid" }}>
              <Card.Header as="h6" className="bg-white d-flex align-items-center gap-2" style={{ color: "#0B3D2E" }}>
                <FaInfoCircle size={18} color="#1C6B4A" />
                Legenda
              </Card.Header>
              <Card.Body className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle" style={{ width: 14, height: 14, backgroundColor: "red" }} />
                  <span style={{ color: "#0B3D2E" }}>Território da comunidade</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle" style={{ width: 14, height: 14, backgroundColor: "#1E88E5", border: "2px solid #0D47A1" }} />
                  <span style={{ color: "#0B3D2E" }}>Localização do usuário</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle" style={{ width: 14, height: 14, backgroundColor: "#E8C87A", border: "2px solid #8D5A3A" }} />
                  <span style={{ color: "#0B3D2E" }}>Centro da comunidade</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sobre o território com dados do userLocation */}
        <Card
          className="shadow-sm mt-3"
          style={{ borderColor: "#1C6B4A", borderWidth: 2, background: "linear-gradient(135deg, #ffffff, rgba(28,107,74,0.05))" }}
        >
          <Card.Body>
            <h5 className="mb-2" style={{ color: "#0B3D2E" }}>Sobre o Território</h5>
            <p className="mb-2" style={{ color: "#8D5A3A" }}>
              {terraProps.nome} é uma área {terraProps.modalidade.toLowerCase()} e {terraProps.fase.toLowerCase()}, sob domínio da {terraProps.dominioUniao} e gestão {terraProps.crSigla} ({terraProps.crNome}). Área aproximada de {formatAreaHa(terraProps.areaHa)}; atualização cadastral em {terraProps.dataAtualizacao}.
            </p>
            <p className="mb-0" style={{ color: "#8D5A3A" }}>
              Localização: {terraProps.ufSigla}. Municípios abrangidos: {terraProps.municipios}.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </MainLayout>
  );
};