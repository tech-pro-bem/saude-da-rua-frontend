import { HelpNowHeroContainer } from './HelpNow.style';

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
