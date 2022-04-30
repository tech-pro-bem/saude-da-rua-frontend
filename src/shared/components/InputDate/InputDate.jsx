import { useForm } from 'react-hook-form';

const InputDate = () => {
  const { register } = useForm();

  return (
    <InputDate>
      <input
        id="inputDate"
        type="date"
        {...'dataNascimento'}
        placeholder="dd/mm/aaaa"
      />
    </InputDate>
  );
};
export default InputDate;
