import { faker } from '@faker-js/faker';
import { z } from 'zod';

export const autoCadastroSchema = z.object({
  name: z.string(),
  code: z.number(),
  creditLine: z.string(),
  score: z.string(),
  showLeader: z.boolean(),
  leader: z.string(),
  leaderPhone: z.string(),
});

export type AutoCadastroProps = z.infer<typeof autoCadastroSchema>;

export const autoCadastroDefaultProps: AutoCadastroProps = {
  name: faker.person.fullName(),
  code: faker.number.int({ max: 9999 }),
  creditLine: 'pré pago',
  score: 'R$ 1.000,00',
  showLeader: true,
  leader: faker.person.fullName(),
  leaderPhone: '(11) 99999-9999',
};
