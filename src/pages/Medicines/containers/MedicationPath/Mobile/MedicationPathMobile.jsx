import { Highlight, OutlinedImageAnimation } from '@components';
import { Medicine012 } from '@assets';
import { useInView } from 'react-intersection-observer';
import { Container, List, Path } from './MedicationPathMobile.style';

export function MedicationPathMobile() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <Container>
      <div>
        <h2>
          O caminho da <br />
          <Highlight>sua doação</Highlight>
        </h2>
        <List>
          <Path>
            <div>1.</div>
            <div> Fazemos a triagem dos medicamentos doados.</div>
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
      </div>
      <div>
        <OutlinedImageAnimation
          outlineBorderRadius={'12px'}
          rightOffset={'none'}
          topOffset={'-8px'}
          leftOffset={'-8px'}
          bottomOffset={'none'}
          src={Medicine012}
          imgBorderRadius={'12px'}
          myRef={ref}
          inView={inView}
          animation={inView}
        />
      </div>
    </Container>
  );
}
