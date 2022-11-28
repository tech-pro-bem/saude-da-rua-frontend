import { Structure, LinkButton } from '@components';
import { ConfirmIcon } from '../../assets/svg';
import { Container, Head, TextBox } from './style';

const MedicineDonationFormSuccess = () => {
  return (
    <Structure>
      <Container>
        <Head>
          <img src={ConfirmIcon} alt="" />
          <h1>Doação registrada com sucesso!</h1>
        </Head>
        <TextBox>
          <p>
            Agora é só aguardar nosso contato que explicaremos direitinho como
            fazer para entregar a sua doação. Muito obrigado!
          </p>
        </TextBox>
        <LinkButton route="/doacao" text="Realizar outra doação" />
      </Container>
    </Structure>
  );
};

export default MedicineDonationFormSuccess;
