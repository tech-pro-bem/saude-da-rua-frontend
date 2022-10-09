import { Structure } from '@components';
import {
  Banner,
  WhoCanVolunteer,
  WhatDoWeExpectDesktop,
  WhatDoWeExpectMobile,
  ExperienceMobile,
  ExperienceDesktop,
} from './containers';
import { Head, useMedia } from '@hooks';
import { VolunteersContainer } from './containers/Volunteers.style';

const Volunteers = () => {
  const smallMobile = useMedia('(max-width:640px)');
  const mobile = useMedia('(max-width:960px)');
  
  return (
    <>
      <Banner />
      <Head
        title="Seja voluntario"
        description="Se você é profissional ou estudante da área da saúde, participe das ações do Saúde da Rua"
      />
      <VolunteersContainer>
        <Structure>
          <WhoCanVolunteer />
          {smallMobile ? <WhatDoWeExpectMobile /> : <WhatDoWeExpectDesktop />}
          {mobile ? <ExperienceMobile /> : <ExperienceDesktop />}
        </Structure>
      </VolunteersContainer>
    </>
  );
};

export default Volunteers;
