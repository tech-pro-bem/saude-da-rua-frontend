import { Highlight, LinkButton } from '@components';
import { CheckBox } from '@assets/MedicinePage';
import { Container, List, Option } from './MedicationStorageMobile.style';

export function MedicationStorageMobile() {
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
      </Container>
      <LinkButton
        style={{ margin: '40px 0px 65px 0px' }}
        text="Quero doar medicamentos"
        route="/formulario-doacao"
      />
    </>
  );
}
