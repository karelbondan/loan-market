import { useLocation, useNavigate } from "react-router-dom";
import { SidebarButtonsProps } from "../../../utils/types";
import { Icon } from "../../icon";
import { useState } from "react";
import { formatPathname } from "../../../utils/funcs";

function SidebarButtons(props: SidebarButtonsProps) {
  const [expand, setExpand] = useState(false);
  const { icon, name, path, children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const currentPath = pathname === "/" ? "Dashboard" : formatPathname(pathname);
  const doHighlight = currentPath.toLowerCase() === name.toLowerCase();

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: "route" | "expand"
  ) {
    e.preventDefault();
    if (type === "route") {
      navigate(path);
    } else {
      setExpand(!expand);
    }
  }

  return (
    <div>
      <button
        className={`flex justify-between items-center w-full ${
          doHighlight
            ? "bg-primary-blue hover:bg-primary-blue/80 text-white"
            : "hover:bg-black/10 text-sidebar-text"
        } p-3 rounded-lg text-left font-medium`}
        onClick={(e) => handleClick(e, children ? "expand" : "route")}
      >
        <div className="flex space-x-4">
          <Icon
            name={icon}
            color={doHighlight ? "white" : "black"}
            className="size-6"
          />
          <p>{name}</p>
        </div>
        {children && (
          <Icon
            name="chevron_down"
            className={`size-3 ${
              expand ? "-rotate-180" : ""
            } transition-all duration-300`}
          />
        )}
      </button>
      <div
        className={`${
          expand ? "max-h-[200px]" : "max-h-0"
        } overflow-clip transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
}

export default SidebarButtons;
