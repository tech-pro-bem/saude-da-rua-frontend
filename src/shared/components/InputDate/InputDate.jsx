import { useForm } from 'react-hook-form';
import { InputDateStyle } from './InputDateBirth.style';

export const InputDate = ({ registerValue, placeholder, id }) => {
  const { register } = useForm();

  return (
    <InputDateStyle
      id={id}
      type="date"
      {...register(registerValue)}
      placeholder={placeholder}
    />
  );
};
export default InputDate;
