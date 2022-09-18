import React from 'react';
import { Highlight } from '@components';
import { CarouselItemMobile, Wrapper } from './SlideMobile.style';
import { ContainerStyle } from '../Desktop/SlideDesktop.style';
import { action2020, action2021, humanDay } from '@assets';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const SlideMobile = () => {
  const years = [2020, 2021, 2022];
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [details, setDetails] = React.useState(null);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  function scaleStyle(idx) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <Wrapper>
      <h2 className="title">
        Veja nossas <Highlight>ações</Highlight>
      </h2>
      <>
        {loaded && instanceRef.current && (
          <div className="listOfSplideSlide">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx, i) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={
                    'button_tab_nav' + (currentSlide === idx ? ' active' : '')
                  }
                >
                  {years[i]}
                </button>
              );
            })}
          </div>
        )}
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <CarouselItemMobile style={scaleStyle(0)}>
                <img src={action2020} alt="Action 2020" />
                <ContainerStyle>
                  <div className="text">
                    <ul>
                      <li>
                        Nos primeiro semestre de atuação do Saúde da Rua, foram
                        realizadas 17 ações.
                      </li>
                      <li>
                        Fizemos 800 atendimentos médicos e 714 testes rápidos e
                        em São Paulo.
                      </li>
                      <li>
                        Abrimos 3 filiais e foi início de e incríveis parcerias
                        que nos permitiram expandir nossa atuação.
                      </li>
                    </ul>
                  </div>
                </ContainerStyle>
              </CarouselItemMobile>
            </div>
            <div className="keen-slider__slide number-slide2">
              <CarouselItemMobile style={scaleStyle(1)}>
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
            </div>
            <div className="keen-slider__slide number-slide3">
              <CarouselItemMobile style={scaleStyle(2)}>
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
            </div>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default SlideMobile;
