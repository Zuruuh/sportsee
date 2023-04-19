import { FetcherInterface } from '~/shared/query/Fetcher';
import { WrappedQuery } from '~/shared/query/WrappedQuery';

export const ActivityQuery: WrappedQuery<{ userId: number }> = (
  fetcher: FetcherInterface,
  options
): Promise<unknown> => {
  return fetcher.fetch(
    import.meta.env.VITE_API_URL + `/user/${options.userId}/activity`
  );
};
