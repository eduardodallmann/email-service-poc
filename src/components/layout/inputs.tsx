'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';

import { emails } from '~/emails';
import type { Country } from '~/emails/types';

import { useData } from './data-context';

export function Inputs(params: { country: Country; email: string }) {
  const { setData } = useData();
  const schema = emails[params.country]?.[params.email]?.schema;
  const defaultProps = emails[params.country]?.[params.email]?.defaultProps;

  if (!schema) {
    return <>Nada personalizavel</>;
  }

  type TypeName = 'ZodString' | 'ZodBoolean' | 'ZodNumber';

  const schemaShape: {
    [key: string]: {
      _def: {
        typeName: TypeName;
        innerType?: {
          _def: {
            typeName: TypeName;
          };
        };
      };
    };
  } = (schema as any).shape;

  if (!Object.keys(schemaShape).length) {
    return <>Nada personalizavel</>;
  }

  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: defaultProps,
  });

  useEffect(() => {
    setData(defaultProps);
    const subscription = watch(() => {
      handleSubmit(setData)();
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <form className="grid grid-cols-3 gap-4">
      {Object.keys(schemaShape).map((key) => {
        const field = schemaShape[key];
        const typeName =
          field._def.innerType?._def.typeName || field._def.typeName;

        return (
          <div key={key}>
            <div className="block text-gray-700 font-bold mb-2">
              <Label htmlFor={key} value={`${key}:`} />
            </div>
            {typeName === 'ZodString' && (
              <TextInput id={key} type="text" required {...register(key)} />
            )}
            {typeName === 'ZodNumber' && (
              <TextInput
                type="number"
                id={key}
                {...register(key, { valueAsNumber: true })}
              />
            )}
            {typeName === 'ZodBoolean' && (
              <Checkbox id={key} {...register(key)} />
            )}
          </div>
        );
      })}
    </form>
  );
}
