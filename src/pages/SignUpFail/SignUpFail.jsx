import { Structure, LinkButton } from '@components';
import { Container, Head, TextBox } from './style';

const SignUpFail = () => {
  return (
    <Structure>
      <Container>
        <Head>
          <h1>Poxa!</h1>
        </Head>
        <TextBox>
          <p>
            Tivemos um problema ao carregar seus dados. Vamos tentar de novo?
          </p>
        </TextBox>
        <LinkButton route="/inscreva-se" text="Tente novamente" />
      </Container>
    </Structure>
  );
};

export default SignUpFail;
