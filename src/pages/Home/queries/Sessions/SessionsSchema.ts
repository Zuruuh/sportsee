import type { N } from 'ts-toolbelt';
import { z } from 'zod';

export const WeekDay = z.enum(['L', 'M', 'J', 'V', 'S', 'D']);

export const SessionSchema = z.object({
  day: WeekDay,
  length: z.number(),
});

export type Session = z.infer<typeof SessionSchema>;

export const RawSessionSchema = z.object({
  day: z.number().min(1).max(7),
  sessionLength: z.number(),
});

export type RawSession = z.infer<typeof RawSessionSchema> & {
  day: N.Range<1, 7, '->'>[number];
};

export const SessionsQuerySchema = z.object({
  data: z.object({
    userId: z.number(),
    sessions: z.array(RawSessionSchema),
  }),
});

export type SessionQuery = z.infer<typeof SessionsQuerySchema> & {
  data: { sessions: RawSession[] };
};
