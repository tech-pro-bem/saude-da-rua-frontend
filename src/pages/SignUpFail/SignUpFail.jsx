import { Structure, LinkButton } from '@components';
import { Container, Head, TextBox } from './style';

const SignUpFail = () => {
  return (
    <Structure>
      <Container>
        <Head>
          <h1>Ocorreu um erro ao efetuar inscrição :( </h1>
        </Head>
        <TextBox>
          {/* <p>

          </p> */}
        </TextBox>
        <LinkButton route="/inscreva-se" text="Tente novamente" />
      </Container>
    </Structure>
  );
};

export default SignUpFail;
