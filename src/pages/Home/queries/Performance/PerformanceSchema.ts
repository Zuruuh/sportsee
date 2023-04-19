import { z } from 'zod';

export const PerformanceSchema = z.object({
  data: z.object({
    userId: z.number(),
    kind: z.record(z.coerce.number().min(1).max(6), z.string()),
    data: z.array(z.object({ value: z.number(), kind: z.number() })),
  }),
});
