function UserCardComponent({ usuario }) {
  return (
    <li className="user-card">
      <span className="user-card-name">{usuario.name}</span>
      <span className="user-card-username">@{usuario.username}</span>
      <span className="user-card-email">{usuario.email}</span>
    </li>
  );
}

export default UserCardComponent;