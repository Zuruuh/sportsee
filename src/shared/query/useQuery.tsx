import { useCallback, useState } from 'react';
import type { Query } from './Query';
import { z } from 'zod';
import { fetcherProvider } from './provider/fetcherProvider';

const fetcher = fetcherProvider();

interface BaseQueryOutput<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  isInitialized: boolean;
  doQuery: () => unknown;
}

type QueryOutput<T> =
  | BaseQueryOutput<T>
  | (BaseQueryOutput<T> & {
      isLoading: false;
      isError: false;
      isInitialized: true;
      data: T;
    });

export function useQuery<TQuery extends z.ZodTypeAny>(
  query: Query,
  schema: TQuery
): QueryOutput<z.infer<TQuery>> {
  type TData = z.infer<TQuery>;

  const [data, setData] = useState<TData | undefined>();
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const doQuery = useCallback(() => {
    setIsInitialized(true);
    setIsLoading(true);

    query(fetcher)
      .then(schema.safeParse)
      .then((result) => {
        setIsLoading(false);

        if (result.success) {
          setData(result.data);
        } else {
          console.error(result.error);
          setIsError(true);
        }
      });
  }, [query, schema]);

  return {
    data,
    isLoading,
    isError,
    isInitialized,
    doQuery,
  };
}
