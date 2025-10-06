import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const user = {
  name: 'Julia',
  email: 'juliavitoriadaluz5@gmail.com',
  password: '1234',
};

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      setMessage(`Conta criada para ${form.name}. Faça login agora.`);
      setIsRegistering(false);
      setForm({ name: "", email: "", password: "" });
    } else {
      if (form.email === user.email && form.password === user.password) {
        // Salva token fictício e redireciona
        localStorage.setItem('token', 'token-fake');
        navigate('/app/dashboard');
      } else {
        setMessage("Email ou senha incorretos.");
      }
    }
  };

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center p-3">
      <div className="card rounded-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <ul className="nav nav-pills mb-4 justify-content-center">
            <li className="nav-item">
              <button
                className={`nav-link fw-bold ${!isRegistering ? "active" : ""}`}
                onClick={() => setIsRegistering(false)}
                type="button"
              >
                Entrar
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link fw-bold ${isRegistering ? "active" : ""}`}
                onClick={() => setIsRegistering(true)}
                type="button"
              >
                Cadastrar
              </button>
            </li>
          </ul>
          <h2 className="text-center mb-3">{isRegistering ? "Criar Conta" : "Bem-vindo ao GUARUCUM"}</h2>
          <p className="text-center text-muted mb-4">
            {isRegistering ? "Preencha seus dados para começar" : "Acesse seu painel"}
          </p>
          <form onSubmit={handleSubmit}>
            {isRegistering && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Seu nome completo"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="seuemail@exemplo.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Sua senha"
                required
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mb-3">
              {isRegistering ? "Cadastrar" : "Entrar"}
            </button>
          </form>
          <div className="text-center mb-3 text-danger">{message}</div>
          <div className="text-center">
            {isRegistering ? "Já tem uma conta?" : "Não tem uma conta?"}
            <button
              className="btn btn-link fw-bold"
              onClick={() => {
                setIsRegistering(!isRegistering);
                setMessage("");
              }}
              type="button"
            >
              {isRegistering ? "Faça Login" : "Cadastre-se"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
