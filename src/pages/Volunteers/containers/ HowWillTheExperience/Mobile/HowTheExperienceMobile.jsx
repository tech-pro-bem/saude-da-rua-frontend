import { Highlight, LinkButton } from '@components';
import PhotoHowTheExperience from './components/PhotoHowTheExperience';
import { Container, Heading, Paragraph } from './HowTheExperienceMobile.style';

const HowTheExperienceMobile = () => {
  return (
    <Container>
      <Heading>
        Como será a <Highlight>experiência</Highlight>?
      </Heading>
      <PhotoHowTheExperience />

      <Paragraph>
        Antes de ir pra rua, montamos um time com profissionais inscritos aqui
        no site. <strong>Fique de olho no Whatsapp</strong> que é por lá que
        fazemos a convocação!
      </Paragraph>

      <Paragraph>
        Durante a ação, são esses voluntários que irão realizar os
        <strong> atendimentos respeitosos e humanizados</strong> que nos
        orgulham tanto.
      </Paragraph>
      <LinkButton text="Inscreva-se" route="/inscreva-se" />
    </Container>
  );
};

export default HowTheExperienceMobile;
