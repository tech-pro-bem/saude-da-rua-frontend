import Carousel, { CarouselItem } from './Carousel';
import { Container } from './Carousel.style';
import {
  action2020,
  action2021,
  humanDay,
  slideArrow,
} from '../../../../../assets/index';

const SliderData = () => (
  <Container>
    <Carousel>
      <CarouselItem>
        <div className="text">
          <h2>
            Veja nossas <span>ações</span>
          </h2>
          <p id="year">2021</p>
          <img src={action2021} alt="Action 2021" className="action" />
          <p id="content">
            Foram realizados 891 atendimentos em 19 <br></br>ações sociais na
            cidade de São Paulo.<br></br>
            Ampliamos nossa atuação e passamos a <br></br>atuar nas comunidades
            Esmaga Sapo (SP),<br></br>
            Anchieta (Grajaú/SP) e Parque Viana <br></br>(Baurueri/SP). Também
            abrimos mais uma filial <br></br>em São Carlos/SP.
          </p>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="text">
          <h2>
            Veja nossas <span>ações</span>
          </h2>
          <p id="year">2020</p>
          <img src={action2020} alt="Action 2020" className="action" />
          <p id="content">
            Nos primeiro semestre de atuação do Saúde <br></br>da Rua, foram
            realizadas 17 ações. Fizemos <br></br>800 atendimentos médicos e 714
            testes<br></br> rápidos em São Paulo. Abrimos 3 filiais e foi{' '}
            <br></br>início de incríveis parcerias que <br></br>nos permitiram
            expandir nossa atuação.
          </p>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="text">
          <h2>
            Veja nossas <span>ações</span>
          </h2>
          <p id="year">Human Day</p>
          <img src={humanDay} alt="Human Day" className="action" />
          <p id="content">
            O Human Day é realizado com o objetivo de<br></br> disponibilizar um
            dia de serviços gratuitos.<br></br>
            Nesse projeto atuam voluntários, coletivos/<br></br>OSCS, poder
            público e empresas. Fazemos <br></br>parte dessa ação, oferecendo
            atendimento<br></br> médico humanizado.
          </p>
        </div>
      </CarouselItem>
    </Carousel>
  </Container>
);

export default SliderData;
