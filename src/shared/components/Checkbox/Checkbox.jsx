import { useForm } from 'react-hook-form';
import { CheckboxStyle } from './Checkbox.style';

export const Checkbox = ({ registerValue, id }) => {
  const { register } = useForm();

  return <CheckboxStyle id={id} type="checkbox" {...register(registerValue)} />;
};
export default Checkbox;
