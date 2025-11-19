import { MainLayout } from "@/layout/app/MainLayout/MainLayout";
import { useMemo } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaCheckCircle, FaShoppingCart, FaDollarSign, FaBoxOpen, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";
import { TbBook2 } from "react-icons/tb";

// Dados
import vendas from "@/data/business/vendas.json";
import { produtos } from "@/data/business/estoque";

// Charts
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, ChartTooltip, Legend);

const currency = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const getColor = (name) => {
  const map = {
    "Castanha-do-Pará": "#1C6B4A",
    "Açaí": "#6E3B2E",
    "Babaçu": "#8D5A3A",
    "Cupuçu": "#C7893E",
    "Buriti": "#A0522D",
    "Copaíba óleo": "#B8860B",
  };
  return map[name] || "#1C6B4A";
};

export const Dashboard = () => {
  // Normalização simples de campos que vêm com pequenas variações
  const vendasNorm = useMemo(() => {
    return (vendas || []).map(v => {
      let product = v.product || "";
      // Corrigir nomes recorrentes do arquivo
      if (/castanha/i.test(product)) product = "Castanha-do-Pará";
      else if (/a[cç]a[ií]/i.test(product)) product = "Açaí";
      else if (/baba[cç]u/i.test(product)) product = "Babaçu";
      else if (/cupu[aã]u/i.test(product)) product = "Cupuçu";
      else if (/copa[ií]ba/i.test(product)) product = "Copaíba óleo";
      else if (/buriti/i.test(product)) product = "Buriti";

      const status = (v.status || "").toLowerCase().includes("final") ? "finalizada"
        : (v.status || "").toLowerCase().includes("pend") ? "pendente"
        : (v.status || "").toLowerCase().includes("cancel") ? "cancelada" : (v.status || "").toLowerCase();

      return {
        ...v,
        product,
        status,
        totalPrice: Number(v.totalPrice) || (Number(v.quantity) * Number(v.unitPrice)),
        unitPrice: Number(v.unitPrice),
        quantity: Number(v.quantity),
        date: v.date ? new Date(v.date) : null
      };
    });
  }, []);

  const estoque = useMemo(() => {
    return (produtos || []).map(p => ({
      ...p,
      item: p.item?.replace("Castanha-do-par", "Castanha-do-Pará").replace("Cupuau", "Cupuçu") || p.item,
      quantidade: Number(p.quantidade) || 0,
      validade: p.validade ? new Date(p.validade) : null,
    }));
  }, []);

  // KPIs
  const receitaTotal = vendasNorm.filter(v => v.status === "finalizada").reduce((acc, v) => acc + (v.totalPrice || 0), 0);
  const pedidosFinalizados = vendasNorm.filter(v => v.status === "finalizada").length;
  const pedidosPendentes = vendasNorm.filter(v => v.status === "pendente").length;
  const pedidosCancelados = vendasNorm.filter(v => v.status === "cancelada").length;
  const itensVendidos = vendasNorm.filter(v => v.status === "finalizada").reduce((acc, v) => acc + (v.quantity || 0), 0);
  const ticketMedio = pedidosFinalizados ? (receitaTotal / pedidosFinalizados) : 0;

  const totalSKU = estoque.length;
  const baixoEstoque = estoque.filter(e => e.quantidade <= 20); // threshold ajustável
  const validadeProxima = estoque.filter(e => e.validade && (e.validade.getTime() - Date.now()) < (1000 * 60 * 60 * 24 * 60)); // 60 dias

  // Séries: Receita por dia (apenas finalizadas)
  const byDay = {};
  vendasNorm.filter(v => v.status === "finalizada" && v.date).forEach(v => {
    const key = v.date.toISOString().slice(0, 10);
    byDay[key] = (byDay[key] || 0) + v.totalPrice;
  });
  const dias = Object.keys(byDay).sort();
  const receitaDia = dias.map(d => byDay[d]);

  // Top produtos por receita
  const byProd = {};
  vendasNorm.filter(v => v.status === "finalizada").forEach(v => {
    byProd[v.product] = (byProd[v.product] || 0) + v.totalPrice;
  });
  const topProdutos = Object.entries(byProd).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // Chart configs
  const lineReceitaData = {
    labels: dias,
    datasets: [
      {
        label: "Receita diária",
        data: receitaDia,
        fill: false,
        borderColor: "#1C6B4A",
        backgroundColor: "rgba(28,107,74,0.2)",
        tension: 0.3,
        pointRadius: 3
      }
    ]
  };

  const barTopProdutosData = {
    labels: topProdutos.map(([name]) => name),
    datasets: [
      {
        label: "Receita por produto",
        data: topProdutos.map(([, val]) => val),
        backgroundColor: topProdutos.map(([name]) => getColor(name))
      }
    ]
  };

  const doughnutStatusData = {
    labels: ["Finalizados", "Pendentes", "Cancelados"],
    datasets: [
      {
        data: [pedidosFinalizados, pedidosPendentes, pedidosCancelados],
        backgroundColor: ["#1C6B4A", "#E8C87A", "#C15B5B"],
        borderWidth: 0
      }
    ]
  };

  const barEstoqueData = {
    labels: estoque.map(e => e.item),
    datasets: [
      {
        label: "Quantidade",
        data: estoque.map(e => e.quantidade),
        backgroundColor: "#8D5A3A"
      }
    ]
  };

  return (
    <MainLayout>
      {/* KPIs */}
      <Row className="g-3 mt-4">
        <Col xs={12} md={6} lg={3}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="small" style={{ color: "var(--text-color)" }}>Receita total</div>
                  <div className="fs-4" style={{ color: "var(--text-color)" }}>{currency(receitaTotal)}</div>
                </div>
                <FaDollarSign size={28} color="#1C6B4A" />
              </div>
              <Badge bg="success" className="mt-2" style={{ backgroundColor: "rgba(28,107,74,0.2)", color: "white" }}>
                {pedidosFinalizados} pedidos finalizados
              </Badge>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="small" style={{ color: "var(--text-color)" }}>Ticket médio</div>
                  <div className="fs-4" style={{ color: "var(--text-color)" }}>{currency(ticketMedio)}</div>
                </div>
                <FaShoppingCart size={28} color="#6E3B2E" />
              </div>
              <div className="d-flex gap-2 mt-2">
                <Badge bg="secondary" style={{ backgroundColor: "var(--secundary-bg-color)", color: "var(--text-color)" }}>
                  {itensVendidos} itens
                </Badge>
                <Badge bg="warning" style={{ backgroundColor: "rgba(200,142,65,0.2)", color: "white" }}>
                  {pedidosPendentes} pendentes
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="small" style={{ color: "var(--text-color)" }}>Cancelamentos</div>
                  <div className="fs-4" style={{ color: "var(--text-color)" }}>{pedidosCancelados}</div>
                </div>
                <FaTimesCircle size={28} color="#C15B5B" />
              </div>
              <span className="small" style={{ color: "var(--text-color)" }}>Monitorar causas e contornar objeções</span>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="small" style={{ color: "var(--text-color)" }}>SKUs em estoque</div>
                  <div className="fs-4" style={{ color: "var(--text-color)" }}>{totalSKU}</div>
                </div>
                <FaBoxOpen size={28} color="#8D5A3A" />
              </div>
              <div className="d-flex gap-2 mt-2">
                <OverlayTrigger overlay={<Tooltip>Itens com quantidade ≤ 20</Tooltip>}>
                  <Badge bg="danger" style={{ backgroundColor: "rgba(202, 46, 46, 0.4)", color: "white" }}>
                    {baixoEstoque.length} baixo estoque
                  </Badge>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Validade em até 60 dias</Tooltip>}>
                  <Badge bg="warning" style={{ backgroundColor: "rgba(200,142,65,0.2)", color: "white" }}>
                    {validadeProxima.length} validade próxima
                  </Badge>
                </OverlayTrigger>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Gráficos */}
      <Row className="g-3 mt-1">
        <Col xs={12} lg={8}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Header as="h5" style={{ color: "var(--text-color)", background: "transparent", borderBottom: "none" }}>
              Receita por dia
            </Card.Header>
            <Card.Body>
              <Line data={lineReceitaData} options={{
                plugins: { legend: { display: false } },
                scales: {
                  x: { grid: { color: "rgba(255,255,255,0.05)" } },
                  y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { callback: (v) => currency(v) } }
                }
              }} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Header as="h5" style={{ color: "var(--text-color)", background: "transparent", borderBottom: "none" }}>
              Status dos pedidos
            </Card.Header>
            <Card.Body>
              <Doughnut data={doughnutStatusData} options={{ plugins: { legend: { position: "bottom", labels: { color: "var(--text-color)" } } } }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-3 mt-1">
        <Col xs={12} lg={6}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Header as="h5" style={{ color: "var(--text-color)", background: "transparent", borderBottom: "none" }}>
              Top produtos por receita
            </Card.Header>
            <Card.Body>
              <Bar data={barTopProdutosData} options={{
                plugins: { legend: { display: false } },
                scales: {
                  x: { ticks: { color: "var(--text-color)" } },
                  y: { ticks: { color: "var(--text-color)", callback: (v) => currency(v) } }
                }
              }} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card className="shadow-sm h-100" style={{ borderColor: "rgba(28,107,74,0.2)", backgroundColor: "var(--primary-bg-color)" }}>
            <Card.Header as="h5" style={{ color: "var(--text-color)", background: "transparent", borderBottom: "none" }}>
              Estoque por item
            </Card.Header>
            <Card.Body>
              <Bar data={barEstoqueData} options={{
                plugins: { legend: { display: false } },
                scales: {
                  x: { ticks: { color: "var(--text-color)" } },
                  y: { ticks: { color: "var(--text-color)" } }
                }
              }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Atividade Recente (mantida + enfeites) */}
      <Card className="shadow-sm mt-4" style={{ borderColor: "rgba(28,107,74,0.2)", borderWidth: 1, borderStyle: "solid", backgroundColor: "var(--primary-bg-color)" }}>
        <Card.Header as="h5" style={{ color: "var(--text-color)", background: "transparent", borderBottom: "none" }}>
          Atividade Recente
        </Card.Header>
        <Card.Body className="d-flex flex-column gap-3">
          <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ backgroundColor: "var(--secundary-bg-color)" }}>
            <FaCheckCircle size={20} color="#1C6B4A" style={{ marginTop: 2, flexShrink: 0 }} />
            <div className="flex-grow-1">
              <p className="mb-1" style={{ color: "var(--text-color)" }}>Venda finalizada</p>
              <p className="mb-0" style={{ color: "#8D5A3A" }}>
                {topProdutos[0]?.[0] || "Produto"} com melhor receita no período
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ backgroundColor: "var(--secundary-bg-color)" }}>
            <TbBook2 size={20} color="#E8C87A" style={{ marginTop: 2, flexShrink: 0 }} />
            <div className="flex-grow-1">
              <p className="mb-1" style={{ color: "var(--text-color)" }}>Ação sugerida</p>
              <p className="mb-0" style={{ color: "#8D5A3A" }}>Organizar lote com validade próxima para giro</p>
            </div>
          </div>

          <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ backgroundColor: "var(--secundary-bg-color)" }}>
            <FaExclamationTriangle size={20} color="#C7893E" style={{ marginTop: 2, flexShrink: 0 }} />
            <div className="flex-grow-1">
              <p className="mb-1" style={{ color: "var(--text-color)" }}>Alerta de estoque</p>
              <p className="mb-0" style={{ color: "#8D5A3A" }}>
                {baixoEstoque.length} itens com quantidade baixa — planejar reposição
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </MainLayout>
  );
};