import { z } from 'zod';

export const outroEmailSchema = z.object({
  verificationCode: z.string(),
});

export type OutroEmailProps = z.infer<typeof outroEmailSchema>;

export const outroEmailDefaultProps: OutroEmailProps = {
  verificationCode: '123456',
};
