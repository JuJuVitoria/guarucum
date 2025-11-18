import { MainLayout } from "@/layout/app/MainLayout/MainLayout";
import { Table } from "react-bootstrap";

export const Informativo = () => {
    return(
        <MainLayout>
            <h1 className="fw-bold text-center">Informativo</h1>
            <h2 className="fw-semibold text-center mt-3">Outono em relação aos principais pfnms da região norte:</h2>

            <section>
                <h3 className="fw-regular text-center my-3">Castanha-do-Pará:</h3>
                <p className="mb-0">É necessário cuidados com uma possível excessiva umidade do solo pois no começo do outono ainda há um resquício
                    das chuvas na região, ainda que menor intensidade. Assim sendo necessário avaliar a possibilidade de drenagem.
                </p>
                <p className="mb-0">Além disso o outono pode favorecer o aparecimento de fungos e brocas, principalmente em áreas de mais sombra e
                    umidade. Sendo interessante o monitoramento de podridão parda dos fungos e broca-da-castanha (Conotrachelusspp.).
                </p>
                <p className="mb-0">A coleta das castanhas do chão das florestas ocorre entre dezembro e junho, entre maio e
                    junho ainda há castanhas
                    no chão para serem colhidas. Dar maior atenção a possibilidade de perda das castanhas por apodrecimento e
                    contaminação por fungos como o Aspergillus flavus.
                </p>
                <p className="mb-0">O outono também é uma boa época para o monitoramento e proteção de mudas naturais, além
                    de ser um bom período para o planejamento para os períodos mais secos que seguirão esta estação.
                </p>

                <img className="img-informativo mx-auto my-4" src="https://jornadaamazonia.org.br/wp-content/uploads/2023/12/Castanha-amazonia.jpg" alt="Castanha-amazonia" />

                <Table
                    columns={["Período", "Fase do Ciclo", "Atividades Recomendadas"]}
                    data={[
                        ["Janeiro – Março", "Queda dos frutos e início da coleta", "Coleta manual no chão da floresta, transporte, início do beneficiamento e secagem"],
                        ["Abril – Junho", "Final da coleta e início da limpeza do terreno", "Limpeza do sub-bosque, manutenção das trilhas, secagem e armazenamento das castanhas"],
                        ["Julho – Setembro", "Dormência e planejamento", "Classificação das sementes, podas de formação, planejamento da próxima coleta"],
                        ["Outubro – Dezembro", "Floração e frutificação", "Monitoramento da floração, proteção de mudas, controle de pragas e avaliação da produção"]
                    ]}
                />
            </section>

            <section>
                <h3 className="fw-regular text-center my-3">Açaí:</h3>
                <p className="mb-0">Principalmente no cultivo de açaí feito em áreas de várzea ou terra firme o outono vai
                    representar um período crítico para o desenvolvimento vegetativo e preparo para a próxima floração. É
                    essencial garantir o controle da drenagem em áreas com excesso de água, já que as plantas ainda estão em
                    crescimento e o solo permanece úmido, assim evitando doenças fúngicas como a antracnose.
                </p>
                <p className="mb-0">Além disso, o outono representa uma época ideal para a manutenção da adubação, pois com a
                    combinação da umidade residual e o aumento da luminosidade, ocorre o favorecimento da absorção de nutrientes essenciais.
                </p>
                <p className="mb-0">Em áreas em que o cultivo dos frutos é voltado para a polpa, o outono representa a fase
                    preparatória para a safra principal, que geralmente ocorre entre agosto e dezembro.
                </p>
                <p className="mb-0">Já nos açaizais nativos que são manejados de forma extrativista é importante que as
                    comunidades façam o mapeamento das áreas produtivas e o planejamento da colheita futura, e observem o
                    comportamento das águas dos igarapés e rios.
                </p>

                <img className="img-informativo mx-auto my-4" src="https://agencia.ac.gov.br/wp-content/uploads/2024/02/20240118102908_IMG_7999-scaled.jpg" alt="Colheita do açaí" />

                <Table
                    columns={["Período", "Fase do Ciclo", "Atividades Recomendadas"]}
                    data={[
                        ["Janeiro – Março", "Frutificação e colheita (várzea)", "Colheita seletiva, transporte, início do beneficiamento"],
                        ["Abril – Junho", "Desenvolvimento vegetativo", "Adubação, irrigação de suporte, podas, controle de pragas"],
                        ["Julho – Setembro", "Início da floração (terra firme)", "Monitoramento nutricional e hídrico, adubação foliar"],
                        ["Outubro – Dezembro", "Safra principal (terra firme)", "Colheita intensiva, transporte, beneficiamento"]
                    ]}
                />
            </section>

            <section>
                <h3 className="fw-regular text-center my-3">Pupunha:</h3>
                <p className="mb-0">O outono representa um período favorável onde a pupunheira encontra possibilidades para
                    crescimento vegetativo, especialmente em solos ainda úmidos. Este é um período ideal para o plantio de mudas,
                    pois a umidade residual irá ajudar no pegamento das plantas assim reduzindo a necessidade de irrigação de
                    suporte. No entanto, ainda sim é essencial garantir que o solo esteja bem drenado, pois o excesso de umidade
                    favorece o surgimento de doenças como antracnose e podridão do estipe.
                </p>
                <p className="mb-0">Em sistemas de cultivo para o palmito, o outono se faz um bom momento para monitorar o
                    crescimento dos perfilhos que irão definir a produtividade futura da área. Já para o cultivo que é destinado à
                    produção de frutos, esta estação irá marcar a transição entre a colheita e a indução floral, assim exigindo a
                    adubação de manutenção e controle do mato.
                </p>
                <p className="mb-0">Outro fator importante que merece atenção nesta época do ano é o manejo fitossanitário. A
                    redução das chuvas e o aumento da luminosidade podem favorecer o surgimento de ácaros e brocas, assim exigindo
                    monitoramento.
                </p>
        
                <img className="img-informativo mx-auto my-4" src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3206873:1647868567/Pupunhas.jpg?f=default&$p$f=a317bfa" alt="Pupunha" />

                <Table
                    columns={["Período", "Fase do Ciclo", "Atividades Recomendadas"]}
                    data={[
                        ["Janeiro – Março", "Colheita de frutos / crescimento vegetativo", "Colheita de frutos maduros, irrigação de suporte, limpeza da área, adubação de produção"],
                        ["Abril – Junho", "Plantio e manejo vegetativo (outono)", "Plantio de mudas, controle de mato, monitoramento de pragas, manejo de perfilhos"],
                        ["Julho – Setembro", "Desenvolvimento e formação de perfilhos", "Poda seletiva, adubação de manutenção, desbaste de plantas fracas ou mal formadas"],
                        ["Outubro – Dezembro", "Floração e frutificação (em áreas de clima temperado)", "Monitoramento de pragas e doenças da floração e frutificação, polinização (se necessário), raleio de frutos (se necessário), irrigação adequada à fase, adubação de cobertura (se necessário)"]
                    ]}
                />
            </section>
        </MainLayout>
    );
}