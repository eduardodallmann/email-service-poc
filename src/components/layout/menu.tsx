'use client';

import Link from 'next/link';

import { Sidebar } from 'flowbite-react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import { emails } from '~/emails';
import type { Country } from '~/emails/types';

export function Menu() {
  const emailKeys = Object.keys(emails) as Array<Country>;

  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {emailKeys.map((key) => {
            const email = emails[key];
            if (!email) {
              return null;
            }

            return (
              <Sidebar.Collapse
                key={key}
                label={key}
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? MdExpandLess : MdExpandMore;

                  return <IconComponent aria-hidden />;
                }}
              >
                {Object.keys(email).map((email) => {
                  return (
                    <Sidebar.Item
                      key={email}
                      as={Link}
                      href={`/preview/${key}/${email}`}
                    >
                      {email}
                    </Sidebar.Item>
                  );
                })}
              </Sidebar.Collapse>
            );
          })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
