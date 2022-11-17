import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 3rem 0 0 0;
  padding: 0.6rem;

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
  }
  .button_tab_nav {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    color: white;
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-bottom: 2px solid whitesmoke;
    transition: 0.3s;
    height: 2.6rem;
    &.active {
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

export const H2Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
  font-feature-settings: 'pnum' on, 'onum' on;
  margin-bottom: 1.5rem;

  /* Cores primárias/Light */

  color: #b2dffc;
`;
