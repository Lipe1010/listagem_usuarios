import { useEffect, useState } from "react";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";
import "./App.css";

const filtrarUsuarioPorTermo = (termo) => (usuario) => {
  const termoLower = termo.toLowerCase();
  return (
    usuario.name.toLowerCase().includes(termoLower) ||
    usuario.username.toLowerCase().includes(termoLower) ||
    usuario.email.toLowerCase().includes(termoLower)
  );
};

function App() {
  const url = "https://jsonplaceholder.typicode.com";
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState("");

  const usuariosFiltrados = usuarios.filter(filtrarUsuarioPorTermo(busca));

  async function buscarUsuarios() {
    try {
      setCarregando(true);
      const response = await axios.get(`${url}/users`);
      setUsuarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      setError(`Não foi possível carregar os usuários. Código: ${error.message}`);
      setUsuarios([]);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarUsuarios();
  }, []);

  return (
    <div className="container">
      <HeaderComponent />

      <input
        type="text"
        className="search-input"
        placeholder="Buscar por nome, @username ou e-mail..."
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      {carregando && <LoadingComponent />}

      {error && <div className="error-message">{error}</div>}

      {!carregando && !error && (
        <>
          <p className="result-count">
            {usuariosFiltrados.length} usuário(s) encontrado(s)
          </p>
          <UserListComponent usuarios={usuariosFiltrados} />
        </>
      )}
    </div>
  );
}

export default App;