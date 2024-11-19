import { useLocation } from "react-router-dom";
import NotificationButton from "./notification";
import ProfileButton from "./profile";
import { formatPathname } from "../../utils/funcs";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex justify-between items-center py-3 px-10 min-h-5 border-b border-black/20 bg-white">
      <h1 className="text-2xl text-header-text font-medium">
        {pathname === "/" ? "Dashboard" : formatPathname(pathname)}
      </h1>
      <div className="flex">
        <NotificationButton />
        <ProfileButton />
      </div>
    </div>
  );
}

export default Header;
