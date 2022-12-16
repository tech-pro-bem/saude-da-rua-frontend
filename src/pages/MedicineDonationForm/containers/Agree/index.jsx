import { Container, Check } from './style';
import { ErrorMessage } from '@components';

export const Agree = ({ register, errors }) => {
  return (
    <Container>
      <Check>
        <input
          id="agree"
          type="checkbox"
          {...register('agree', { required: true })}
        />
        <label htmlFor="agree">
          Confirmo que os medicamentos citados foram armazenados corretamente e
          estão dentro do prazo de validade.
        </label>
      </Check>
      {errors.agree && (
        <ErrorMessage message="Esse campo deve ser preenchido." />
      )}
    </Container>
  );
};
