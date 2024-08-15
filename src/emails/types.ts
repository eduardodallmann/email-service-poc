import type { z } from 'zod';

export enum Country {
  BRAZIL = 'br',
  CHILE = 'cl',
  COLOMBIA = 'co',
  MEXICO = 'mx',
}

export type SchemaComponent = {
  schema: z.ZodType<any, any, any>;
  defaultProps: Record<string, string | number | boolean>;
  component: (props: any) => JSX.Element;
};

export type Emails = Partial<Record<Country, Record<string, SchemaComponent>>>;
