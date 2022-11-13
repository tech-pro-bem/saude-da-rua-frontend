import React from 'react';
import { Highlight } from '@components';
import { CarouselItemMobile, H2Title, Wrapper } from './SlideMobile.style';
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
                        No primeiro semestre de atuação da Saúde da Rua, foram
                        realizadas <strong>17 ações</strong>
                      </li>
                      <li>
                        Fizemos <strong>800 atendimentos médicos</strong> e{' '}
                        <strong>714 testes rápidos</strong> e em São Paulo
                      </li>
                      <li>
                        Abrimos <strong>3 filiais</strong> e foi início de
                        incríveis parcerias que nos permitiram expandir nossa
                        atuação
                      </li>
                    </ul>
                  </div>
                </ContainerStyle>
              </CarouselItemMobile>
            </div>
            <div className="keen-slider__slide number-slide2">
              <H2Title>Human Day</H2Title>
              <CarouselItemMobile style={scaleStyle(1)}>
                <img src={action2021} alt="Action 2021" />
                <ContainerStyle>
                  <div className="text">
                    <p className="big" id="content"></p>
                    <ul>
                      <li>
                        <strong>891 atendimentos em 19 ações </strong> <br />{' '}
                        sociais na cidade de São Paulo
                      </li>
                      <li>
                        Chegamos a <strong>3 novas comunidades</strong>: <br />
                        Esmaga Sapo e Anchieta, em São Paulo, e Parque Viana, em
                        Barueri
                      </li>
                      <li>
                        Abrimos uma filial em <strong>São Carlos - SP</strong>
                      </li>
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
                      <li>Disponibilizar um dia de serviços gratuitos</li>
                      <li>
                        Nesse projeto atuam{' '}
                        <strong>
                          {' '}
                          voluntários, coletivos OSCS, poder público e empresas
                        </strong>
                      </li>
                      <li>
                        Fazemos parte dessa ação, oferecendo atendimento médico
                        humanizado
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
