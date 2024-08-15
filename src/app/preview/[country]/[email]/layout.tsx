import type { PropsWithChildren } from 'react';

import { Card } from 'flowbite-react';

import { DataProvider } from '~/components/layout/data-context';
import { Inputs } from '~/components/layout/inputs';
import type { Country } from '~/emails/types';

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<{
  params: { country: Country; email: string };
}>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <DataProvider>
        <Card>
          <Inputs country={params.country} email={params.email} />
        </Card>
        {children}
      </DataProvider>
    </div>
  );
}
