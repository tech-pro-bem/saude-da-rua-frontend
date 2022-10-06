import { Structure } from '@components';
import { WhoCanVolunteer, Banner } from './containers';
import { Head } from '@hooks';
import { VolunteersContainer } from './containers/Volunteers.style';

const Volunteers = () => {
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
        </Structure>
      </VolunteersContainer>
    </>
  );
};

export default Volunteers;
