import { Highlight } from '@components';
import PhotosWrapper from './components/PhotosWrapper/PhotosWrapper';
import { ReportDesktop, ReportMobile } from './components';
import { useMedia } from '@hooks';
import { Container, Reports, StyledP } from './WhereYourDonationGoes.style';

const WhereYourDonationGoes = () => {
  const mobile = useMedia('(max-width: 960px)');
  return (
    <Container>
      <h1>
        Pra onde vai {mobile ? <br /> : ''}sua <Highlight>doação</Highlight>
      </h1>
      <StyledP>
        Prezamos pela transparência no nosso trabalho, por isso disponibilizamos
        à comunidade relatórios detalhados sobre como e onde foram aplicados os
        valores recebidos em doações.
      </StyledP>
      <Reports>{mobile ? <ReportMobile /> : <ReportDesktop />}</Reports>
      {/* <PhotosWrapper/> */}
    </Container>
  );
};

export default WhereYourDonationGoes;
