export interface Package {
  brand: string;
  description: string;
  image: ImageObject;
  is_quick_ship: boolean;
  items: Item[];
  popularity: string | null;
  prices: Prices;
  rebates: Rebates;
  series: string;
  sku: string;
  tag: string;
  url: string;
}

export interface ImageObject {
  alt: string;
  extension: string;
  filename: string;
  folder: string;
  fully_qualified_url: string;
  height: string | null;
  label: string;
  original_filename: string;
  original_path: string;
  url: string | null;
  width: string | null;
}

export interface Item {
  sku: string;
  title: string;
  "~product_type": string;
}

export interface Prices {
  final: number;
  list_price: number;
}

export interface Rebates {
  instant_amount: number;
  mailin_amount: number;
}
