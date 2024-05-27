export interface ICompany {
  items: ICompanyItem[];
  kind: string;
  page_number: number;
  total_results: number;
}

export interface ICompanyItem {
  address: IAddress;
  address_snippet: string;
  company_number: string;
  company_status: string;
  company_type: string;
  date_of_creation: string;
  description: string;
  description_identifier: string[];
  kind: string;
  links: ILinks;
  matches: IMatches;
  title: string;
}

export interface IAddress {
  address_line_1: string;
  country: string;
  locality: string;
  postal_code: string;
  premises: string;
}

export interface ILinks {
  self: string;
}

export interface IMatches {
  title: number[];
}
