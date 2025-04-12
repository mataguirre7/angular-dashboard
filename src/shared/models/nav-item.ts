export interface NavItem {
  url: string;
  label: string;
  action: () => void;
  iconClass?: string;
}
