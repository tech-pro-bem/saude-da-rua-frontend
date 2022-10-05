import { Structure } from '@components';
import { Headline, WhoCanVolunteer } from './containers';
import { Head } from '@hooks';
import { VolunteersContainer } from './containers/Volunteers.style';

const Volunteers = () => {
  return (
    <>
      <Head
        title="Seja voluntario"
        description="Se você é profissional ou estudante da área da saúde, participe das ações do Saúde da Rua"
      />
      <VolunteersContainer>
        <Headline />
        <Structure>
          <WhoCanVolunteer />
        </Structure>
      </VolunteersContainer>
    </>
  );
};

export default Volunteers;
