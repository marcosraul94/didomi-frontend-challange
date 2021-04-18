import React from 'react';
import MainSectionContainer from '../MainSection';
import NameInput from '../NameInput';
import EmailInput from '../EmailInput';
import NameAndEmailContainer from './styles';
import Agreements from '../Agreements';
import GiveConsentButton from '../GiveConsentButton';

const ConsentForm = () => (
  <MainSectionContainer>
    <NameAndEmailContainer>
      <NameInput />
      <EmailInput />
    </NameAndEmailContainer>
    <Agreements />
    <GiveConsentButton />
  </MainSectionContainer>
);

export default ConsentForm;
