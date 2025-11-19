import { MainLayout } from "@/layout/app/MainLayout/MainLayout";
import { Table } from "react-bootstrap";
import "./informativo.scss";

export const Informativo = () => {
  const castanhaRows = [
    ["Janeiro – Março", "Queda dos frutos e início da coleta", "Coleta manual no chão da floresta, transporte, início do beneficiamento e secagem"],
    ["Abril – Junho", "Final da coleta e início da limpeza do terreno", "Limpeza do sub-bosque, manutenção das trilhas, secagem e armazenamento das castanhas"],
    ["Julho – Setembro", "Dormência e planejamento", "Classificação das sementes, podas de formação, planejamento da próxima coleta"],
    ["Outubro – Dezembro", "Floração e frutificação", "Monitoramento da floração, proteção de mudas, controle de pragas e avaliação da produção"],
  ];

  const acaiRows = [
    ["Janeiro – Março", "Frutificação e colheita (várzea)", "Colheita seletiva, transporte, início do beneficiamento"],
    ["Abril – Junho", "Desenvolvimento vegetativo", "Adubação, irrigação de suporte, podas, controle de pragas"],
    ["Julho – Setembro", "Início da floração (terra firme)", "Monitoramento nutricional e hídrico, adubação foliar"],
    ["Outubro – Dezembro", "Safra principal (terra firme)", "Colheita intensiva, transporte, beneficiamento"],
  ];

  const pupunhaRows = [
    ["Janeiro – Março", "Colheita de frutos / crescimento vegetativo", "Colheita de frutos maduros, irrigação de suporte, limpeza da área, adubação de produção"],
    ["Abril – Junho", "Plantio e manejo vegetativo (outono)", "Plantio de mudas, controle de mato, monitoramento de pragas, manejo de perfilhos"],
    ["Julho – Setembro", "Desenvolvimento e formação de perfilhos", "Poda seletiva, adubação de manutenção, desbaste de plantas fracas ou mal formadas"],
    ["Outubro – Dezembro", "Floração e frutificação (clima temperado)", "Monitoramento de pragas e doenças, polinização/rraleio se necessário, irrigação e adubação de cobertura"],
  ];

  return (
    <MainLayout>
      <div className="container py-4 py-md-5">
        <h1 className="page-title fw-bold text-center mb-2">Informativo</h1>
        <h2 className="section-subtitle fw-semibold text-center text-muted mb-4">
          Outono em relação aos principais PFNMs da região norte
        </h2>

        <div className="vstack gap-5">
          {/* Castanha-do-Pará */}
          <section>
            <h3 className="section-heading text-center mb-3">Castanha-do-Pará</h3>

            <div className="mx-auto content-narrow">
              <p className="section-text mb-2">
                É necessário cuidados com uma possível excessiva umidade do solo pois no começo do outono ainda há um resquício
                das chuvas na região, ainda que menor intensidade. Assim sendo necessário avaliar a possibilidade de drenagem.
              </p>
              <p className="section-text mb-2">
                Além disso o outono pode favorecer o aparecimento de fungos e brocas, principalmente em áreas de mais sombra e
                umidade. Sendo interessante o monitoramento de podridão parda dos fungos e broca-da-castanha (Conotrachelusspp.).
              </p>
              <p className="section-text mb-2">
                A coleta das castanhas do chão das florestas ocorre entre dezembro e junho, entre maio e junho ainda há castanhas
                no chão para serem colhidas. Dar maior atenção a possibilidade de perda das castanhas por apodrecimento e
                contaminação por fungos como o Aspergillus flavus.
              </p>
              <p className="section-text mb-0">
                O outono também é uma boa época para o monitoramento e proteção de mudas naturais, além de ser um bom período para
                o planejamento para os períodos mais secos que seguirão esta estação.
              </p>
            </div>

            <div className="my-4">
              <img
                className="d-block mx-auto rounded shadow-sm media-cover"
                src="https://jornadaamazonia.org.br/wp-content/uploads/2023/12/Castanha-amazonia.jpg"
                alt="Castanha-amazonia"
              />
            </div>

            <div className="table-responsive mx-auto table-wrap">
              <Table bordered hover striped responsive="md" className="align-middle small">
                <thead className="table-light">
                  <tr>
                    <th>Período</th>
                    <th>Fase do Ciclo</th>
                    <th>Atividades Recomendadas</th>
                  </tr>
                </thead>
                <tbody>
                  {castanhaRows.map((row, i) => (
                    <tr key={`castanha-${i}`}>
                      <td className="fw-semibold">{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>

          {/* Açaí */}
          <section>
            <h3 className="section-heading text-center mb-3">Açaí</h3>

            <div className="mx-auto content-narrow">
              <p className="section-text mb-2">
                Principalmente no cultivo de açaí feito em áreas de várzea ou terra firme o outono vai representar um período crítico
                para o desenvolvimento vegetativo e preparo para a próxima floração. É essencial garantir o controle da drenagem em
                áreas com excesso de água, já que as plantas ainda estão em crescimento e o solo permanece úmido, assim evitando
                doenças fúngicas como a antracnose.
              </p>
              <p className="section-text mb-2">
                Além disso, o outono representa uma época ideal para a manutenção da adubação, pois com a combinação da umidade residual
                e o aumento da luminosidade, ocorre o favorecimento da absorção de nutrientes essenciais.
              </p>
              <p className="section-text mb-0">
                Em áreas em que o cultivo dos frutos é voltado para a polpa, o outono representa a fase preparatória para a safra
                principal, que geralmente ocorre entre agosto e dezembro. Já nos açaizais nativos, é importante o mapeamento de áreas
                produtivas e o planejamento da colheita, observando o comportamento das águas locais.
              </p>
            </div>

            <div className="my-4">
              <img
                className="d-block mx-auto rounded shadow-sm media-cover"
                src="https://agencia.ac.gov.br/wp-content/uploads/2024/02/20240118102908_IMG_7999-scaled.jpg"
                alt="Colheita do açaí"
              />
            </div>

            <div className="table-responsive mx-auto table-wrap">
              <Table bordered hover striped responsive="md" className="align-middle small">
                <thead className="table-light">
                  <tr>
                    <th>Período</th>
                    <th>Fase do Ciclo</th>
                    <th>Atividades Recomendadas</th>
                  </tr>
                </thead>
                <tbody>
                  {acaiRows.map((row, i) => (
                    <tr key={`acai-${i}`}>
                      <td className="fw-semibold">{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>

          {/* Pupunha */}
          <section>
            <h3 className="section-heading text-center mb-3">Pupunha</h3>

            <div className="mx-auto content-narrow">
              <p className="section-text mb-2">
                O outono representa um período favorável onde a pupunheira encontra possibilidades para crescimento vegetativo,
                especialmente em solos ainda úmidos. Este é um período ideal para o plantio de mudas, pois a umidade residual ajuda
                no pegamento das plantas, reduzindo a necessidade de irrigação de suporte.
              </p>
              <p className="section-text mb-2">
                Em sistemas para palmito, é um bom momento para monitorar crescimento dos perfilhos, que define a produtividade futura.
                Para frutos, marca a transição entre colheita e indução floral, exigindo adubação de manutenção e controle do mato.
              </p>
              <p className="section-text mb-0">
                A redução das chuvas e o aumento da luminosidade podem favorecer ácaros e brocas, exigindo monitoramento fitossanitário
                contínuo nesta fase.
              </p>
            </div>

            <div className="my-4">
              <img
                className="d-block mx-auto rounded shadow-sm media-cover"
                src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3206873:1647868567/Pupunhas.jpg?f=default&$p$f=a317bfa"
                alt="Pupunha"
              />
            </div>

            <div className="table-responsive mx-auto table-wrap">
              <Table bordered hover striped responsive="md" className="align-middle small">
                <thead className="table-light">
                  <tr>
                    <th>Período</th>
                    <th>Fase do Ciclo</th>
                    <th>Atividades Recomendadas</th>
                  </tr>
                </thead>
                <tbody>
                  {pupunhaRows.map((row, i) => (
                    <tr key={`pupunha-${i}`}>
                      <td className="fw-semibold">{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};