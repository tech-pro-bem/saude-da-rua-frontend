import { Structure, LinkButton } from '@components';
import { ConfirmIcon } from '../../assets/svg';
import { Container, Head, TextBox } from './style';

const SignUpSuccess = () => {
  return (
    <Structure>
      <Container>
        <Head>
          <img src={ConfirmIcon} alt="" />
          <h1>Inscrição enviada com sucesso!</h1>
        </Head>
        <TextBox>
          <p>
            Seu nome agora está no nosso{' '}
            <strong>banco de pessoas voluntárias</strong>.{' '}
            <span>
              Cerca de 15 dias antes de cada ação, convocamos os voluntários
              pelo Whatsapp. Enquanto aguarda o chamado, que tal nos ajudar
              ainda mais?
            </span>
          </p>
        </TextBox>
        <LinkButton route="/doacao" text="Doe qualquer valor" />
      </Container>
    </Structure>
  );
};

export default SignUpSuccess;
