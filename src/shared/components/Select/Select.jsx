import { useform } from 'react-hook-form';
import { SelectStyle } from './Select.style';

export const Select = ({ name, options }) => {
  return (
    <SelectStyle name={name}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectStyle>
  );
};

export default Select;
