import React, { useState } from "react";
import "./Auth.scss";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import UserData from "@/data/user.json";
import { SimpleLayout } from "@/layout/SimpleLayout/SimpleLayout";

export const Auth = () => {
  const { login } = useUser();
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const mockUser = UserData;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Cadastro Simulado ---
    if (isRegistering) {
      setMessage(`Conta criada para ${form.name}. Faça login agora.`);
      setIsRegistering(false);

      setForm({ name: "", email: "", password: "" });
      return;
    }

    // --- Login ---
    if (form.email === mockUser.email && form.password === mockUser.password) {
      login({ name: mockUser.name, email: mockUser.email });
      navigate("/app/dashboard");
    } else {
      setMessage("Email ou senha incorretos.");
    }
  };

  return (
    <SimpleLayout>
      <div className="d-flex vh-100 justify-content-center align-items-center px-3 pt-5">
        <div className="card rounded-4 w-100" style={{ maxWidth: "400px" }}>
          <div className="card-body">

            {/* Alternar Tabs */}
            <ul className="nav nav-pills mb-4 justify-content-center">
              <li className="nav-item">
                <button
                  className={`nav-link fw-bold ${!isRegistering ? "active" : ""}`}
                  type="button"
                  onClick={() => {
                    setIsRegistering(false);
                    setMessage("");
                  }}
                >
                  Entrar
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link fw-bold ${isRegistering ? "active" : ""}`}
                  type="button"
                  onClick={() => {
                    setIsRegistering(true);
                    setMessage("");
                  }}
                >
                  Cadastrar
                </button>
              </li>
            </ul>

            <h2 className="text-center mb-3">
              {isRegistering ? "Criar Conta" : "Bem-vindo ao GUARUCUM"}
            </h2>

            <p className="text-center text-muted mb-4">
              {isRegistering ? "Preencha seus dados para começar" : "Acesse seu painel"}
            </p>

            {/* Formulário */}
            <form onSubmit={handleSubmit}>
              
              {/* Campo Nome (Somente no cadastro) */}
              {isRegistering && (
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Seu nome completo"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              )}

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="seuemail@exemplo.com"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* Senha */}
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Sua senha"
                  required
                  autoComplete={isRegistering ? "new-password" : "current-password"}
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-success w-100 mb-3">
                {isRegistering ? "Cadastrar" : "Entrar"}
              </button>
            </form>

            {/* Mensagem */}
            <div className="text-center mb-3 text-danger">{message}</div>

            {/* Alternar cadastro / login */}
            <div className="text-center">
              {isRegistering ? "Já tem uma conta?" : "Não tem uma conta?"}
              <button
                type="button"
                className="btn btn-link fw-bold"
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setMessage("");
                }}
              >
                {isRegistering ? "Faça Login" : "Cadastre-se"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};