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
          Ao encaminhar as suas informações, você declara que leu e está de
          acordo com o tratamento dos seus dados pelo Saúde da Rua conforme
          estabelecido na nossa <a href="/">Política de Privacidade</a>.
        </label>
      </Check>
      {errors.agree && (
        <ErrorMessage message="Esse campo deve ser preenchido." />
      )}
    </Container>
  );
};
