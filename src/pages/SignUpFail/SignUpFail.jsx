import { Structure, LinkButton } from '@components';
import { Container, Head, TextBox } from './style';

const SignUpFail = () => {
  return (
    <Structure>
      <Container>
        <Head>
          <h1>
            Poxa! <br />
            Tivemos um problema ao carregar seus dados. <br /> Vamos tentar de
            novo?
          </h1>
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
