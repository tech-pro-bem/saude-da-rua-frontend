import { Container } from './style';

export const HowDidYouFindUs = ({ register }) => {
  return (
    <Container>
      <p>Para finalizar, como ficou sabendo do Saúde da Rua?</p>
      <select name="howDidYouFindUs" {...register('howDidYouFindUs')}>
        <option value="undefined" selected disabled hidden>
          Escolha a opção
        </option>
        <option value="site">Site</option>
        <option value="instagram">Instagram</option>
        <option value="amigos">Posts de amigos</option>
        <option value="instituicoes">Instituições de ensino</option>
        <option value="outros">Outros</option>
      </select>
    </Container>
  );
};
