import {
  ForWhatPurposesDoWeCollectTheData,
  GeneralInformation,
  Headline,
  HowDoWeCollectPersonalData,
  HowLongIsTheDataStored,
  SecurityOfData,
  WhatPersonalDataDoWeCollect,
  DataSharing,
  CookiesAndBrowsingData,
  LegalConsent,
  ChangesToTheCurrentPrivacyPolicy,
  JurisdictionForDisputeResolution,
} from './containers';

import { Container, Content } from './style';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Headline />
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
    </Container>
  );
};

export default PrivacyPolicy;
