import React from 'react';
import { BannerContainer, Text, Button } from './Banner.style';
import { ButtonDonation } from '../../../../../shared/components/index';
import img from '../../../../../assets/voluntary.jpg';

const Banner_voluntary = () => (
  <BannerContainer>
    <div className="banner">
      <Text>
        <img className="bannerPhoto" src={img} alt="Foto dos volutários" />
        <h1>
          Doe e <span>ajude</span> pessoas em situação de rua
        </h1>
        <p className="big">
          Nos ajude a levar atendimento médico humanizado e recorrente à
          população vulnerável.
        </p>
        <h4>Faça parte dessa ação!</h4>
      </Text>

      <Button>
        <ButtonDonation />
      </Button>
    </div>
  </BannerContainer>
);

export default Banner_voluntary;
