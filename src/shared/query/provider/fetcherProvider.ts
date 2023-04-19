import type { FetchOptions, FetcherProvider } from '~/shared/query';
import type { URI } from '~/shared/types/URI';

// To provide a different implementation, you can mock this file during testing and provide any object that implements the FetcherInterface contract
export const fetcherProvider: FetcherProvider = () => ({
  async fetch(
    url: string | URI | URL,
    options: FetchOptions = {}
  ): Promise<unknown> {
    return (await window.fetch(url, options)).json();
  },
});
