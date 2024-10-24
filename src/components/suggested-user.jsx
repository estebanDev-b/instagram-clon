const SuggestedUser = ({ user }) => (
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center">
      <img
        src={user.image}
        alt={user.username}
        className="w-8 h-8 rounded-full mr-3 object-cover"
      />
      <div>
        <p className="text-sm font-semibold">{user.username}</p>
        <p className="text-xs text-gray-500">{user.status}</p>
      </div>
    </div>
    <button className="text-xs font-semibold text-blue-500">Seguir</button>
  </div>
);

export default SuggestedUser;
