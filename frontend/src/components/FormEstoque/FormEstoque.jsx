import { useState, useEffect } from "react";

export default function FormEstoque({ onSalvar, produtoEditando }) {
  const [formData, setFormData] = useState({
    id: null,
    item: "",
    categoria: "",
    quantidade: "",
    validade: "",
    unidade: "",
    ultimaEntrada: "",
    status: "Disponível",
  });

  useEffect(() => {
    if (produtoEditando) {
      setFormData(produtoEditando);
    } else {
      setFormData({
        id: null,
        item: "",
        categoria: "",
        quantidade: "",
        validade: "",
        unidade: "",
        ultimaEntrada: "",
        status: "Disponível",
      });
    }
  }, [produtoEditando]);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar(formData);
    setFormData({
      id: null,
      item: "",
      categoria: "",
      quantidade: "",
      validade: "",
      unidade: "",
      ultimaEntrada: "",
      status: "Disponível",
    });
  }

  return (
    <div className="card shadow-sm border-0 rounded-3 p-4 mb-3 flex-grow-1">
      <h3 className="text-center mb-4">
        {formData.id ? "Editar Produto" : "Adicionar Produto"}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-wrap justify-content-center align-items-center gap-3"
      >
        <div className="d-flex flex-column">
          <label className="form-label">Item</label>
          <input
            type="text"
            id="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="Item"
            className="form-control"
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Categoria</label>
          <input
            type="text"
            id="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Categoria"
            className="form-control"
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            placeholder="Quantidade"
            className="form-control"
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Validade</label>
          <input
            type="date"
            id="validade"
            value={formData.validade}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Unidade</label>
          <select
            id="unidade"
            value={formData.unidade}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Unidade</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="un">un</option>
            <option value="L">L</option>
          </select>
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Última Entrada</label>
          <input
            type="date"
            id="ultimaEntrada"
            value={formData.ultimaEntrada}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Status</label>
          <select
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="Disponível">Disponível</option>
            <option value="Esgotado">Esgotado</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-sm">
            {formData.id ? "Salvar Alterações" : "Adicionar"}
          </button>
        </div>
      </form>
    </div>
  );
}