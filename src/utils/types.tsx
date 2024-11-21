import { ComponentProps, PropsWithChildren } from "react";

export interface SidebarButtonsProps extends PropsWithChildren {
  icon: string;
  name: string;
  path: string;
  currentPath: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
  barHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IconProps extends ComponentProps<"svg"> {
  name: string;
}

export interface GeneralInputProps extends ComponentProps<"input">, PropsWithChildren {
  labelLoc?: "top" | "left";
}

export interface CheckboxProps extends ComponentProps<"input">, PropsWithChildren {
  onValueChange?: (checked: boolean) => void;
  checked?: boolean;
}

export interface DropdownProps extends ComponentProps<"div">, PropsWithChildren {
  labelLoc?: "top" | "left";
  placeholder?: string;
  selections: WilayahDotIdResponse[];
  onValueChange: (value: WilayahDotIdResponse) => void;
  value?: string;
}

export interface UploadDocumentSectionProps extends PropsWithChildren {
  title: string
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

export type AppHeaderDotsProps = {
  name: string;
  filled: boolean;
  isCurrent: boolean;
  last: boolean;
}

export interface AlamatFormProps {
  title: string;
  dataWilayah: WilayahData;
  updateWilayah: (
    type: "regencies" | "districts" | "villages",
    untuk: "ktp" | "domicile" | "work",
    code: string
  ) => void;
  dataAlamat: AlamatFormDataExtension;
  dataKtp?: AlamatFormDataExtension;
  updateAlamat: React.Dispatch<React.SetStateAction<AlamatFormDataExtension>>;
  handleChange: (
    value: WilayahDotIdResponse,
    data: AlamatFormDataExtension,
    update: React.Dispatch<React.SetStateAction<AlamatFormDataExtension>>,
    type: "kelurahan" | "kecamatan" | "kota" | "provinsi"
  ) => void;
  formFor: "ktp" | "domicile" | "work",
}

export class AlamatFormDataAlamat {
  alamat: string = "";
  kelurahan: WilayahDotIdResponse | null = null;
  kecamatan: WilayahDotIdResponse | null = null;
  kota: WilayahDotIdResponse | null = null;
  provinsi: WilayahDotIdResponse | null = null;
  kodePos: number = 0;
}

export class AlamatFormDataExtension {
  detailAlamat: AlamatFormDataAlamat = new AlamatFormDataAlamat();
  alamatSesuaiKTP?: boolean = false;
}


export class WilayahDotIdResponse {
  code: string = "";
  name: string = "";
}

export class WilayahFormData {
  ktp: { data: WilayahDotIdResponse[] } | null = null;
  domicile: { data: WilayahDotIdResponse[] } | null = null;
  work: { data: WilayahDotIdResponse[] } | null = null;
}

export class WilayahData {
  provinces: WilayahDotIdResponse[] = [];
  regencies: WilayahFormData = new WilayahFormData();
  districts: WilayahFormData = new WilayahFormData();
  villages: WilayahFormData = new WilayahFormData();
}