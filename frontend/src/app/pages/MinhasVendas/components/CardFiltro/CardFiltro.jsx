import { Text } from "@/shared/components/Text/Text";
import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

export function CardFiltro({ sales, onFilterChange }) {
  const [selectedProduct, setSelectedProduct] = useState("todos");
  const [selectedStatus, setSelectedStatus] = useState("todos");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const uniqueProducts = Array.from(new Set(sales.map(s => s.product))).sort();

  useEffect(() => {
    let filtered = [...sales];

    if (selectedProduct !== "todos") {
      filtered = filtered.filter(s => s.product === selectedProduct);
    }

    if (selectedStatus !== "todos") {
      filtered = filtered.filter(s => s.status === selectedStatus);
    }

    if (startDate) {
      filtered = filtered.filter(s => s.date >= startDate);
    }

    if (endDate) {
      filtered = filtered.filter(s => s.date <= endDate);
    }

    onFilterChange(filtered);
  }, [selectedProduct, selectedStatus, startDate, endDate, sales, onFilterChange]);

  return (
    <div className="card mb-4 bg-white" style={{ backdropFilter: "blur(6px)", borderColor: "#9e1a1a" }}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3 gap-2">
          <FaFilter className="" size={20} />
          <Text variant="h2">Filtrar Vendas</Text>
        </div>

        <div className="row g-3">
          {/* Produto */}
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="product-filter" className="form-label">
              Produto
            </label>
            <select
              id="product-filter"
              className="form-select bg-white"
              value={selectedProduct}
              onChange={e => setSelectedProduct(e.target.value)}
            >
              <option value="todos">Todos os produtos</option>
              {uniqueProducts.map(product => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          {/* Situação */}
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="status-filter" className="form-label">
              Situação
            </label>
            <select
              id="status-filter"
              className="form-select bg-white"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
            >
              <option value="todos">Todas as situações</option>
              <option value="finalizada">Finalizada</option>
              <option value="pendente">Pendente</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>

          {/* Data Inicial */}
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="start-date" className="form-label">
              Data Inicial
            </label>
            <input
              id="start-date"
              type="date"
              className="form-control bg-white"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </div>

          {/* Data Final */}
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="end-date" className="form-label">
              Data Final
            </label>
            <input
              id="end-date"
              type="date"
              className="form-control bg-white"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}