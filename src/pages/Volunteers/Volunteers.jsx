import { Structure } from '@components';
import { Head, useMedia } from '@hooks';
import {
  Banner,
  WhatDoWeExpectDesktop,
  WhatDoWeExpectMobile,
  ExperienceDesktop,
  ExperienceMobile,
  HowTheExperienceMobile,
  WhoCanVolunteer,
} from './containers';
import HowTheExperienceDesktop from './containers/ HowWillTheExperience/Desktop/HowTheExperienceDesktop';
import { VolunteersContainer } from './containers/Volunteers.style';

const Volunteers = () => {
  const smallMobile = useMedia('(max-width:640px)');
  const mobile = useMedia('(max-width:960px)');

  return (
    <>
      <Head
        title="Seja voluntario"
        description="Se você é estudante ou profissional da área da Saúde, participe das nossas ações!"
      />
      <Banner />
      <VolunteersContainer>
        <Structure>
          <WhoCanVolunteer />
          {mobile ? <HowTheExperienceMobile /> : <HowTheExperienceDesktop />}
          {smallMobile ? <WhatDoWeExpectMobile /> : <WhatDoWeExpectDesktop />}
          {mobile ? <ExperienceMobile /> : <ExperienceDesktop />}
        </Structure>
      </VolunteersContainer>
    </>
  );
};

export default Volunteers;
