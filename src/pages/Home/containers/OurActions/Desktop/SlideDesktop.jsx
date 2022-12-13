import Carousel, { CarouselItem } from './Carousel/Carousel';
import { Container } from './Carousel/Carousel.style';
import { ContainerStyle } from './SlideDesktop.style';
import { action2020, action2021, humanDay } from '@assets';
import { Highlight, OutlinedImage } from '@components';

const SliderDesktop = () => (
  <Container>
    <Carousel>
      <CarouselItem>
        <ContainerStyle>
          <div className="text">
            <h2>
              Conheça nossas <Highlight>ações</Highlight>
            </h2>
            <p id="year">2020</p>
            <p id="message">O início</p>

            <p className="big" id="content">
              <li>
                No ano da nossa estreia, estivemos <br />
                presentes em 17 ações.
              </li>
              <li>
                800 atendimentos médicos e 714 testes
                <br /> rápidos de Covid em São Paulo.
              </li>
              <li>
                Abrimos as filiais de Campinas e S. J. do Rio
                <br /> Preto, em São Paulo, e Itajaí, em Santa
                <br /> Catarina.
              </li>
            </p>
          </div>
        </ContainerStyle>
        <OutlinedImage
          width={'403px'}
          height={'397px'}
          leftOffset="-8px"
          rightOffset="8px"
          topOffset="-8px"
          bottomOffset="8px"
          src={action2021}
          alt="Action 2021"
          className="action"
        />
      </CarouselItem>

      <CarouselItem>
        <ContainerStyle>
          <div className="text">
            <h2>
              Conheça nossas <Highlight>ações</Highlight>
            </h2>
            <p id="year">2021</p>
            <p id="message">Expansão</p>

            <p className="big" id="content">
              <li>
                891 atendimentos em 19 ações sociais
                <br /> na cidade de São Paulo
              </li>
              <li>
                Chegamos a 3 novas comunidades: <br />
                Esmaga Sapo e Anchieta, em São
                <br />
                Paulo e Parque Viana, em Barueri
              </li>
              <li>
                Abrimos uma filial em
                <br /> São Carlos - SP
              </li>
            </p>
          </div>
        </ContainerStyle>

        <OutlinedImage
          width={'403px'}
          height={'397px'}
          leftOffset="-8px"
          rightOffset="8px"
          topOffset="-8px"
          bottomOffset="8px"
          src={action2020}
          alt="Action 2020"
        />
      </CarouselItem>

      <CarouselItem>
        <ContainerStyle>
          <div className="text">
            <h2>
              Conheça nossas <Highlight>ações</Highlight>
            </h2>
            <p id="year">2022</p>
            <p id="message">Visibilidade</p>

            <p className="big" id="content">
              <li>
                Em 8 ações, realizamos 335 atendimentos <br />
                médicos e 63 testes rápidos de covid-19
              </li>
              <li>
                Nossas duas campanhas de arrecadação
                <br /> levantaram mais de R$ 7 mil, 50 cobertores
                <br /> e 4 mil fraldas
              </li>
              <li>
                Alcançamos a grande imprensa, com
                <br /> entrevistas para Folha de S.Paulo e rádio CBN
              </li>
            </p>
          </div>
        </ContainerStyle>

        <OutlinedImage
          width={'403px'}
          height={'397px'}
          leftOffset="-8px"
          rightOffset="8px"
          topOffset="-8px"
          bottomOffset="8px"
          src={humanDay}
          alt="Human Day"
          className="action"
        />
      </CarouselItem>
    </Carousel>
  </Container>
);

export default SliderDesktop;
