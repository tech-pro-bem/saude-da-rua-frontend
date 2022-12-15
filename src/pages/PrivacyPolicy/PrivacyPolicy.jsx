import {
  ChangesToTheCurrentPrivacyPolicy,
  CookiesAndBrowsingData,
  DataSharing,
  ForWhatPurposesDoWeCollectTheData,
  GeneralInformation,
  Headline,
  HowDoWeCollectPersonalData,
  HowLongIsTheDataStored,
  JurisdictionForDisputeResolution,
  LegalConsent,
  SecurityOfData,
  Summary,
  WhatPersonalDataDoWeCollect,
} from './containers';

import { Container, Content, SummaryContent } from './style';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Headline />
      <SummaryContent>
        <Summary />

        <Content>
          <GeneralInformation />
          <HowDoWeCollectPersonalData />
          <WhatPersonalDataDoWeCollect />
          <ForWhatPurposesDoWeCollectTheData />
          <HowLongIsTheDataStored />
          <SecurityOfData />
          <DataSharing />
          <CookiesAndBrowsingData />
          <LegalConsent />
          <ChangesToTheCurrentPrivacyPolicy />
          <JurisdictionForDisputeResolution />
        </Content>
      </SummaryContent>
    </Container>
  );
};

export default PrivacyPolicy;
