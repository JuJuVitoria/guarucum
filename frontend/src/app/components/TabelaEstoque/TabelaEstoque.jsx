export default function TabelaEstoque({ produtos, onEditar, onExcluir }) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Item</th>
          <th>Categoria</th>
          <th>Quantidade</th>
          <th>Validade</th>
          <th>Unidade</th>
          <th>Última Entrada</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((p) => (
          <tr key={p.id}>
            <td>{p.item}</td>
            <td>{p.categoria}</td>
            <td>{p.quantidade}</td>
            <td>{p.validade}</td>
            <td>{p.unidade}</td>
            <td>{p.ultimaEntrada}</td>
            <td>{p.status}</td>
            <td className="d-flex gap-4">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => onEditar(p.id)}
              >
                Editar
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onExcluir(p.id)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}