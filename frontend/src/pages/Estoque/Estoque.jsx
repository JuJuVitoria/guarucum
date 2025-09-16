import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import TabelaEstoque from "../../components/TabelaEstoque";
import FormEstoque from "../../components/FormEstoque/FormEstoque";
import { produtos as dadosMock } from "../../data/estoque";

export default function Estoque() {
  const [produtos, setProdutos] = useState(dadosMock);
  const [produtoEditando, setProdutoEditando] = useState(null);

  function handleSalvar(produto) {
    if (produto.id) {
      setProdutos((prev) =>
        prev.map((p) => (p.id === produto.id ? produto : p))
      );
    } else {
      setProdutos((prev) => [
        ...prev,
        { ...produto, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
      ]);
    }
    setProdutoEditando(null);
  }

  function handleEditar(produtoId) {
    const produto = produtos.find((p) => p.id === produtoId);
    setProdutoEditando(produto);
  }

  function handleExcluir(produtoId) {
    setProdutos((prev) => prev.filter((p) => p.id !== produtoId));
  }

  return (
    <MainLayout>
      <h1 className="text-center my-4">Seu estoque</h1>

      <hr />

      <FormEstoque onSalvar={handleSalvar} produtoEditando={produtoEditando} />
      <TabelaEstoque
        produtos={produtos}
        onEditar={handleEditar}
        onExcluir={handleExcluir}
      />
    </MainLayout>
  );
}
