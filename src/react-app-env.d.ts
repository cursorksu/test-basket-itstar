// eslint-disable-next-line
/// <reference types="react-scripts" />

interface NavItem {
  id: string;
  value: string;
  link: string;
  dropdown: DropdownItem[];
}

interface DropdownItem {
  id: string;
  value: string;
  link: string;
}

interface Good {
  id: string;
  img: string;
  title: string;
  price: number;
  description: string;
}

interface PreparedGood extends Good{
  totalPrice: number;
  quantity: string | unknown;
}
