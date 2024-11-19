import { ComponentProps, PropsWithChildren } from "react";

export interface SidebarButtonsProps extends PropsWithChildren {
  icon: string;
  name: string;
  path: string;
}

export interface IconProps extends ComponentProps<"svg"> {
  name: string;
}

export type ProfileCardProps = {
  name: string;
  id: string;
  profile_photo: string; // url 
  office: string;
  email: string;
  phone: number;
}

export type ClientCardProps = {
  icon: string;
  name: string;
  count: number;
}

export type NotificationCardProps = {
  title: string;
  initiator: string;
  type: string;
  platform: string;
  timestamp: string;
}

export type NotificationProps = {
  content: NotificationCardProps;
  index: number;
  length: number;
}