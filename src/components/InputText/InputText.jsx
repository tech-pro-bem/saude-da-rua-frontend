import { useForm } from 'react-hook-form';
import { InputTextStyle } from './InputText.style';

export const InputText = ({ registerValue, id }) => {
  const { register } = useForm();

  return <InputTextStyle id={id} type="text" {...register(registerValue)} />;
};
export default InputText;
