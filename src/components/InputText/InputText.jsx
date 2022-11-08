import { useForm } from 'react-hook-form';
import { InputTextStyle } from './InputText.style';

export const InputText = ({ registerValue, id, placeholder, type }) => {
  const { register } = useForm();

  return (
    <InputTextStyle
      placeholder={placeholder}
      id={id}
      type={type}
      {...register(registerValue)}
    />
  );
};
export default InputText;
