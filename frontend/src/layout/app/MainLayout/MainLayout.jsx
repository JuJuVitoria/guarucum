import { Container } from "react-bootstrap";
import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";

export const MainLayout = ({ children }) => {
  const [active, setActive] = useState("dashboard");

  return (
    <div
      className="d-flex flex-column flex-md-row"
      style={{ minHeight: "100vh", background: "#f5f5f7" }}
    >
      <Sidebar active={active} onChange={setActive} />

      <div className="flex-grow-1 d-flex flex-column pb-5 pb-md-0">
        <Header />

        <main className="flex-grow-1 py-3 py-md-4" style={{ overflow: "auto" }}>
          <Container fluid="md">
            {children}
          </Container>
        </main>
      </div>
    </div>
  );
}