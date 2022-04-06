import Carousel, { CarouselItem } from './components/Carousel';
import { Container } from './components/Carousel.style';
import { action2020, action2021, humanDay } from '../../../../../src/assets';
import { OutlinedImage } from '../../../../shared/components';

const SliderData = () => (
  <Container>
    <Carousel>
      <CarouselItem>
        <div className="text">
          <h2>
            Veja nossas <span> ações</span>
          </h2>
          <p id="year">2021</p>
          <OutlinedImage
            width={'403px'}
            height={'397px'}
            style={{ marginLeft: '600px' }}
            leftOffset="-8px"
            rightOffset="8px"
            topOffset="-8px"
            bottomOffset="8px"
            src={action2021}
            alt="Action 2021"
            className="action"
          />
          <p id="content">
            Foram realizados <strong>891 atendimentos</strong> em{' '}
            <strong>
              19 <br></br>ações
            </strong>{' '}
            sociais na cidade de São Paulo.<br></br>
            Ampliamos nossa atuação e passamos a <br></br>atuar nas comunidades
            Esmaga Sapo (SP),<br></br>
            Anchieta (Grajaú/SP) e Parque Viana <br></br>(Baurueri/SP). Também
            abrimos mais uma filial <br></br>em <strong> São Carlos/SP.</strong>
          </p>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="text">
          <h2>
            Veja nossas <span>ações</span>
          </h2>
          <p id="year">2020</p>
          <OutlinedImage
            width={'403px'}
            height={'397px'}
            style={{ marginLeft: '600px' }}
            leftOffset="-8px"
            rightOffset="8px"
            topOffset="-8px"
            bottomOffset="8px"
            src={action2020}
            alt="Action 2020"
          />
          <p id="content">
            Nos primeiro semestre de atuação do Saúde <br></br>da Rua, foram
            realizadas{' '}
            <strong>
              17 ações. Fizemos <br></br>800 atendimentos médicos
            </strong>{' '}
            e{' '}
            <strong>
              714 testes<br></br> rápidos
            </strong>{' '}
            em São Paulo. Abrimos 3 filiais e foi
            <br></br>início de <strong>incríveis parcerias</strong> que{' '}
            <br></br>nos permitiram expandir nossa atuação.
          </p>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="text">
          <h2>
            Veja nossas <span>ações</span>
          </h2>
          <p id="year">Human Day</p>
          <OutlinedImage
            width={'403px'}
            height={'397px'}
            style={{ marginLeft: '600px' }}
            leftOffset="-8px"
            rightOffset="8px"
            topOffset="-8px"
            bottomOffset="8px"
            src={humanDay}
            alt="Human Day"
            className="action"
          />
          <p id="content">
            O Human Day é realizado com o objetivo de<br></br> disponibilizar um
            <strong>dia de serviços gratuitos.</strong>
            <br></br>
            Nesse projeto atuam{' '}
            <strong>
              voluntários, coletivos/<br></br>OSCS, poder público e empresas.
            </strong>{' '}
            Fazemos <br></br>parte dessa ação,
            <strong>
              oferecendo atendimento<br></br> médico humanizado.
            </strong>
          </p>
        </div>
      </CarouselItem>
    </Carousel>
  </Container>
);

export default SliderData;
