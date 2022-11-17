import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import {
  CustomSelect,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from './style';

const Select = ({ name, value, onChange, errors, options }) => {
  return (
    <CustomSelect>
      <Listbox value={value} onChange={onChange}>
        <div>
          <ListboxButton iserror={errors[name] ? 'erro' : ''}>
            {value ? value : 'Selecione uma opção'}
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
  );
};

export default Select;
