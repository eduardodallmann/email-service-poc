'use client';

import { render } from '@react-email/components';

import { emails } from '~/emails';
import type { Country } from '~/emails/types';

import { useData } from './data-context';

export function PreviewArea(params: { country: Country; email: string }) {
  const Component =
    emails[params.country]?.[params.email]?.component ||
    (() => <div>Email não encontrado</div>);

  const { data } = useData();

  const html = render(<Component {...data} />);

  return (
    <iframe
      srcDoc={html}
      sandbox=""
      style={{ width: '100%', height: '100vh' }}
    />
  );
}
