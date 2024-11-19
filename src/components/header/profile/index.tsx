import { Icon } from "../../icon";

function ProfileButton() {
  const name = "yohannes affandy";
  return (
    <button className="flex items-center space-x-4 px-4 border border-transparent border-r-black/30">
      <p className="text-sm text-black/60">{name.toUpperCase()}</p>
      <Icon name="chevron_down" className="size-3" />
    </button>
  );
}

export default ProfileButton;
