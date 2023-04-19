import { z } from 'zod';
import type { FetcherInterface } from './Fetcher';
import type { WrappedQuery } from './WrappedQuery';
import { type QueryOutput, useQuery } from '~/shared/query/useQuery';
import { useMemo } from 'react';

export const useWrappedQuery = <
  TOptions extends object,
  TSchema extends z.ZodTypeAny
>(
  query: WrappedQuery<typeof options>,
  options: TOptions,
  schema: TSchema
): QueryOutput<z.infer<TSchema>> => {
  const doQuery = useMemo(
    () => (fetcher: FetcherInterface) => query(fetcher, options),
    [query, options]
  );

  return useQuery(doQuery, schema);
};
