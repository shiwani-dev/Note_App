function Profile({ user, onLogout }) {
  return (
    <div>
      <img src={`https://ui-avatars.com/api/?name=${user.name}`} />
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
export default Profile;