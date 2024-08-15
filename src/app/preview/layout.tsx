import type { PropsWithChildren } from 'react';

import { Menu } from '~/components/layout/menu';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Menu />
      <div style={{ margin: '1rem', flex: 1, maxWidth: '600px' }}>
        {children}
      </div>
    </div>
  );
}
