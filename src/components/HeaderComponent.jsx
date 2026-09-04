function HeaderComponent({ titulo = "Catálogo de Usuários" }) {
  return (
    <header className="header-container">
      <h1>{titulo}</h1>
    </header>
  );
}

export default HeaderComponent;