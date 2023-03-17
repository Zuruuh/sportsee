import type { FetcherInterface } from '~/shared/query/Fetcher';

export type WrappedQuery<T = undefined> = (
  fetcher: FetcherInterface,
  options: T
) => Promise<unknown>;
