import { Structure, LinkButton } from '@components';
import { Container, Head, TextBox } from './style';

const MedicineDonationFormFail = () => {
  return (
    <Structure>
      <Container>
        <Head>
          <h1>Poxa!</h1>
        </Head>
        <TextBox>
          <p>
            Tivemos um problema ao registrar a sua doação. Vamos tentar de novo?
          </p>
        </TextBox>
        <LinkButton route="/formulario-doacao" text="Tentar novamente" />
      </Container>
    </Structure>
  );
};

export default MedicineDonationFormFail;
