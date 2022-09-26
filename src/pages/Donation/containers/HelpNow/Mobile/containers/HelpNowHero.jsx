import styled from 'styled-components';
import { galleryImg3 } from '@assets/donationPage';

const HelpNowHeroContainer = styled.section`
  margin: 0;
  padding: 0px;
  margin-bottom: 2rem;
  display: grid;
  position: relative;

  div.content {
    position: absolute;
    top: 6rem;
    left: 0;
    padding: 3rem 15px;
    p {
      font-size: 18px;
      strong {
        color: #0095f6;
      }
    }
    @media (max-width: 450px) {
      top: 2rem;
    }
    @media (max-width: 320px) {
      top: -1rem;
    }
  }
  .background {
    background: url(${galleryImg3}) no-repeat center center;
    filter: blur(2px);
    opacity: 0.3;
    height: 322px;
    background-size: cover;
  }
`;

const HelpNowHero = () => {
  return (
    <HelpNowHeroContainer>
      <div className="background" />

      <div className="content">
        <h2>
          <strong>Doe</strong> agora mesmo
        </h2>
        <p>
          Qualquer valor é bem vindo, mas sugerimos doações de{' '}
          <strong> R$ 15</strong>, <strong>R$ 30</strong>,{' '}
          <strong>R$ 50</strong>, <strong>R$ 100</strong> ou{' '}
          <strong>R$ 200</strong>!
        </p>
      </div>
    </HelpNowHeroContainer>
  );
};

export default HelpNowHero;
