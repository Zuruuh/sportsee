import type { FetchOptions, FetcherInterface } from '~/shared/query/Fetcher';
import type { URI } from '~/shared/types/URI';

// To provide a different implementation, you can mock this file during testing and provide any object that implements the FetcherInterface contract
export function fetcherProvider(): FetcherInterface {
  return {
    async fetch(
      url: string | URI,
      options: FetchOptions = {}
    ): Promise<unknown> {
      return (await window.fetch(url, options)).json();
    },
  };
}
