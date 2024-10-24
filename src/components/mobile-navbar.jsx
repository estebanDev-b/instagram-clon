import { Home, Search, Film, PlusSquare, User } from "lucide-react";

const MobileNavbar = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-2 md:hidden">
    <div className="flex justify-around">
      <a href="#">
        <Home className="w-6 h-6" />
      </a>
      <a href="#">
        <Search className="w-6 h-6" />
      </a>
      <a href="#">
        <PlusSquare className="w-6 h-6" />
      </a>
      <a href="#">
        <Film className="w-6 h-6" />
      </a>
      <a href="#">
        <User className="w-6 h-6" />
      </a>
    </div>
  </div>
);

export default MobileNavbar;
