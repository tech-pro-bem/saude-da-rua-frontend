import { Highlight } from '@components';
import { CircleCheck } from '@assets/MedicinePage';
import { Container, TextBox } from './style';

export const Headline = () => {
  return (
    <Container>
      <h1>
        Quero doar <Highlight>medicamentos</Highlight>
      </h1>
      <TextBox>
        <p>Veja como é fácil registrar a sua doação de remédios:</p>
        <ul>
          <li>
            <img src={CircleCheck} alt="check icon" />
            <p>
              Informe abaixo quais{' '}
              <strong>medicamentos dentro da validade</strong> você irá doar.
            </p>
          </li>
          <li>
            <img src={CircleCheck} alt="check icon" />
            <p>
              Aguarde o nosso contato com detalhes sobre como entregar sua
              doação em nossos{' '}
              <strong>postos de coleta, em São Paulo - SP</strong>.
            </p>
          </li>
        </ul>
      </TextBox>
    </Container>
  );
};
