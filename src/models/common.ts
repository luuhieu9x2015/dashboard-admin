export interface PaginationParams {
  page: number;
  perpage?: number;
  total_page?: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  page?: number;
  perpage?: number;
  total_page?: number;
  name?: string;
  sort?: string;
  order?: 'asc' | 'desc';

  [key: string]: any;
}
