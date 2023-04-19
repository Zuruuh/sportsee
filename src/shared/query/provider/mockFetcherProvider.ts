import type { FetchOptions, FetcherProvider } from '~/shared/query';
import type { URI } from '~/shared/types/URI';

export const fetcherProvider: FetcherProvider = () => {
  return {
    async fetch(
      url: string | URI | URL,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _options: FetchOptions = {}
    ): Promise<unknown> {
      const path = (url instanceof URL ? url : new URL(url)).pathname;

      if (/user\/\w+\/average-sessions/.test(path)) {
        return {
          data: {
            userId: 12,
            sessions: [
              {
                day: 1,
                sessionLength: 30,
              },
              {
                day: 2,
                sessionLength: 23,
              },
              {
                day: 3,
                sessionLength: 45,
              },
              {
                day: 4,
                sessionLength: 50,
              },
              {
                day: 5,
                sessionLength: 0,
              },
              {
                day: 6,
                sessionLength: 0,
              },
              {
                day: 7,
                sessionLength: 60,
              },
            ],
          },
        };
      }
    },
  };
};
