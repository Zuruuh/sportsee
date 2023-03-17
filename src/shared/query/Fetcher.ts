import type { URI } from '~/shared/types/URI';

export interface FetchOptions {
  method?: string;
}

export interface FetcherInterface {
  fetch(url: string | URI, options?: FetchOptions): Promise<unknown>;
}
