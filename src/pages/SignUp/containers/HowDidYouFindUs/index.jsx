import { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';

import {
  Container,
  CustomSelect,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from './style';

const options = [
  'Site',
  'Instagram',
  'Posts de amigos',
  'Instituições de ensino',
  'Outros',
];

export const HowDidYouFindUs = ({ register, watch, control, setValue }) => {
  const howDidYouFindUs = watch('howDidYouFindUs');

  return (
    <Container>
      <p>Para finalizar, como ficou sabendo do Saúde da Rua?</p>

      <Controller
        rules={{ required: true }}
        defaultValue=""
        control={control}
        name="howDidYouFindUs"
        render={({ field }) => (
          <CustomSelect>
            <Listbox value={field.value} onChange={field.onChange}>
              <div>
                <ListboxButton>
                  {field.value ? field.value : 'Selecione uma opção'}
                </ListboxButton>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <ListboxOptions>
                    {options.map((option, idx) => (
                      <ListboxOption key={idx} value={option}>
                        {option}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              </div>
            </Listbox>
          </CustomSelect>
        )}
      />

      {howDidYouFindUs === 'Outros' ? (
        <>
          <label htmlFor="other" />
          <input
            type="text"
            name="other"
            id="other"
            placeholder="Informe como ficou sabendo do Saúde da Rua"
            {...register('other', { required: true })}
          />
        </>
      ) : (
        setValue('other', '')
      )}
    </Container>
  );
};
