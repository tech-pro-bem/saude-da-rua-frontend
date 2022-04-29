import { useForm } from 'react-hook-form';

const InputDate = () => {
  const { register } = useForm();

  return (
    <label>
      <input
        id="inputDate"
        type="date"
        {...register('dataNascimento')}
        placeholder="dd/mm/aaaa"
      />
    </label>
  );
};
export default InputDate;
