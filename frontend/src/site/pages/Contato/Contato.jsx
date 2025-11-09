import { useState } from "react";
import SiteLayout from "@/site/layout/SiteLayout";
import { Text } from "@/shared/components/Text/Text";
import textosData from "@/site/locales/pt.json";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import "./Contato.scss"

export default function Contato() {
    const texto = textosData.pageSiteContato;

    const [formStep, setFormStep] = useState(1);

    const nextFormStep = () => setFormStep((prev) => Math.min(prev + 1, 3));

    const prevFormStep = () => setFormStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulário enviado! Obrigado pelo contato.");
    };

    return (
        <SiteLayout>
            <section className="container" style={{ marginTop: "100px" }}>
                <Text variant="h1" className="text-center uppercase mb-4">
                    {texto.pageTitulo}
                </Text>
                <Text variant="h2" className="text-center uppercase mb-3">
                    {texto.secao1Titulo}
                </Text>
                <Text variant="h3" className="text-center mb-3">{texto.secao1Subtitulo1}</Text>
                <Text>{texto.secao1Paragrafo1}</Text>
            </section>

            <section className="container mb-5">
                <Text variant="h2" className="text-center mb-3">{texto.secao2Titulo}</Text>
                <div className="d-flex gap-3 mb-3">
                    <a href={texto.secao2RedeSocial1Link} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                        {texto.secao2RedeSocial1}
                    </a>
                    <a href={texto.secao2RedeSocial2Link} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">
                        {texto.secao2RedeSocial2}
                    </a>
                </div>
                <p>{texto.secao2Paragrado2}</p>
                <p className="fw-semibold">{texto.secao2Paragrado3}</p>
            </section>

            <section className="container mb-5">
                <Text variant="h2" className="text-center mt-5 mb-4">{texto.secao3FormularioTitulo}</Text>

                <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
                    {formStep === 1 && (
                        <div>
                            <fieldset className="mb-4">
                                <legend>Informações Pessoais</legend>

                                <div className="mb-3">
                                    <label htmlFor="f-nome" className="form-label">
                                        {texto.formNomeCompleto}
                                    </label>
                                    <input
                                        type="text"
                                        id="f-nome"
                                        name="f-nome"
                                        className="form-control"
                                        placeholder={texto.formNomeCompletoPlaceholder}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="f-telefone" className="form-label">
                                        {texto.formTelefone}
                                    </label>
                                    <input
                                        type="tel"
                                        id="f-telefone"
                                        name="f-telefone"
                                        className="form-control"
                                        placeholder={texto.formTelefonePlaceholder}
                                        pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="f-email" className="form-label">
                                        {texto.formEmail}
                                    </label>
                                    <input
                                        type="email"
                                        id="f-email"
                                        name="f-email"
                                        className="form-control"
                                        placeholder={texto.formEmailPlaceholder}
                                        required
                                    />
                                </div>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend>{texto.formPreferenciaContatoTitulo}</legend>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="contactEmail" name="forma-contato" value="email" defaultChecked />
                                    <label className="form-check-label" htmlFor="contactEmail">
                                        {texto.formContatoEmail}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="contactTelefone" name="forma-contato" value="telefone" />
                                    <label className="form-check-label" htmlFor="contactTelefone">
                                        {texto.formContatoTelefone}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="contactWhatsApp" name="forma-contato" value="whatsapp" />
                                    <label className="form-check-label" htmlFor="contactWhatsApp">
                                        {texto.formContatoWhatsApp}
                                    </label>
                                </div>
                            </fieldset>

                            <button type="button" className="btn btn-primary" onClick={nextFormStep}>
                                {texto.formBtnProximo}
                            </button>
                        </div>
                    )}

                    {formStep === 2 && (
                        <div>
                            <fieldset className="mb-4">
                                <legend>{texto.formInteressesTitulo}</legend>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="interesseComunidade" name="interesse" value="comunidade" />
                                    <label className="form-check-label" htmlFor="interesseComunidade">
                                        {texto.formInteresseComunidade}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="interessePesquisador" name="interesse" value="pesquisador" />
                                    <label className="form-check-label" htmlFor="interessePesquisador">
                                        {texto.formInteressePesquisador}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="interesseDesenvolvedor" name="interesse" value="desenvolvedor" />
                                    <label className="form-check-label" htmlFor="interesseDesenvolvedor">
                                        {texto.formInteresseDesenvolvedor}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="interesseInteressado" name="interesse" value="interessado" />
                                    <label className="form-check-label" htmlFor="interesseInteressado">
                                        {texto.formInteresseInteressado}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="interesseMidia" name="interesse" value="midia" />
                                    <label className="form-check-label" htmlFor="interesseMidia">
                                        {texto.formInteresseMidia}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="interesseOutro" name="interesse" value="outro" />
                                    <label className="form-check-label" htmlFor="interesseOutro">
                                        {texto.formInteresseOutro}
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend>{texto.formLocalizacaoTitulo}</legend>
                                <div className="mb-3">
                                    <label htmlFor="pais" className="form-label">
                                        {texto.formPaisLabel}
                                    </label>
                                    <select id="pais" name="pais" className="form-select" defaultValue="" required>
                                        <option value="" disabled>
                                            {texto.formPaisPlaceholder}
                                        </option>
                                        <option value="Brasil">Brasil</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="estado" className="form-label">
                                        {texto.formEstadoLabel}
                                    </label>
                                    <input list="estados" id="estado" name="estado" className="form-control" />
                                    <datalist id="estados">
                                        <option value="São Paulo" />
                                        <option value="Rio de Janeiro" />

                                    </datalist>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cidade" className="form-label">
                                        {texto.formCidadeLabel}
                                    </label>
                                    <input type="text" id="cidade" name="cidade" className="form-control" placeholder={texto.formCidadePlaceholder} />
                                </div>
                            </fieldset>

                            <div>
                                <button type="button" className="btn btn-secondary me-2" onClick={prevFormStep}>
                                    {texto.formBtnAnterior}
                                </button>
                                <button type="button" className="btn btn-primary" onClick={nextFormStep}>
                                    {texto.formBtnProximo}
                                </button>
                            </div>
                        </div>
                    )}

                    {formStep === 3 && (
                        <div>
                            <fieldset className="mb-4">
                                <legend>{texto.formMensagemTitulo}</legend>

                                <div className="mb-3">
                                    <label htmlFor="f-assunto-select" className="form-label">
                                        {texto.formAssuntoLabel}
                                    </label>
                                    <select id="f-assunto-select" name="f-assunto-select" className="form-select" required defaultValue="">
                                        <option value="" disabled>
                                            {texto.formAssuntoPlaceholder}
                                        </option>
                                        <option value="duvida-geral">{texto.formAssuntos.duvidaGeral}</option>
                                        <option value="suporte-tecnico">{texto.formAssuntos.suporteTecnico}</option>
                                        <option value="parceria">{texto.formAssuntos.parceria}</option>
                                        <option value="feedback">{texto.formAssuntos.feedback}</option>
                                        <option value="outros">{texto.formAssuntos.outros}</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="f-mensagem" className="form-label">
                                        {texto.formMensagemLabel}
                                    </label>
                                    <textarea
                                        id="f-mensagem"
                                        name="f-mensagem"
                                        className="form-control"
                                        placeholder={texto.formMensagemPlaceholder}
                                        rows={8}
                                        minLength={30}
                                        maxLength={500}
                                        required
                                    />
                                </div>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend>{texto.formComoConheceuTitulo}</legend>

                                <label htmlFor="como-conheceu" className="form-label">
                                    {texto.formComoConheceuLabel}
                                </label>
                                <select id="como-conheceu" name="como-conheceu" className="form-select" required defaultValue="">
                                    <option value="" disabled>
                                        {texto.formComoConheceuLabel}
                                    </option>
                                    <option value="pesquisa-google">{texto.formComoConheceuOpcoes.pesquisaGoogle}</option>
                                    <option value="redes-sociais">{texto.formComoConheceuOpcoes.redesSociais}</option>
                                    <option value="indicacao">{texto.formComoConheceuOpcoes.indicacao}</option>
                                    <option value="evento">{texto.formComoConheceuOpcoes.evento}</option>
                                    <option value="outros">{texto.formComoConheceuOpcoes.outros}</option>
                                </select>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend>{texto.formAvaliacaoTitulo}</legend>

                                <label htmlFor="points" className="form-label">
                                    {texto.formAvaliacaoLabel}
                                </label>
                                <input type="number" id="points" name="points" className="form-control" min={0} max={10} step={1} />
                            </fieldset>

                            <div>
                                <button type="button" className="btn btn-secondary me-2" onClick={prevFormStep}>
                                    {texto.formBtnAnterior}
                                </button>
                                <button type="submit" className="btn btn-success">
                                    {texto.formBtnEnviar}
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </section>

            <section className="container mb-5">
                <Text variant="h2" className="text-center mt-5">{texto.secaoIntegrantesTitulo}</Text>
                <Text variant="h3" className="text-center my-3">{texto.secaoIntegrantesSubtitulo1}</Text>
                <div className="mb-4">
                    {[texto.secaoIntegrantesParagrafo1,
                    texto.secaoIntegrantesParagrafo2,
                    texto.secaoIntegrantesParagrafo3,
                    texto.secaoIntegrantesParagrafo4,
                    texto.secaoIntegrantesParagrafo5,
                    texto.secaoIntegrantesParagrafo6,
                    texto.secaoIntegrantesParagrafo7].map((p, i) => (
                        <p className="mb-2" key={i}>{p}</p>
                    ))}
                </div>

                <Text variant="h3" className="text-center mt-5 mb-3">{texto.secaoIntegrantesSubtitulo2}</Text>
                <div className="integrantes-container">
                    {texto.integrantesAtuais.map((integrante, idx) => (
                        <div
                            className="integrante-card"
                            key={idx}
                        >
                            <div className="card shadow-sm h-100">
                                {integrante.nome && (
                                    <>
                                        <div className="d-flex justify-content-center">
                                            {integrante.github && integrante.github !== "#" ? (
                                                <img
                                                    src={`${integrante.github}.png`}
                                                    className="rounded-circle"
                                                    alt={`Foto integrante - ${integrante.nome}`}
                                                    width="128"
                                                    height="128"
                                                />
                                            ) : (
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${integrante.nome}&background=random&size=128`}
                                                    className="rounded-circle"
                                                    alt={`Foto integrante - ${integrante.nome}`}
                                                    width="128"
                                                    height="128"
                                                />
                                            )}
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <Text variant="h4" className="text-center">{integrante.nome}</Text>
                                            <Text>{integrante.descricao}</Text>
                                            <div className="mt-3 d-flex justify-content-center gap-3">
                                                {integrante.github && integrante.github !== "#" && (
                                                    <a href={integrante.github} target="_blank" rel="noreferrer" aria-label={`${integrante.nome} GitHub`}>
                                                        <FaGithub size="30" />
                                                    </a>
                                                )}
                                                {integrante.linkedin && integrante.linkedin !== "#" && (
                                                    <a href={integrante.linkedin} target="_blank" rel="noreferrer" aria-label={`${integrante.nome} LinkedIn`}>
                                                        <IoLogoLinkedin size="30" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <Text variant="h3" className="text-center mt-5 mb-3">{texto.secaoIntegrantesAntigosTitulo}</Text>
                <div className="integrantes-container">
                    {texto.integrantesAntigos.map((integrante, idx) => (
                        <div className="integrante-card" key={idx}>
                            <div className="card shadow-sm h-100 p-2">
                                {integrante.nome && (
                                    <>
                                        <div className="d-flex justify-content-center mt-3">
                                            {integrante.github && integrante.github !== "#" ? (
                                                <img
                                                    src={`${integrante.github}.png`}
                                                    className="rounded-circle"
                                                    alt={`Foto integrante - ${integrante.nome}`}
                                                    width="128"
                                                    height="128"
                                                />
                                            ) : (
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${integrante.nome}&background=random&size=128`}
                                                    className="rounded-circle"
                                                    alt={`Foto integrante - ${integrante.nome}`}
                                                    width="128"
                                                    height="128"
                                                />
                                            )}
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h4 className="card-title">{integrante.nome}</h4>
                                            <p className="card-text flex-grow-1">{integrante.descricao}</p>
                                            <div className="mt-3 d-flex justify-content-center gap-3">
                                                {integrante.github && integrante.github !== "#" && (
                                                    <a href={integrante.github} target="_blank" rel="noreferrer" aria-label={`${integrante.nome} GitHub`}>
                                                        <FaGithub size="30" />
                                                    </a>
                                                )}
                                                {integrante.linkedin && integrante.linkedin !== "#" && (
                                                    <a href={integrante.linkedin} target="_blank" rel="noreferrer" aria-label={`${integrante.nome} LinkedIn`}>
                                                        <IoLogoLinkedin size="30" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}