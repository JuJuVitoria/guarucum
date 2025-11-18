import { Text } from "@/components/shared/Text/Text";
import "./CardVenda.scss"
import { FaCalendarDays } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiWeightFill } from "react-icons/ri";
import { gerarSlug } from "@/utils/gerarSlug";

export function CardVenda({ sale, onViewDetails }) {
    const statusConfig = {
        finalizada: {
            label: "Finalizada",
            className: "bg-verde-es text-white border-verde-es"
        },
        pendente: {
            label: "Pendente",
            className: "bg-warning text-dark border-warning" // pode criar .bg-amber-es, etc, se desejar
        },
        cancelada: {
            label: "Cancelada",
            className: "bg-vermelho-es text-white border-vermelho-es"
        }
    };


    const statusInfo = statusConfig[sale.status];

    const formatDate = (dateString) => {
        const date = new Date(dateString + "T00:00:00");
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    const productImages = {
        "Castanha-do-Pará": "https://images.tcdn.com.br/img/img_prod/1002447/castanha_do_para_media_inteira_250g_1315_1_373561474293c75e065672b0bdc8b6cd.jpg",
        "Açaí": "https://images.pexels.com/photos/6741479/pexels-photo-6741479.jpeg",
        "Babaçu": "https://www.oceandrop.com.br/media/pdp-seo/blog-ocean/6-incriveis-beneficios-do-uso-de-oleo-de-babacu-para-a-pele.jpg",
        "Cupuaçu": "https://www.infoescola.com/wp-content/uploads/2009/09/cupuacu-18222400.jpg",
        "Buriti": "https://static.wixstatic.com/media/480088_801764772d7049309155b44b11a99889~mv2.jpg/v1/fill/w_326,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Buriti_AcervoISPN_Bento%20Viana.jpg",
        "Copaíba (Óleo)": "https://image.tuasaude.com/media/article/ks/li/copaiba_32258.jpg"
    };

    function getProductImage(product) {
        if (!product) return "/assets/img/products/placeholder.jpg";
        if (productImages[product]) return productImages[product];
        const slug = gerarSlug(product);
        return `/assets/img/products/${slug}.jpg`;
    }

    const imageSrc = getProductImage(sale.product);

    return (
        <div className="card-venda card shadow-sm mb-3">
            <div className="card-body p-4">
                <div className="d-flex flex-column flex-md-row gap-4">
                    {/* Imagem do Produto */}
                    <div className="flex-shrink-0">
                        <div className="rounded overflow-hidden bg-success bg-opacity-10 border border-success" style={{ width: "96px", height: "96px" }}>
                            <img
                                src={imageSrc}
                                alt={sale.product}
                                onError={(e) => { e.currentTarget.src = "/assets/img/products/placeholder.jpg"; }}
                                className="img-fluid h-100 w-100 object-fit-cover"
                            />
                        </div>
                    </div>

                    {/* Informações da Venda */}
                    <div className="flex-grow-1 d-flex flex-column justify-content-between">
                        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-3">
                            <div>
                                <Text variant="h5" className="mb-1">{sale.product}</Text>
                                <span className={`badge border ${statusInfo.className}`}>
                                    {statusInfo.label}
                                </span>
                            </div>
                            <div className="text-end">
                                <small className="opacity-75 d-block">Valor Total</small>
                                <span className="fw-bold">R$ {sale.totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-sm-4 d-flex align-items-center mb-3 mb-sm-0 gap-2">
                                <RiWeightFill />
                                <div>
                                    <small className="d-block opacity-75">Quantidade</small>
                                    <span>{sale.quantity} kg</span>
                                </div>
                            </div>

                            <div className="col-12 col-sm-4 d-flex align-items-center mb-3 mb-sm-0 gap-2">
                                <FaCalendarDays />
                                <div>
                                    <small className="d-block  opacity-75">Data</small>
                                    <span>{formatDate(sale.date)}</span>
                                </div>
                            </div>

                            <div className="col-12 col-sm-4 d-flex align-items-center gap-2">
                                <IoPerson />
                                <div>
                                    <small className="d-block opacity-75">Comprador</small>
                                    <span className="text-truncate d-block" style={{ maxWidth: "150px" }}>{sale.buyer}</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3 pt-3 mt-auto">
                            <div>
                                <small className="d-block opacity-75">Valor Unitário</small>
                                <span>R$ {sale.unitPrice.toFixed(2)}/kg</span>
                            </div>

                            <button
                                onClick={() => onViewDetails(sale)}
                                type="button"
                                className="botao ms-auto"
                            >
                                <FaEye />
                                Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}