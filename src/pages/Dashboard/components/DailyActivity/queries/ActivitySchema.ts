import { z } from 'zod';

export const ActivitySchema = z.object({
  data: z.object({
    userId: z.number(),
    sessions: z.array(
      z.object({
        day: z.coerce.date(),
        kilogram: z.number(),
        calories: z.number(),
      })
    ),
  }),
});
