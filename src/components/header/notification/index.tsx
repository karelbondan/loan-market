import { useState } from "react";
import { Icon } from "../../icon";
import DashboardNotificationCard from "../../cards/dashboard/notification";

function NotificationButton() {
  const [expanded, setexpanded] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex space-x-2 items-center p-2 md:border-l border-black/30"
        onClick={e => { e.preventDefault(); setexpanded(true) }}
      >
        <Icon name="bell" className="size-5" />
        <Icon name="chevron_down" className="size-3" />
      </button>
      <div className={`shadow-md border-2 absolute z-20 top-full right-0 md:left-1/2 md:-translate-x-1/2 min-w-fit rounded-lg overflow-y-auto ${expanded ? "translate-y-1 opacity-100 visible" : "opacity-0 invisible"} transition-all pointer-events-none`}>
        <DashboardNotificationCard />
      </div>
      <div
        className={`fixed z-10 top-0 bottom-0 left-0 right-0 bg-transparent ${expanded ? "opacity-100 visible" : "opacity-0 invisible"} transition-all`}
        onClick={_ => setexpanded(false)}
      />
    </div>
  );
}

export default NotificationButton;
