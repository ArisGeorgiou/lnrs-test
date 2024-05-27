export interface IOfficers {
  active_count: number;
  etag: string;
  items: IOfficersItem[];
  items_per_page: number;
  kind: string;
  links: any;
  resigned_count: number;
  total_results: number;
}

export interface IOfficersItem {
  address: IOfficerAddress;
  appointed_on: string;
  links: IOfficersLinks;
  name: string;
  nationality: string;
  occupation: string;
  officer_role: string;
}

export interface IOfficersLinks {
  self: string;
}

export interface IOfficerAddress {
  address_line_1: string;
  country: string;
  locality: string;
  postal_code: string;
  premises: string;
}
