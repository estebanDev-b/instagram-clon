import SuggestedUser from "./suggested-user";
import { suggestedUsers } from "../assets/data.js";

const Suggestions = () => (
  <div className="hidden lg:block">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-semibold text-gray-500">
        Sugerencias para ti
      </span>
      <a href="#" className="text-xs font-semibold">
        Ver todo
      </a>
    </div>
    {suggestedUsers.map((user) => (
      <SuggestedUser key={user.id} user={user} />
    ))}
  </div>
);

export default Suggestions;
