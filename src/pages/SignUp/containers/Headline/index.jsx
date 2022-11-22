import { Highlight } from '@components';
import { Container } from './style';
import { useMedia } from '@hooks';

export const Headline = () => {
  const mobile = useMedia('(max-width:768px)');

  return (
    <Container>
      <h1>
        Seja uma pessoa <Highlight>voluntária</Highlight>
      </h1>
      {mobile ? (
        <p>
          Se você é profissional ou estudante da área da saúde, participe das
          nossas ações!
        </p>
      ) : (
        <>
          <p>
            Se você é profissional ou estudante da área da saúde,{' '}
            <strong>participe das ações do Saúde da Rua</strong>
            <br /> e nos ajude a levar qualidade de vida e dignidade a quem
            precisa!
          </p>
          <p>Inscreva-se agora e, em breve, entraremos em contato.</p>
        </>
      )}
    </Container>
  );
};
