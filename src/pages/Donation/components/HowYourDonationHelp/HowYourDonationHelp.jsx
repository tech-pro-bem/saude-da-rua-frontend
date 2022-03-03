import {
  Container,
  AccountabilityContainer,
  AccountabilityItem,
} from './HowYourDonationHelp.style';
import { Highlight, Quotation } from '../../../../shared/components';
import {
  assistanceIcon,
  healthcareIcon,
  supportIcon,
} from '../../../../assets/svg';

const HowYourDonationHelp = () => {
  return (
    <>
      <Container>
        <h2>
          Como sua doação nos <Highlight>ajuda</Highlight>
        </h2>
        <AccountabilityContainer>
          <AccountabilityItem>
            <img
              src={supportIcon}
              alt="ícone de pessoa ao lado de um coração"
            />
            <p className="big">Acolhimento</p>
            <p>
              Acolhimento das pessoas em situação de rua, usuários de drogas e
              crianças em situação de risco.
            </p>
          </AccountabilityItem>
          <AccountabilityItem>
            <img
              src={assistanceIcon}
              alt="Ícone de duas mãos abertas e um sinal de cruz da medicina"
            />
            <p className="big">Atendimento</p>
            <p>
              Triagem e atendimento médico humanizado adulto e pediátrico,
              respeitando os princípios da equidade.
            </p>
          </AccountabilityItem>
          <AccountabilityItem>
            <img
              src={healthcareIcon}
              alt="ícone de cuidados médicos com itens medicinais"
            />
            <p className="big">Tratamentos</p>
            <p>
              Medicamentos, testes rápidos (glicemia, Hepatite B, C, HIV,
              Sífilis e Covid-19) e aferição da pressão arterial.
            </p>
          </AccountabilityItem>
        </AccountabilityContainer>
      </Container>
      <Quotation
        author="Albert Pine"
        text="O que fazemos para nós, morre conosco. O que fazemos pelos outros e pelo mundo, continua e é imortal."
        maxWidth="600px"
        margin="40px auto"
      />
    </>
  );
};

export default HowYourDonationHelp;
