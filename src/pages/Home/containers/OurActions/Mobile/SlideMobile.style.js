import styled, { keyframes } from 'styled-components';
const ScaleUp = keyframes`
to {
  opacity: initial;
    transform: initial;
}
`;

export const Wrapper = styled.section`
  margin: 3rem 0 0 0;
  padding: 0.6rem;

  .splide__slide {
    transform: scale(0.98);
    transition: 0.2s;
    opacity: 50%;
  }

  .splide__slide.is-active {
    animation: ${ScaleUp} 0.3s forwards;
  }

  #year {
    color: ${(props) => props.theme.colors.light};
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 22px;
  }
  .title {
    padding: 5px;
    margin-top: 10px;
    font-size: 40px;
    margin-bottom: 62px;

    @media (max-width: 40rem) {
      font-size: 1.625rem;
      margin: 1.5rem 0;
    }
  }
  .listOfSplideSlide {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 2rem;
    padding: 0;
    margin: 0 0.6rem 2rem 0.6rem;

    li {
      flex: 1;
      width: 100%;
      button {
        display: none;
        width: 100%;
        cursor: pointer;
        padding: 1rem;
      }
    }
  }
  .button_tab_nav {
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-bottom: 2px solid whitesmoke;
    transition: 0.3s;
    height: 2.6rem;
    &.is-active {
      font-size: 1.625rem;
      color: #0095f6 !important;
      border-bottom: 2px solid #0095f6;
    }
  }
`;
export const CarouselItemMobile = styled.div`
  margin: 0 0.6rem;
  img {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }

  #year {
    text-align: center !important;
  }
  @media (min-width: 640px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
`;
