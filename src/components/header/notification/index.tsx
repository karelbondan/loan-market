import { Icon } from "../../icon";

function NotificationButton() {
  return (
    <button className="flex space-x-2 items-center border p-2 border-black/30 border-t-0 border-b-0">
      <Icon name="bell" />
      <Icon name="chevron_down" />
    </button>
  );
}

export default NotificationButton;
