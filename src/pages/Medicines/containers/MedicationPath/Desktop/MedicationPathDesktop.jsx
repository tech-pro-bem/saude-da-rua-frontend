import { Highlight, OutlinedImageAnimation } from '@components';
import { Medicine013 } from '@assets';
import { useInView } from 'react-intersection-observer';
import { Container, Data, List, Path } from './MedicationPathDesktop.style';

export function MedicationPathDesktop() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <Container>
      <OutlinedImageAnimation
        outlineBorderRadius={'12px'}
        rightOffset={'none'}
        topOffset={'none'}
        leftOffset={'-8px'}
        bottomOffset={'-8px'}
        src={Medicine013}
        imgBorderRadius={'12px'}
        myRef={ref}
        inView={inView}
        animation={inView}
      />
      <Data>
        <h2>
          O caminho da <Highlight>sua doação</Highlight>
        </h2>
        <List>
          <Path>
            <div>1.</div>
            <div>Fazemos a triagem dos medicamentos doados.</div>
          </Path>
          <Path>
            <div>2.</div>
            <div>
              {' '}
              Levamos os medicamentos para ações nas ruas e em comunidades.{' '}
            </div>
          </Path>
          <Path>
            <div>3.</div>
            <div>
              {' '}
              Distribuímos os medicamentos conforme a necessidade de cada
              paciente.
            </div>
          </Path>
        </List>
      </Data>
    </Container>
  );
}
