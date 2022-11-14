import { InputTextStyle } from './InputText.style';

export const InputText = ({
  register,
  registerValue,
  id,
  placeholder,
  type,
  mask,
}) => {
  return (
    <InputTextStyle
      placeholder={placeholder}
      autoComplete="off"
      id={id}
      type={type}
      mask={mask ? mask : null}
      {...register(registerValue)}
    />
  );
};
export default InputText;
