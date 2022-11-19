import { Highlight, OutlinedImageAnimation, LinkButton } from '@components';
import { CheckBox, Medicine4 } from '@assets/MedicinePage';
import { useInView } from 'react-intersection-observer';
import { Container, List, Option } from './MedicationStorageDesktop.style';

export function MedicationStorageDesktop() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <Container>
        <div>
          <h2>
            <Highlight>Armazene corretamente</Highlight> seus medicamentos
          </h2>
          <p>
            Você sabe como guardar remédios de forma correta? Leia as dicas
            abaixo:
          </p>
          <List>
            <Option>
              <img alt="checkbox-svg" src={CheckBox}></img>
              <p>Armazene em locais frescos e secos.</p>
            </Option>
            <Option>
              <img alt="checkbox-svg" src={CheckBox}></img>
              <p> Mantenha longe do alcance de crianças e pets. </p>
            </Option>
            <Option>
              <img alt="checkbox-svg" src={CheckBox}></img>
              <p> Não guarde junto de produtos de limpeza ou alimentos.</p>
            </Option>
            <Option>
              <img alt="checkbox-svg" src={CheckBox}></img>
              <p> Preserve as embalagens originais para checar a validade.</p>
            </Option>
            <Option>
              <img alt="checkbox-svg" src={CheckBox}></img>
              <p>
                {' '}
                Siga a orientação médica para remédios termolábeis (sensíveis à
                temperatura).
              </p>
            </Option>
          </List>
        </div>
        <OutlinedImageAnimation
          outlineBorderRadius={'12px'}
          rightOffset={'-8px'}
          topOffset={'none'}
          leftOffset={'none'}
          bottomOffset={'-8px'}
          src={Medicine4}
          imgBorderRadius={'12px'}
          myRef={ref}
          inView={inView}
          animation={inView}
        />
      </Container>
      <LinkButton
        style={{ margin: '64px 0px 80px 0px' }}
        text="Quero doar medicamentos"
        route="/formulario-doacao"
      />
    </>
  );
}
