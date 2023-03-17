import type { FetcherInterface } from './Fetcher';

export type Query = (fetcher: FetcherInterface) => Promise<unknown>;
