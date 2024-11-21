import { useLocation } from "react-router-dom";
import NotificationButton from "./notification";
import ProfileButton from "./profile";
import { routeNames } from "../../routes/names/route";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex justify-between items-center pl-16 1280p:pl-10 pr-10 border-b border-black/20 bg-white">
      <h1 className="text-2xl text-header-text font-medium py-4">
        {routeNames[pathname as keyof typeof routeNames].name}
      </h1>
      <div className="flex">
        <NotificationButton />
        <ProfileButton />
      </div>
    </div>
  );
}

export default Header;
