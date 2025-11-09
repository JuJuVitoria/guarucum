import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { Text } from "@/shared/components/Text/Text";

export function CardStatus({ sales, allSales }) {
    const totalSales = sales.filter(s => s.status === "finalizada").length;
    const totalValue = sales
        .filter(s => s.status === "finalizada")
        .reduce((sum, sale) => sum + sale.totalPrice, 0);

    const productCounts = {};
    allSales.forEach(sale => {
        if (sale.status === "finalizada") {
            productCounts[sale.product] = (productCounts[sale.product] || 0) + sale.quantity;
        }
    });

    const mostSoldProduct = Object.entries(productCounts).sort((a, b) => b[1] - a[1])[0];

    return (
        <div className="row g-3 mb-4">
            <div className="col-12 col-md-4">
                <div className="card text-white bg-success shadow">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <Text variant="h4" className="mb-0">Total de Vendas</Text>
                            <IoIosTrendingUp size={30}/>
                        </div>
                        <Text className="display-5 text-truncate">{totalSales}</Text>
                        <Text className="mb-0">vendas finalizadas</Text>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="card text-white bg-info shadow">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <Text variant="h4" className="mb-0">Valor Total</Text>
                            <FaDollarSign size={30}/>
                        </div>
                        <Text className="display-5 text-truncate">R$ {totalValue.toFixed(2)}</Text>
                        <Text className="mb-0">em vendas realizadas</Text>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="card text-white bg-warning shadow">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <Text variant="h4" className="mb-0">Produto Mais Vendido</Text>
                            <FiPackage size={30}/>
                        </div>
                        <Text className="display-5 text-truncate">{mostSoldProduct ? mostSoldProduct[0] : "-"}</Text>
                        <Text className="mb-0">{mostSoldProduct ? `${mostSoldProduct[1]} unidades` : "nenhuma venda"}</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}