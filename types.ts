export interface NavItemDropdownItem {
  id: number;
  path: string;
  label: string;
  dropdown: {
    id: number;
    path: string;
    label?: string;
    title?: string;
    imagePath?: string;
  }[];
}
