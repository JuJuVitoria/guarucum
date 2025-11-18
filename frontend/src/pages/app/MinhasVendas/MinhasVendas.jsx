import { CardVenda } from "./components/CardVenda/CardVenda";
import dataVendas from "@/data/vendas.json";
import { CardFiltro } from "./components/CardFiltro/CardFiltro";
import { useState } from "react";
import { Text } from "@/components/shared/Text/Text";
import { CardStatus } from "./components/CardStatus/CardStatus";
import { VerDetalhes } from "./components/VerDetalhes";
import { MainLayout } from "@/layout/app/MainLayout/MainLayout";

export const MinhasVendas = () => {
  const vendas = dataVendas;
  const [vendasFiltradas, setVendasFiltradas] = useState(vendas);
  const [selectedSale, setSelectedSale] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function onViewDetails(sale) {
    setSelectedSale(sale);
    setIsDialogOpen(true);
  }

  return (
    <MainLayout>
      <Text variant="h1" className="mt-3 mb-3">Minhas Vendas</Text>
      <Text variant="h2" className="mb-5">Visualize todas suas vendas.</Text>

      <CardStatus sales={vendasFiltradas} allSales={vendas} />

      <CardFiltro sales={vendas} onFilterChange={setVendasFiltradas} />

      {vendasFiltradas.map((venda) => (
        <CardVenda
          key={venda.id}
          sale={venda}
          onViewDetails={onViewDetails}
        />
      ))}

      <VerDetalhes
        sale={selectedSale}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </MainLayout>
  );
}