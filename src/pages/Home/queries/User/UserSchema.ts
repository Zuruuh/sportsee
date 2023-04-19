import { z } from 'zod';

const BaseUserSchema = z.object({
  id: z.number(),
  userInfos: z.object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
  }),
  keyData: z.object({
    calorieCount: z.number(),
    proteinCount: z.number(),
    carbohydrateCount: z.number(),
    lipidCount: z.number(),
  }),
});

export const UserSchema = z.union([
  BaseUserSchema.merge(z.object({ score: z.number() })),
  BaseUserSchema.merge(z.object({ todayScore: z.number() })),
]);

export type User = z.infer<typeof UserSchema>;

export const UserQuerySchema = z.object({
  data: UserSchema,
});
