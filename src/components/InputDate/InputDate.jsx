import { useForm } from 'react-hook-form';
import { InputDateStyle } from './InputDate.style';

export const InputDate = ({ registerValue, id }) => {
  const { register } = useForm();

  return <InputDateStyle id={id} type="date" {...register(registerValue)} />;
};
export default InputDate;
