import { gerarSlug } from "@/shared/utils/gerarSlug";
import { Text } from "@/shared/components/Text/Text";
import { FaCalendarDays, FaDollarSign } from "react-icons/fa6";
import { FiPackage, FiFileText } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

export function VerDetalhes({ sale, open, onOpenChange }) {
    if (!sale) return null;

    const statusConfig = {
        finalizada: {
            label: "Finalizada",
            className: "bg-success text-success border-success text-white"
        },
        pendente: {
            label: "Pendente",
            className: "bg-warning text-warning border-warning text-white"
        },
        cancelada: {
            label: "Cancelada",
            className: "bg-danger text-danger border-danger text-white"
        }
    };

    const statusInfo = statusConfig[sale.status] || {
        label: sale.status,
        className: "bg-secondary text-secondary border-secondary"
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString + "T00:00:00");
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
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
        <div
            className={`modal fade${open ? " show d-block" : ""}`}
            tabIndex="-1"
            role="dialog"
            aria-modal={open ? "true" : "false"}
            aria-hidden={!open}
            onClick={() => onOpenChange(false)}
            style={{ backgroundColor: open ? "rgba(0,0,0,0.5)" : "transparent", backdropFilter: "blur(6px)" }}
        >
            <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
                onClick={e => e.stopPropagation()}
            >
                <div
                    className="modal-content border-2 bg-gradient"
                    style={{ backgroundImage: "linear-gradient(to bottom right, #d1fae5, #bbf7d0)", border: "2px solid #9e1a1a" }}
                >
                    <div className="modal-header">
                        <Text variant="h5" className="modal-title">
                            Detalhes da Venda
                        </Text>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => onOpenChange(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex gap-4 mb-4">
                            <div
                                className="w-32 h-32 rounded overflow-hidden bg-white border border-success flex-shrink-0"
                                style={{ width: "128px", height: "128px" }}
                            >
                                <img src={imageSrc} alt={sale.product} className="img-fluid h-100 w-100 object-fit-cover" />
                            </div>
                            <div className="flex-grow-1">
                                <Text variant="h3" className="mb-2">
                                    {sale.product}
                                </Text>
                                <span className={`badge border ${statusInfo.className}`}>{statusInfo.label}</span>
                                {sale.description && (
                                    <div className="mt-4">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <FiFileText />
                                            <Text className="mb-0 small">Descrição</Text>
                                        </div>
                                        <Text>{sale.description}</Text>
                                    </div>
                                )}
                            </div>
                        </div>

                        <hr className="border-success" />

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="d-flex align-items-start gap-3 mb-3">
                                    <FiPackage />
                                    <div>
                                        <Text className="mb-1 small">Quantidade</Text>
                                        <Text variant="h5">{sale.quantity} kg</Text>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3 mb-3">
                                    <FaDollarSign />
                                    <div>
                                        <Text className="mb-1 small">Valor Unitário</Text>
                                        <Text variant="h5">R$ {sale.unitPrice.toFixed(2)}/kg</Text>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3">
                                    <FaDollarSign />
                                    <div>
                                        <Text className="mb-1 small">Valor Total</Text>
                                        <Text variant="h5">R$ {sale.totalPrice.toFixed(2)}</Text>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="d-flex align-items-start gap-3 mb-3">
                                    <FaCalendarDays />
                                    <div>
                                        <Text className="mb-1 small">Data da Venda</Text>
                                        <Text variant="h5">{formatDate(sale.date)}</Text>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3 mb-3">
                                    <IoPerson />
                                    <div>
                                        <Text className="mb-1 small">Comprador</Text>
                                        <Text variant="h5">{sale.buyer}</Text>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3">
                                    <FiFileText />
                                    <div>
                                        <Text className="mb-1 small">ID da Venda</Text>
                                        <Text variant="h5" className="font-monospace">#{sale.id}</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}