import { Structure } from '@components';
import { Head, useMedia } from '@hooks';
import {
  Banner,
  ExperienceDesktop,
  ExperienceMobile,
  HowTheExperienceMobile,
  WhoCanVolunteer,
} from './containers';
import { VolunteersContainer } from './containers/Volunteers.style';

const Volunteers = () => {
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
          <HowTheExperienceMobile />
          {mobile ? <ExperienceMobile /> : <ExperienceDesktop />}
        </Structure>
      </VolunteersContainer>
    </>
  );
};

export default Volunteers;
