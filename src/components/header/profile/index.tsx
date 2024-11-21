import { useState } from "react";
import { profileInfo } from "../../../dummy/profile";
import { Icon } from "../../icon";

function ProfileButton() {
  const [expanded, setexpanded] = useState(false);
  const { name } = profileInfo;
  return (
    <div className="relative">
      <button
        className="hidden md:flex items-center space-x-4 px-4 border-r border-l border-black/30 h-full"
        onClick={e => { e.preventDefault(); setexpanded(true); }}
      >
        <p className="text-sm text-black/60">{name.toUpperCase()}</p>
        <Icon name="chevron_down" className="size-3" />
      </button>
      <div
        className={`border-2 bg-white shadow-md w-full absolute z-20 top-full right-0 md:left-1/2 md:-translate-x-1/2 min-w-fit rounded-lg overflow-y-auto ${expanded ? "translate-y-1 opacity-100 visible" : "opacity-0 invisible"} transition-all`}
      >
        <button className="flex p-3 w-full space-x-3 items-center hover:bg-gray-200 transition-all">
          <Icon name="logout" className="size-6" />
          <span>Logout</span>
        </button>
      </div>
      <div
        className={`fixed z-10 top-0 bottom-0 left-0 right-0 bg-transparent ${expanded ? "opacity-100 visible" : "opacity-0 invisible"} transition-all`}
        onClick={_ => setexpanded(false)}
      />
    </div>
  );
}

export default ProfileButton;
