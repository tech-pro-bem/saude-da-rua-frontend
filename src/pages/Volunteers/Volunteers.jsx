import { Structure } from '@components';
import {
  WhoCanVolunteer,
  Banner,
  ExperienceMobile,
  ExperienceDesktop,
} from './containers';
import { Head, useMedia } from '@hooks';
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
          {mobile ? <ExperienceMobile /> : <ExperienceDesktop />}
        </Structure>
      </VolunteersContainer>
    </>
  );
};

export default Volunteers;
