import { useUser } from "@/context/userContext";
import { SimpleLayout } from "@/layout/SimpleLayout/SimpleLayout";
import { Link } from "react-router-dom";

export const Error403 = () => {
    const { currentUser } = useUser();

    const destinationPath = currentUser ? "/dashboard" : "/";

    return (
        <SimpleLayout>
            <div className="custom-bg text-dark">
                <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">403</h1>
                        <p className="fs-2 fw-medium mt-4">Acesso negado</p>
                        <p className="mt-4">Você precisa estar logado para visualizar esta página.</p>
                        <p className="mb-5">Se você acha que isso é um erro, entre em contato com o suporte.</p>

                        <Link
                            to={destinationPath}
                            className="btn btn-outline-dark fw-semibold rounded-pill px-4 py-2 custom-btn"
                        >
                            {currentUser ? "Ir para o Dashboard" : "Ir para a Página Inicial"}
                        </Link>

                    </div>
                </div>
            </div>
        </SimpleLayout>
    );
}