import { NextResponse } from 'next/server';

import { render } from '@react-email/components';

import { emails } from '~/emails';
import type { Country } from '~/emails/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get('country') as Country;
  const email = searchParams.get('email');

  if (!country || !email) {
    return NextResponse.json(
      { name: 'Please provide a country and email' },
      { status: 400 },
    );
  }

  const schema = emails[country]?.[email]?.schema;
  const component = emails[country]?.[email]?.component;

  if (!schema || !component) {
    return NextResponse.json(
      { name: 'Country or email not found' },
      { status: 404 },
    );
  }

  const data = Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => {
      try {
        return [key, JSON.parse(value)];
      } catch {
        return [key, value];
      }
    }),
  );

  const result = schema.safeParse(data);

  if (!result.success) {
    return NextResponse.json(
      { name: 'Invalid data', errors: result.error.errors },
      { status: 400 },
    );
  }

  const html = render(component(result.data));

  return NextResponse.json({ html }, { status: 200 });
}
