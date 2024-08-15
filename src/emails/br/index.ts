import type { SchemaComponent } from '../types';
import { Autocadastro } from './autocadastro/autocadastro';
import {
  autoCadastroDefaultProps,
  autoCadastroSchema,
} from './autocadastro/schema';
import { OutroEmail } from './outro/outro-email';
import { outroEmailDefaultProps, outroEmailSchema } from './outro/schema';

export const emailsBrazil: Record<string, SchemaComponent> = {
  autoCadastro: {
    schema: autoCadastroSchema,
    defaultProps: autoCadastroDefaultProps,
    component: Autocadastro,
  },
  outroEmail: {
    schema: outroEmailSchema,
    defaultProps: outroEmailDefaultProps,
    component: OutroEmail,
  },
};
