export interface IMenu {
  label: string;
  path: string;
  sub_menu?: Array<{
    label: string;
    path: string;
  }>;
}

export interface IMain {
  title: string;
  description: string;
}

export type GroupProducts = 'All' | 'Bed' | 'Sofa' | 'Light' | 'Chair';

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  discount?: string | number;
  amount: number;
  url_image: string;
  sale?: number | string;
  group?: GroupProducts;
}

export type SlideCustomer = {
  id: number | string;
  name: string;
  url_image: string;
  date: string;
  evaluate?: number;
};

export interface ICustomers {
  name: string;
  description: string;
  big_url_image: string;
  slide_customer: Array<SlideCustomer>;
}
