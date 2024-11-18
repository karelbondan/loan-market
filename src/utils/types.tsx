import { ComponentProps, PropsWithChildren } from "react";

export interface SidebarButtonsProps extends PropsWithChildren {
  icon: string;
  name: string;
  path: string;
}

export interface IconProps extends ComponentProps<"svg"> {
  name: string;
}
