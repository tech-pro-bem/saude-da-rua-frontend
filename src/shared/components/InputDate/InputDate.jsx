import { useForm } from 'react-hook-form';
import { InputDateBirth } from './InputDateBirth.style';

export const InputDate = (props) => {
  const { register } = useForm();

  return (
    <InputDateBirth>
      <input
        id="inputDate"
        type="date"
        {...register(props.dataNascimento)}
        placeholder="dd/mm/aaaa"
      />
    </InputDateBirth>
  );
};
export default InputDate;
