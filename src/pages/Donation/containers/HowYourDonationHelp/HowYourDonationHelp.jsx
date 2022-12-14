import { Highlight } from '@components';
import {
  AccountabilityContainer,
  AccountabilityItem,
  Container,
} from './HowYourDonationHelp.style';
import { accountabilityItemContent } from './HowYourDonationHelpContent';

const HowYourDonationHelp = () => {
  return (
    <>
      <Container>
        <h2>
          Como a sua doação nos <Highlight>ajuda</Highlight>
        </h2>
        <AccountabilityContainer>
          {accountabilityItemContent.map(({ content, img }, index) => {
            return (
              <AccountabilityItem
                key={index}
                orderImage={img.order}
                orderContent={content.order}
              >
                <img src={img.src} alt={img.alt} />
                <div className="content">
                  <h3>{content.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
                </div>
              </AccountabilityItem>
            );
          })}
        </AccountabilityContainer>
      </Container>
    </>
  );
};

export default HowYourDonationHelp;
