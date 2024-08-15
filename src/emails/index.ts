import { emailsBrazil } from './br/index';
import { Country, type Emails } from './types';

export const emails: Emails = {
  [Country.BRAZIL]: emailsBrazil,
  [Country.CHILE]: emailsBrazil,
};
