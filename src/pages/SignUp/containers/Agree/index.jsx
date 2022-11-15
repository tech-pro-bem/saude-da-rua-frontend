import { Container } from './style';
import { Highlight } from '@components';

export const Agree = ({ register }) => {
  return (
    <Container>
      <input
        id="agree"
        type="checkbox"
        {...register('agree', { required: true })}
      />
      <label htmlFor="agree">
        Ao encaminhar as suas informações, você declara que leu e está de acordo
        com o tratamento dos seus dados pelo Saúde da Rua conforme estabelecido
        na nossa <Highlight>Política de Privacidade</Highlight>.
      </label>
    </Container>
  );
};
