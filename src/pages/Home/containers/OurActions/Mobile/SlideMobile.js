import React from 'react';
import { Highlight } from '@components';
import { CarouselItemMobile, Wrapper } from './SlideMobile.style';
import { ContainerStyle } from '../Desktop/SlideDesktop.style';
import { action2020, action2021, humanDay } from '@assets';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const SlideMobile = () => {
  React.useEffect(() => {
    const buttons = document.querySelectorAll('.button_tab_nav');
    const years = [2020, 2021, 2022];
    buttons.forEach((btn, index) => {
      btn.style.color = '#ffff';
      btn.innerHTML = `${years[index]}`;
    });
  }, []);

  return (
    <Wrapper>
      <h2 className="title">
        Veja nossas <Highlight>ações</Highlight>
      </h2>
      <Splide
        id="image-carousel"
        hasTrack={false}
        className="splide"
        aria-label="Beautiful Images"
        options={{
          arrows: false,
          type: 'loop',
          padding: '5%',
          classes: {
            pagination: 'splide__pagination listOfSplideSlide',
            page: 'splide__pagination__page button_tab_nav',
          },
        }}
      >
        <ul
          className="splide__pagination splide__pagination--ltr listOfSplideSlide"
          role="tablist"
          aria-label="Select a slide to show"
        />
        <SplideTrack>
          <SplideSlide>
            <CarouselItemMobile>
              <img src={action2020} alt="Action 2020" />
              <ContainerStyle>
                <div className="text">
                  <ul>
                    <li>
                      Nos primeiro semestre de atuação do Saúde da Rua, foram
                      realizadas 17 ações.
                    </li>
                    <li>
                      Fizemos 800 atendimentos médicos e 714 testes rápidos e em
                      São Paulo.
                    </li>
                    <li>
                      Abrimos 3 filiais e foi início de e incríveis parcerias
                      que nos permitiram expandir nossa atuação.
                    </li>
                  </ul>
                </div>
              </ContainerStyle>
            </CarouselItemMobile>
          </SplideSlide>
          <SplideSlide>
            <CarouselItemMobile>
              <img src={action2021} alt="Action 2021" />
              <ContainerStyle>
                <div className="text">
                  <p className="big" id="content"></p>
                  <ul>
                    <li>
                      Chegamos a 3 novas comunidades: Esmaga Sapo (SP) e
                      Anchieta, em Sao Paulo, e parque Viana, em Barueri.
                    </li>
                    <li>
                      <strong>891 atendimentos</strong> em
                      <strong> ações </strong> sociais na cidade de São Paulo.
                    </li>
                    <li> Anchieta (Grajaú/SP)</li>
                    <li> Parque Viana</li>
                    <li>Abrimos uma filial em São Carlos - SP.</li>
                  </ul>
                </div>
              </ContainerStyle>
            </CarouselItemMobile>
          </SplideSlide>
          <SplideSlide>
            <CarouselItemMobile>
              <img src={humanDay} alt="" />
              <ContainerStyle>
                <div className="text">
                  <ul>
                    <li>Disponibilizar um dia de serviços gratuitos.</li>
                    <li>
                      Nesse projeto atuam{' '}
                      <strong>
                        {' '}
                        voluntários, coletivos OSCS, poder público e empresas.
                      </strong>
                    </li>
                    <li>
                      Fazemos parte dessa ação, oferecendo atendimento médico
                      humanizado.
                    </li>
                  </ul>
                </div>
              </ContainerStyle>
            </CarouselItemMobile>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </Wrapper>
  );
};

export default SlideMobile;
