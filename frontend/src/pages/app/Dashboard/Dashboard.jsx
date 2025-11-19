import { MainLayout } from "@/layout/app/MainLayout/MainLayout";
import Card from "react-bootstrap/Card";
import { FaCheckCircle } from "react-icons/fa";
import { TbBook2 } from "react-icons/tb";

export const Dashboard = () => {
    return (
        <MainLayout>
            <Card
                className="shadow-sm mt-4"
                style={{ borderColor: "rgba(28,107,74,0.2)", borderWidth: 1, borderStyle: "solid", backgroundColor: "var(--primary-bg-color)" }}
            >
                <Card.Header
                    as="h5"
                    style={{ color: "var(--text-color)", background: "transparent", borderBottom: "none" }}
                >
                    Atividade Recente
                </Card.Header>

                <Card.Body className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ backgroundColor: "var(--secundary-bg-color)" }}>
                        <FaCheckCircle size={20} color="#1C6B4A" style={{ marginTop: 2, flexShrink: 0 }} />
                        <div className="flex-grow-1">
                            <p className="mb-1" style={{ color: "var(--text-color)" }}>Coleta registrada</p>
                            <p className="mb-0" style={{ color: "#8D5A3A" }}>150 kg de açaí coletado - Há 2 horas</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ backgroundColor: "var(--secundary-bg-color)" }}>
                        <TbBook2 size={20} color="#E8C87A" style={{ marginTop: 2, flexShrink: 0 }} />
                        <div className="flex-grow-1">
                            <p className="mb-1" style={{ color: "var(--text-color)" }}>Módulo concluído</p>
                            <p className="mb-0" style={{ color: "#8D5A3A" }}>Precificação de PFNMs - Ontem</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </MainLayout>
    );
};