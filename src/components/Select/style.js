import styled from 'styled-components';
import { Listbox } from '@headlessui/react';

import { CaretDown, CaretUp } from '../../assets/svg';

export const CustomSelect = styled.div`
  width: 100%;

  & > div {
    position: relative;
    margin-top: 4px;
  }
`;

export const ListboxButton = styled(Listbox.Button)`
  background: transparent;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primary_light};
  border: 1px solid
    ${(props) =>
      props.iserror === 'erro'
        ? props.theme.colors.error
        : props.theme.colors.primary_light};
  font-size: 1rem;
  height: 3rem;
  outline: none;
  padding: 0.75rem 1.125rem;
  position: relative;
  width: 100%;
  text-align: left;

  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 1.25rem);
  background-position-y: 1.125rem;

  transition: all 0.1s;

  &[aria-expanded='true'] {
    background-image: url(${CaretUp});
  }
`;

export const ListboxOptions = styled(Listbox.Options)`
  position: absolute;
  max-height: 336px;
  width: 100%;
  overflow: auto;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.blackUI};
  color: ${(props) => props.theme.colors.primary_light};
  z-index: 10;
`;

export const ListboxOption = styled(Listbox.Option)`
  position: relative;
  cursor: pointer;
  padding: 1rem 1.125rem;
`;
