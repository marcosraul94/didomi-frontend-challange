import React from 'react';
import AgreementText from './AgreementsText';
import { AgreementsOuterContainer } from './styles';
import AgreementsList from './AgreementsList';

const Agreements = () => (
  <AgreementsOuterContainer>
    <AgreementText />
    <AgreementsList />
  </AgreementsOuterContainer>
);

export default Agreements;
