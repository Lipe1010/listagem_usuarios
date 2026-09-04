function LoadingComponent({ mensagem = "Carregando usuários..." }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <span>{mensagem}</span>
    </div>
  );
}

export default LoadingComponent;