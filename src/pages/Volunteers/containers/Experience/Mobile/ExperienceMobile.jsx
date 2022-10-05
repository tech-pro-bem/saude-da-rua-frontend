import { Highlight, LinkButton } from '@components';
import Photo from './components/Photo';
import { Container } from './ExperienceMobile.style';

const ExperienceMobile = () => {
  return (
    <Container>
      <Photo />
      <h3 className="first">
        Viva a <Highlight>experiência</Highlight>
      </h3>
      <p>
        Trocar conhecimento, desenvolver novas habilidades e fazer o bem ao
        próximo são apenas algumas das recompensas dessa experiência incrível!
      </p>
      <LinkButton text="Inscreva-se" route="/inscreva-se" />
    </Container>
  );
};

export default ExperienceMobile;
